import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title") || "CancelBefore";
  const subtitle =
    request.nextUrl.searchParams.get("subtitle") ||
    "Stop paying for subscriptions you forgot about.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 800,
              color: "#4f46e5",
            }}
          >
            CB
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
            }}
          >
            CancelBefore
          </span>
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.2,
            padding: "0 40px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: "700px",
            marginTop: "16px",
            lineHeight: 1.5,
            padding: "0 40px",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
