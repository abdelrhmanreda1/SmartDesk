export default function SidebarMini() {
  return (
    <div className="w-[60px] bg-[#5f44e1] rounded-[26px] py-6 flex flex-col items-center">
      <div className="mt-6 mb-14 rotate-90 select-none">
        <span className="text-white font-extrabold tracking-[2px] text-[14px]">
          Julain.
        </span>
      </div>

      <div className="flex flex-col gap-8 mt-14">
        {["#FAD658", "#AE73FF", "#FF7A7A"].map((color, i) => (
          <div
            key={i}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white font-bold"
            style={{ backgroundColor: color }}
          >
            {"BAC"[i]}
          </div>
        ))}

        <button className="w-8 h-8 pb-2 rounded-lg bg-[#6F4DFF] text-white text-xl hover:bg-[#7a5fff] transition">
          +
        </button>
      </div>
    </div>
  );
}
