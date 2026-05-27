import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email")?.trim().toLowerCase();

  if (!email) {
    return new Response(unsubPage("Invalid unsubscribe link."), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (apiKey && audienceId) {
    try {
      const listRes = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts?email=${encodeURIComponent(email)}`,
        { headers: { Authorization: `Bearer ${apiKey}` } },
      );

      if (listRes.ok) {
        const listData = await listRes.json();
        const contact = listData?.data?.[0];

        if (contact?.id) {
          await fetch(
            `https://api.resend.com/audiences/${audienceId}/contacts/${contact.id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ unsubscribed: true }),
            },
          );
        }
      }
    } catch {
      // Best-effort unsubscribe
    }
  }

  return new Response(unsubPage("You've been unsubscribed. You won't receive any more emails from CancelBefore."), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

function unsubPage(message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Unsubscribe — CancelBefore</title>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; color: #1e293b; }
    .card { text-align: center; max-width: 400px; padding: 48px 24px; }
    h1 { font-size: 24px; font-weight: 800; margin: 0 0 12px; }
    p { font-size: 16px; color: #475569; line-height: 1.6; }
    a { color: #4f46e5; text-decoration: none; font-weight: 600; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <h1>CancelBefore</h1>
    <p>${message}</p>
    <p style="margin-top: 24px;"><a href="https://cancelbefore.app">Back to CancelBefore</a></p>
  </div>
</body>
</html>`;
}
