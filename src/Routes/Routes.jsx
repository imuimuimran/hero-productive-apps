import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AppProducts from "../Pages/AppProducts";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import InstallApp from "../Pages/InstallApp";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/app-products',
        element: <AppProducts></AppProducts>
      },
      {
        path: '/install-app',
        element: <InstallApp></InstallApp>
      },
      {
        path: '/app-detail/:id',
        element: <AppDetails></AppDetails>
      },
      { path: "*", 
        element: <ErrorPage></ErrorPage> 
      },
    ]
  },
]);

export default router;