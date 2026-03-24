"use server";

export async function subscribe(prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;

  if (!email) {
    return { error: "Email is required." };
  }

  try {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        fields: { name: name ?? "" },
        groups: ["182762483392448260"],
      }),
    });

    if (!res.ok) {
      return { error: "Something went wrong. Please try again." };
    }

    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
