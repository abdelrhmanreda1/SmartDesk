import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBox,
  faGlobe,
  faEnvelope,
  faClock,
  faLocationDot,
  faGear,
  faRightFromBracket,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export default function SidebarMenu() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`
        bg-[#7659ff]
        rounded-e-3xl 
        py-6 
        flex flex-col justify-between 
        transition-all duration-300 
        overflow-visible
        ${collapsed ? "w-20" : "w-[260px]"}
      `}
    >
      <div className="flex items-center justify-between px-5 mt-6">
        {!collapsed && (
          <button className="bg-[#6045e2] text-white font-semibold text-[11px] px-4 py-[7px] rounded-xl flex items-center gap-2 tracking-wide">
            CABANG YOG
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[8px] opacity-80 translate-y-px"
            />
          </button>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-[#6045e2] w-7 h-7 text-white rounded-full flex items-center justify-center ml-3 cursor-pointer"
        >
          {collapsed ? (
            <FontAwesomeIcon icon={faChevronRight} />
          ) : (
            <FontAwesomeIcon icon={faChevronLeft} />
          )}
        </button>
      </div>

      <div className="mt-10 flex flex-col gap-2 pl-5">
        <SidebarItem
          icon={faChartLine}
          label="DASHBOARD"
          to="/"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={faBox}
          label="SHIPMENT"
          to="/shipment"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={faGlobe}
          label="TRACKING"
          to="/tracking"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={faEnvelope}
          label="MESSAGES"
          to="/messages"
          badge="358"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={faRobot}
          label="AI CHAT"
          to="/ai-chat"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={faClock}
          label="REVENUE"
          to="/revenue"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={faLocationDot}
          label="MAPS"
          to="/maps"
          collapsed={collapsed}
        />
      </div>

      <div className="flex flex-col gap-5 mt-10 pl-5">
        <SidebarItem
          icon={faGear}
          label="SETTINGS"
          to="/settings"
          collapsed={collapsed}
        />
        <div
          className={`
    flex items-center px-4 py-3 rounded-s-[20px] transition-all duration-300 
    text-white/80 hover:text-white cursor-pointer 
    ${collapsed ? "justify-center" : "gap-3"}
  `}
          onClick={() => {
            console.log("logging out…");
          }}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="text-[18px]" />
          {!collapsed && (
            <span className="font-medium tracking-wide">LOGOUT</span>
          )}
        </div>
      </div>
    </div>
  );
}
