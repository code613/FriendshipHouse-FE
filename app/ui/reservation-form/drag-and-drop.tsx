import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function DragAndDrop({
  name,
  wantedFile,
}: {
  name: string;
  wantedFile: string;
}) {
  const [file, setFile] = useState<File | null>(null); // State to store the uploaded file

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]); // Store the first file
    }
  }, []);

  const deleteFile = () => {
    setFile(null); // Clear the file
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [], "image/*": [] }, // Customize accepted file types
    multiple: false, // Allow only a single file
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 rounded-lg cursor-pointer text-center ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} name={name} required/>
        {isDragActive ? (
          <p className="text-blue-500">Drop the file here...</p>
        ) : (
          <p className="text-gray-500">
            {`Drag and drop ${wantedFile}, or click to select a file`}
          </p>
        )}
        <p className="text-sm text-gray-400 mt-2">
          (Accepted formats: PDF, images. Max size: 5MB)
        </p>
      </div>

      {file && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm text-gray-700 flex items-center space-x-4">
          {file.type.startsWith("image/") ? (
            <Image
              src={URL.createObjectURL(file)}
              alt="Preview"
              width={48}
              height={48}
              className="rounded-full shadow-md"
            />
          ) : file.type === "application/pdf" ? (
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-500 rounded-full shadow-md">
              📄
            </div>
          ) : (
            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full shadow-md">
              ❓
            </div>
          )}
          <div className="flex-1">
            <p>{file.name}</p>
          </div>
          <button
            onClick={deleteFile}
            type="button"
            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
