
import { Navigate } from "react-router-dom";
import App from '../../App';
import { SuperAdmin } from "../../pages/super-admin";
import { Dashboard } from "../../pages/dashboard";


const AppRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to='/dashboard' replace /> },
      
      {
        path: "/super-admin",
        element: <SuperAdmin/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/orders",
        element: <h1> orders</h1>,
      },
      {
        path: "/menu-management",
        element: <h1> Menu</h1>,
      },
      {
        path: "/staff-management",
        element: <h1> Staff management</h1>,
      },
      {
        path: "/inventory",
        element: <h1> hello</h1>,
      },
      {
        path: "/reservations",
        element: <h1> hello</h1>,
      },
      {
        path: "/staffs",
        element: <h1> hello</h1>,
      },
      {
        path: "/records",
        element: <h1> Records</h1>,
      },
      {
        path: "/settings",
        element: <h1> hello</h1>,
      },
    //   {
    //     path: "/chat",
    //     element: (
    //       <PrivateRoute>
    //         <Chat />
    //       </PrivateRoute>
    //     ),
    //   },

    ],
  },
  // {
  //   path: "/signin",
  //   element: <Auth />,
  // },
];

export default AppRoutes;