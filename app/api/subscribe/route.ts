import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "subscribers.json");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readSubscribers(): Promise<string[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: string[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2));
}

async function sendWelcomeEmail(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "CancelBefore <hello@cancelbefore.app>",
    to: email,
    subject: "Welcome to CancelBefore",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h2>Welcome to CancelBefore!</h2>
        <p>Thanks for signing up. You're now on the list for subscription-saving tips and product updates.</p>
        <p>CancelBefore helps you track every subscription and trial so you never get surprised by a charge again — all without linking your bank account.</p>
        <p>Stay tuned for tips on cutting subscription costs and updates on new features.</p>
        <p style="color: #64748b; font-size: 14px; margin-top: 32px;">— The CancelBefore Team</p>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body.email ?? "").trim().toLowerCase();

    if (!email || !EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const subscribers = await readSubscribers();

    if (subscribers.includes(email)) {
      return Response.json(
        { error: "This email is already subscribed." },
        { status: 400 }
      );
    }

    subscribers.push(email);
    await writeSubscribers(subscribers);

    try {
      await sendWelcomeEmail(email);
    } catch {
      // Welcome email is best-effort; don't fail the signup
    }

    return Response.json(
      { message: "You're on the list!" },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
