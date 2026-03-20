import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type RequestInviteBody = {
  email?: string;
};

type RequestInviteRequest = {
  method?: string;
  body?: unknown;
};

type RequestInviteResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => {
    json: (payload: Record<string, string | boolean>) => void;
  };
};

const parseBody = (body: unknown): RequestInviteBody => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body) as RequestInviteBody;
    } catch {
      return {};
    }
  }

  if (typeof body === "object") {
    return body as RequestInviteBody;
  }

  return {};
};

export default async function handler(
  req: RequestInviteRequest,
  res: RequestInviteResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!resend) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY" });
  }

  const { email } = parseBody(req.body);
  const normalizedEmail = email?.trim().toLowerCase();

  if (!normalizedEmail) {
    return res.status(400).json({ error: "Email is required" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalizedEmail)) {
    return res.status(400).json({ error: "Enter a valid email address" });
  }

  try {
    await resend.emails.send({
      from: "Kabifi Website <contact@kabifi.com>",
      to: ["contact@kabifi.com"],
      replyTo: normalizedEmail,
      subject: `New Kabifi invite request from ${normalizedEmail}`,
      html: `
        <p>You received a new request invite submission from the Kabifi website.</p>
        <p><strong>Email:</strong> ${normalizedEmail}</p>
      `,
      text: `You received a new request invite submission from the Kabifi website.\n\nEmail: ${normalizedEmail}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send invite request email", error);
    return res.status(500).json({ error: "Unable to send invite request" });
  }
}
