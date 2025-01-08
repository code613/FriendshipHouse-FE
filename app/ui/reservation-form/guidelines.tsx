import Link from "next/link";

export default function Guidelines() {
  return (
    <>
      <div className="p-5 font-sans">
        <div className="mb-2">
          <Link
            href="/files/GuidelinesEnglish.pdf"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Click here to view guidelines in english
          </Link>
        </div>

        <div className="mb-2">
          <Link
            href="/files/GuidelinesHebrew.pdf"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Click here to view guidelines in hebrew
          </Link>
        </div>

        <div className="mb-2">
          <Link
            href="/files/GuidelinesYiddish.pdf"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Click here to view guidelines in yiddish
          </Link>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <input type="checkbox" id="mark-as-read" required/>
          <label htmlFor="mark-as-read" className="text-sm text-gray-800">
            I have read and understood the guidelines
          </label>
        </div>
      </div>
    </>
  );
}
