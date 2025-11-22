import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Shipment from "./pages/Shipment";
import Tracking from "./pages/Tracking";
import Messages from "./pages/Messages";
import Revenue from "./pages/Revenue";
import Maps from "./pages/Maps";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import AiChat from "./pages/AiChat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "shipment", element: <Shipment /> },
        { path: "tracking", element: <Tracking /> },
        { path: "messages", element: <Messages /> },
        { path: "ai-chat", element: <AiChat /> },
        { path: "revenue", element: <Revenue /> },
        { path: "maps", element: <Maps /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
