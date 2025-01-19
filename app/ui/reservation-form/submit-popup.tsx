import { MdError } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import clsx from "clsx";
export default function SubmitPopup({
  isSuccess,
  message,
  onClose,
}: {
  isSuccess: boolean;
  message: string | undefined;
  onClose: () => void;
}) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center">
        <div className="flex items-center justify-center mb-4">
          {isSuccess ? (
            <FaRegCheckCircle className="h-10 w-10 text-green-600" />
          ) : (
            <MdError className="h-10 w-10 text-red-500" />
          )}
        </div>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          className={clsx(
            "text-white px-4 py-2 rounded",
            isSuccess
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          )}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
