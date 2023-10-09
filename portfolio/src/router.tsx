import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);