import * as React from "react";
import { createRoot, StrictMode } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />

    </AuthProvider>
  </React.StrictMode>
)
