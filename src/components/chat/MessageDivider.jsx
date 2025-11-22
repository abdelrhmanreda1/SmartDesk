export default function MessageDivider({ text }) {
  return (
    <div className="flex items-center justify-center my-8">
      <span className="text-xs text-gray-400 tracking-wide">{text}</span>
    </div>
  );
}
