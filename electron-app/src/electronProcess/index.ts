const path = require("path");
const fs = require("fs");
const { execFile, spawn } = require("child_process");
const { app, BrowserWindow, shell, ipcMain, dialog } = require("electron");
const isDev = require("electron-is-dev");

let win: Electron.BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 660,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("process-csv", (event, payload) => {
  const pyPath =
    process.platform === "darwin" ? "/py/mac/main" : "/py/windows/main.exe";

  const childProcess = execFile(__dirname + pyPath, ["get-columns", payload]);

  childProcess.stdout.on("data", (data: string) => {
    event.reply("process-csv", {
      error: false,
      errorMessage: "",
      data: JSON.parse(data),
      csvPath: payload,
    });
  });

  childProcess.stderr.on("data", (data: string) => {
    try {
      const message = data.split("Exception:")[1].split(".")[0];
      event.reply("process-csv", {
        error: true,
        errorMessage: message + ".",
        data: {},
      });
    } catch (e) {
      event.reply("process-csv", {
        error: true,
        errorMessage: "",
        data: {},
      });
    }
  });
});

ipcMain.on("choose-folder", async (event, payload) => {
  const result = await dialog.showOpenDialog(win!, {
    properties: ["openDirectory"],
  });
  if (result.canceled) return;
  event.reply("choose-folder", result.filePaths[0]);
});

ipcMain.on("generate-qr", (event, payload) => {
  const pyPath =
    process.platform === "darwin" ? "/py/mac/main" : "/py/windows/main.exe";

  const childProcess = execFile(__dirname + pyPath, [
    "generate-qr",
    ...payload,
  ]);

  childProcess.on("exit", (code: number) => {
    if (code === 0) {
      event.reply("generate-qr", {
        error: false,
        outDir: payload[payload.length - 1],
      });
    }
  });

  childProcess.stderr.on("data", (data: string) => {
    event.reply("generate-qr", {
      error: true,
      teMsg: data + fs.existsSync(__dirname + "/img/flymya-logo.png"),
    });
  });
});

ipcMain.on("open-folder", (event, payload) => {
  shell.showItemInFolder(payload);
});
