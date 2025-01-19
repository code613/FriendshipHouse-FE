import { Button } from "../button";

interface SubmitButtonProps {
  isPending: boolean;
}

export default function SubmitButton({ isPending }: SubmitButtonProps) {
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
      </div>
    </>
  );
}
