import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  openPath: (path: string) => ipcRenderer.send("open-folder", path),
  processCsv: (path: string) => ipcRenderer.send("process-csv", path),
  processCsvResponse: (cb: any) =>
    ipcRenderer.on("process-csv", (event, payload) => cb(payload)),
  chooseFolder: () => ipcRenderer.send("choose-folder"),
  chooseFolderResponse: (cb: any) =>
    ipcRenderer.on("choose-folder", (event, payload) => cb(payload)),
  generateQR: (
    csvPath: string,
    nameCol: string,
    urlCol: string,
    logo: string,
    outDir: string
  ) =>
    ipcRenderer.send("generate-qr", [csvPath, nameCol, urlCol, logo, outDir]),
  generateQRResponse: (cb: any) =>
    ipcRenderer.on("generate-qr", (event, payload) => cb(payload)),
});
