import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/routes.tsx";


const router = createBrowserRouter(AppRoutes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* @ts-ignore */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </React.StrictMode>
);