"use server";

export async function subscribeToCreatorPlaybook(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, groups: ["183012418121631139"] }),
    });

    if (response.ok) {
      return { success: true };
    }

    return { success: false, error: "Failed to subscribe" };
  } catch {
    return { success: false, error: "Failed to subscribe" };
  }
}
