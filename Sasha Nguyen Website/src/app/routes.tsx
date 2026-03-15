import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Resume } from "./pages/Resume";
import { CaseStudy } from "./pages/CaseStudy";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "resume", Component: Resume },
      { path: "case-study/:slug", Component: CaseStudy },
    ],
  },
]);
