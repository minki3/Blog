import { EmailType } from "./email";
export async function sendContactEmail(email: EmailType) {
  const response = await fetch("/api/contact", {
    method: "post",
    body: JSON.stringify(email),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버요청 실패");
  }
  return data;
}
