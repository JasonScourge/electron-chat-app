import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "../css/App.css";
import SignUpPhone from "../pages/SignUpPhone";
import SignUpCode from "../pages/SignUpCode";
import SignUpName from "../pages/SignUpName";
import Chat from "../pages/Chat";

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
  {
    path: "/chat",
    element: <Chat />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
