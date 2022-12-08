import React from "react";
import { createHashRouter } from "react-router-dom";

import SuccessMessage from "./features/successMessage/ui/SuccessMessage";
import HomePage from "./pages/HomePage";
import QRGeneratePage from "./pages/QRGeneratePage";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/generate",
    element: <QRGeneratePage />,
  },
  {
    path: "/success",
    element: <SuccessMessage />,
  },
]);

export default router;
