import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faEllipsisVertical,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function MessageTopBar({ searchTerm, onSearchChange }) {
  const openSidebar = () =>
    window.dispatchEvent(new CustomEvent("open-sidebar"));

  return (
    <div className="w-full flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
      <div className="flex items-center bg-white shadow-sm rounded-full px-4 md:px-5 py-2 md:py-3 border border-gray-100 w-full md:w-[480px]">
        <button
          className="md:hidden mr-3 bg-[#7659ff] text-white w-9 h-9 rounded-xl flex items-center justify-center"
          onClick={openSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <button className="hidden md:flex items-center gap-2 text-[#939295] text-sm">
          All Category
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[10px] opacity-60"
          />
        </button>

        <div className="hidden md:block w-px h-5 bg-gray-200 mx-5" />

        <input
          type="text"
          placeholder="Search messages..."
          className="flex-1 text-sm outline-none placeholder-[#939295] text-gray-600"
          value={searchTerm}
          onChange={(e) => onSearchChange?.(e.target.value)}
        />

        <FontAwesomeIcon
          icon={faSearch}
          className="text-gray-300 text-[14px] ml-2"
        />
      </div>

      <div className="hidden md:flex items-center gap-4 relative">
        <div className="relative w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faBell}
            className="text-[#939295] text-[18px] opacity-90"
          />
          <span className="absolute top-[3px] right-[3px] w-1.5 h-1.5 bg-[#7B64FF] rounded-full" />
        </div>

        <img src="/user.jpg" className="w-8 h-8 rounded-xl object-contain" />

        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="text-gray-400 text-[18px] cursor-pointer hover:text-gray-700"
        />
      </div>
    </div>
  );
}
