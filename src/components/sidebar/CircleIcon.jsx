import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CircleIcon({ icon }) {
  return (
    <button className="w-10 h-10 rounded-full bg-[#6c50ff] flex items-center justify-center hover:bg-[#7a5fff] transition-all">
      <FontAwesomeIcon icon={icon} className="text-sm" />
    </button>
  );
}
