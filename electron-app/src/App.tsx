import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  );
}

export default App;
