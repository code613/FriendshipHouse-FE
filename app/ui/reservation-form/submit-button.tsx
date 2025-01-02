import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";

interface SubmitButtonProps {
  isPending: boolean;
  errorMessage?: void | undefined;
}

export default function SubmitButton({
  isPending,
  errorMessage,
}: SubmitButtonProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Button
          className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md ${
            isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-disabled={isPending}
        >
          Submit
        </Button>
        {errorMessage ? (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        ) : null}
      </div>
    </>
  );
}
