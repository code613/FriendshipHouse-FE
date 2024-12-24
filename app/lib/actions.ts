"use server";

export async function submitPatient(
  state: void | undefined,
  payload: FormData
): Promise<void | undefined> {
  const first_name = payload.get("first_name");
  const last_name = payload.get("last_name");
  console.log("First Name:", first_name);
  console.log("Last Name:", last_name);

  const apiUrl = process.env.PATIENTS_API;
  if (!apiUrl) {
    throw new Error("PATIENTS_API environment variable is not defined.");
  }
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName: first_name, lastName: last_name }),
  });
  if (!response.ok) {
    throw new Error("Failed to submit patient details.");
  }
}
