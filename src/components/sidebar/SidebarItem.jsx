import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarItem({ icon, label, to, badge, collapsed }) {
  return (
    <NavLink to={to} className="block relative">
      {({ isActive }) => (
        <div className="relative">
          <div
            className={`
              relative flex items-center px-4 py-3  text-md transition-all  duration-300  bg-[#7659ff] tracking-[1px]
              ${collapsed ? "justify-center" : "gap-3"}
              rounded-s-[40px]
              ${
                isActive
                  ? "bg-[#F8F7FC] text-[#8170D2]"
                  : "text-white/80 hover:text-white rounded-[40px]!"
              }
            `}
          >
            <FontAwesomeIcon icon={icon} className="text-[17px]" />

            {!collapsed && <span className="font-medium">{label}</span>}

            {!collapsed && badge && (
              <span className="ml-auto bg-[#F8F7FC] shadow text-[#8170D2] text-[10px] px-2 py-0.5 rounded-full font-semibold">
                {badge}
              </span>
            )}
          </div>
        </div>
      )}
    </NavLink>
  );
}
