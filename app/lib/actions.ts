"use server";

export async function submitPatient(
  prevState: string | undefined,
  formData: FormData
) {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");   
    console.log("First Name:", first_name);
    console.log("Last Name:", last_name);

    const response = await fetch(process.env.PATIENTS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_name: first_name, last_name: last_name }),
    });
    if (!response.ok) {
      throw new Error("Failed to submit patient details.");
    }
}
