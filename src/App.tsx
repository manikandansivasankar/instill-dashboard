import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/_layout";
import {
  Dashboard,
  ErrorFallback,
  UnderConstruction,
} from "./components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "overview",
        element: <UnderConstruction name="overview" />,
      },
      {
        path: "chat",
        element: <UnderConstruction name="chat" />,
      },
      {
        path: "teams",
        element: <UnderConstruction name="teams" />,
      },
      {
        path: "components",
        element: <UnderConstruction name="components" />,
      },
      {
        path: "settings",
        element: <UnderConstruction name="settings" />,
      },
      {
        path: "tasks",
        element: <UnderConstruction name="tasks" />,
      },
      {
        path: "reports",
        element: <UnderConstruction name="reports" />,
      },
      {
        path: "upgrade",
        element: <UnderConstruction name="upgrade" />,
      },
      {
        path: "countries",
        element: <UnderConstruction name="countries" />,
      },
      {
        path: "segmentation",
        element: <UnderConstruction name="segmentation" />,
      },
      {
        path: "satisfaction",
        element: <UnderConstruction name="satisfaction" />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="relative">
      <RouterProvider router={router} />
      <div id="moreModalRoot" className="absolute right-0 top-0"></div>
    </div>
  );
}

export default App;
