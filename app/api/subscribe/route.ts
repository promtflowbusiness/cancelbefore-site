const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

async function addToResendAudience(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return;

  const res = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    },
  );

  if (!res.ok) {
    const data = await res.json();
    if (data?.message?.includes("already exists")) {
      throw new Error("duplicate");
    }
    throw new Error(data?.message || "Failed to add contact");
  }
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
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 12px; text-align: center;">
          Don't want these emails? <a href="https://cancelbefore.app/api/unsubscribe?email=${encodeURIComponent(email)}" style="color: #4f46e5;">Unsubscribe</a>
        </p>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const email = (body.email ?? "").trim().toLowerCase();

    if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    try {
      await addToResendAudience(email);
    } catch (e) {
      if (e instanceof Error && e.message === "duplicate") {
        return Response.json(
          { message: "You're already on the list!" },
          { status: 200 },
        );
      }
    }

    try {
      await sendWelcomeEmail(email);
    } catch {
      // Welcome email is best-effort
    }

    return Response.json(
      { message: "You're on the list!" },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
