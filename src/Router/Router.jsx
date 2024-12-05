import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ImageGenerator from "../Components/ImageGenerator";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <ImageGenerator />,
      },
    ],
  },
]);

export default Router;