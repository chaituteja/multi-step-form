import NotFoundPage from "./pages/NotFoundPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import SummaryPage from "./pages/SummaryPage";
import AddressPage from "./pages/AddressPage";
import PreferencesPage from "./pages/PreferencesPage";
import Layout from "./layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <PersonalInfoPage />,
      },
      {
        path: "/address",
        element: <AddressPage />,
      },
      {
        path: "/preferences",
        element: <PreferencesPage />,
      },
      {
        path: "/summary",
        element: <SummaryPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
