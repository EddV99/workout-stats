import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/details/:id", element: <DetailsPage /> },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
