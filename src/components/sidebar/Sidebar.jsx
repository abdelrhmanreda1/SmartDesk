import { useEffect, useState } from "react";
import SidebarMini from "./SidebarMini";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-sidebar", handler);
    return () => window.removeEventListener("open-sidebar", handler);
  }, []);

  return (
    <>
      <div className="hidden md:flex bg-[#7659ff] rounded-br-3xl rounded-tr-3xl">
        <SidebarMini />
        <SidebarMenu />
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-full flex bg-[#7659ff]
          rounded-r-3xl shadow-2xl z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <SidebarMini />
        <SidebarMenu />

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ×
        </button>
      </div>
    </>
  );
}
