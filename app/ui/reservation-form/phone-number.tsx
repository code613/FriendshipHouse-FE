import { useState } from "react";

export default function PhoneNumber({ inputName }: { inputName: string }) {
  const [phoneValue, setPhoneValue] = useState("");

  const formatPhoneNumber = (input: string) => {
    // Remove all non-digit characters
    const digits = input.replace(/\D/g, "");

    // Format the number as `123-456-7890`
    const formatted =
      digits.length > 6
        ? `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
        : digits.length > 3
        ? `${digits.slice(0, 3)}-${digits.slice(3)}`
        : digits;

    return formatted;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPhoneValue(formatPhoneNumber(inputValue));
  };

  return (
    <>
      {" "}
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name={inputName}
        placeholder="Cell (xxx-xxx-xxxx)"
        onChange={handleChange}
        value={phoneValue}
        className="w-full border rounded p-2"
      />
    </>
  );
}
