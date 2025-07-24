import { lazy } from "react";
import { allPaths } from "./path.js";

const Home = lazy(() => import("../pages/home/index.jsx"));

export const allRoutes = [
  {
    path: allPaths.home,
    element: Home,
  },
];
