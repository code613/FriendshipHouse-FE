import { GarbageIcon } from "@/app/ui/garbage-icon";

export default function DeleteGuestButton({
  deleteGuest,
  handleKeyDown,
}: {
  deleteGuest: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}) {
  return (
    <span
      className="text-red-500 hover:text-red-700 text-xs cursor-pointer flex items-center space-x-1"
      role="button"
      tabIndex={0}
      onClick={deleteGuest}
      onKeyDown={handleKeyDown}
    >
      <GarbageIcon />
      <span>Delete</span>
    </span>
  );
}
