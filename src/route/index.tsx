import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Admin from "../layout/admin";
// import "assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "../modules/admin/Dashboard";
import Tables from "../modules/admin/Tables";

export default function Modules() {
  const server = createBrowserRouter([
    {
      path: "/",

      element: <Admin />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: "/tables",
          element: <Tables />,
        },
      ],
    },
  ]);
  return <RouterProvider router={server} />;
}
