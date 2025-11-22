import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ChatFileMessage({ files }) {
  return (
    <div className="flex justify-center gap-4 my-4">
      {files.map((file, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="w-7 h-7 rounded-md bg-purple-100 flex items-center justify-center text-purple-500 text-sm">
            {file.ext?.toUpperCase() || "FILE"}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700">{file.name}</p>
            <p className="text-xs text-gray-400">{file.size}</p>
          </div>

          <FontAwesomeIcon
            icon={faDownload}
            className="text-purple-500 text-sm cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
