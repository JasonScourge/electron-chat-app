import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "../css/App.css";
import SignUpPhone from "../pages/SignUpPhone";
import SignUpCode from "../pages/SignUpCode";
import SignUpName from "../pages/SignUpName";

const router = createHashRouter([
  {
    path: "/",
    element: <SignUpPhone />,
  },
  {
    path: "/signUpCode",
    element: <SignUpCode />,
  },
  {
    path: "/signUpName",
    element: <SignUpName />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
