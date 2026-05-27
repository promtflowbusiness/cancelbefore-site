import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CancelBefore",
    short_name: "CancelBefore",
    description:
      "Track subscriptions, get reminded before charges hit, and cancel with step-by-step guides. Privacy-first — no bank linking, no data collection. Free to start.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
  };
}
