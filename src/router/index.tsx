import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../pages/layouts/MainLayout";
import ManageLayout from "../pages/layouts/ManageLayout";
import QuestionLayout from "../pages/layouts/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import MineQuestionnaire from "../pages/manage/MineQuestionnaire";
import StarQuestionnaire from "../pages/manage/StarQuestionnaire";
import Trash from "../pages/manage/Trash";
import Edit from "../pages/question/edit";
import Statistic from "../pages/question/statistic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/manage",
        element: <ManageLayout />,
        children: [
          {
            path: "/manage/list",
            element: <MineQuestionnaire />,
          },
          {
            path: "/manage/star",
            element: <StarQuestionnaire />,
          },
          {
            path: "/manage/trash",
            element: <Trash />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/question",
    element: <QuestionLayout />,
    children: [
      {
        path: "/question/edit/:id",
        element: <Edit />,
      },
      {
        path: "/question/statistic/:id",
        element: <Statistic />,
      },
    ],
  },
]);

export default router;

// ----------------------

export const HOME_PATHNAME = "/";
export const LOGIN_PATHNAME = "/login";
export const REGISTER_PATHNAME = "/register";
export const MANAGE_LIST_PATHNAME = "/manage/list";
export const MANAGE_STAR_PATHNAME = "/manage/star";
export const MANAGE_TRASH_PATHNAME = "/manage/trash";
