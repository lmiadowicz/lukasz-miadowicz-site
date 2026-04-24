"use server";

export interface ContactState {
  success?: boolean;
  error?: string;
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (message.length > 5000) {
    return { error: "Message is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "Contact service unavailable. Please email l.miadowicz@gmail.com directly.",
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Contact Form <contact@miadowicz.com>",
      to: ["l.miadowicz@gmail.com"],
      reply_to: email,
      subject: `[miadowicz.com] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
  });

  if (!res.ok) {
    return {
      error: "Failed to send. Please email l.miadowicz@gmail.com directly.",
    };
  }

  return { success: true };
}
