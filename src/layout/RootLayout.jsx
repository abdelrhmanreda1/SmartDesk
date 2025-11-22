import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#B7A3FF] flex items-center justify-center p-4 md:p-8">
      <button
        className="md:hidden fixed top-2 left-2 z-50 bg-[#7659ff] text-white
                   w-10 h-10 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => window.dispatchEvent(new CustomEvent("open-sidebar"))}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="w-[1200px] h-[700px] bg-[#f8f7fc] rounded-3xl shadow-xl flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 bg-[#f8f7fc] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
