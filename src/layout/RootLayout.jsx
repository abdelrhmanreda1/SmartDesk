import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#B7A3FF] flex items-center justify-center p-4 md:p-8">
      <div className="w-[1200px] h-[700px] bg-[#f8f7fc]  rounded-3xl shadow-xl flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 bg-[#f8f7fc] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
