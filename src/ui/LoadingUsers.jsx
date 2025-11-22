export default function LoadingUsers() {
  const items = Array.from({ length: 5 });

  return (
    <div className="flex flex-col gap-3 animate-pulse px-2">
      {items.map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white/40 p-3 rounded-xl"
        >
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

          <div className="flex-1 flex flex-col gap-2">
            <div className="w-32 h-3 bg-gray-300 rounded"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
          </div>

          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}
