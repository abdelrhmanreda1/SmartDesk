export default function ErrorState({
  message = "Something went wrong",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center w-full">
      <p className="text-gray-600 mb-3 text-sm">{message}</p>

      <button
        onClick={onRetry}
        className="
          px-4 py-2 bg-[#6b4bff] text-white rounded-lg shadow-sm
          hover:bg-[#5d3fe0] transition
          text-sm
        "
      >
        Retry
      </button>
    </div>
  );
}
