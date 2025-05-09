import { Projects } from "../Components/Projects";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";


const router = createHashRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: `/projects/1`,
    element : <Projects></Projects>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);