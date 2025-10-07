import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AppProducts from "../Pages/AppProducts";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/app-products',
        element: <AppProducts></AppProducts>
      }
    ]
  },
]);

export default router;