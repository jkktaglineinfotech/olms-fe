import Login from "../presentation/auth/Login";
import AdminBooksComponent from "../presentation/admin/AdminBooksComponent";
import UserBooksComponent from "../presentation/books/UserBooksComponent";
import AdminUsersComponent from "../presentation/admin/AdminUsersComponent";
import AdminTransactionsComponent from "../presentation/admin/AdminTransactionsComponent";
import ProtectedAdminRoute from "../presentation/auth/ProtectedAdminRoute";
import ProtectedUserRoute from "../presentation/auth/ProtectedUserRoute";
import NotFound from "../presentation/layout/NotFound";
import Home from "../presentation/user/Home";
import Profile from "../presentation/user/Profile";

const privateRoutes = [
  {
    element: <ProtectedUserRoute />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/transactions", element: <UserBooksComponent /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
];

const adminRoutes = [
  {
    element: <ProtectedAdminRoute />,
    children: [
      { path: "/admin/home", element: <AdminBooksComponent /> },
      { path: "/admin/users", element: <AdminUsersComponent /> },
      { path: "/admin/transactions", element: <AdminTransactionsComponent /> },
    ],
  },
];

const publicRoutes = [
  {
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const routes = [...privateRoutes, ...adminRoutes, ...publicRoutes];
export default routes;
