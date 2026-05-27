import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import PostHogProvider from "./components/posthog-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cancelbefore.app"),
  title: {
    default: "CancelBefore — Never forget to cancel a free trial again",
    template: "%s | CancelBefore",
  },
  description:
    "Track subscriptions, get reminded before charges hit, and cancel with step-by-step guides. Privacy-first — no bank linking, no data collection. Free to start.",
  keywords: [
    "cancel subscription",
    "free trial tracker",
    "subscription manager",
    "subscription tracker",
    "cancel free trial",
    "recurring charges",
    "privacy",
    "iOS app",
    "renewal reminder",
  ],
  authors: [{ name: "CancelBefore" }],
  creator: "CancelBefore",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CancelBefore",
    title: "CancelBefore — Never forget to cancel a free trial again",
    description:
      "Track subscriptions, get reminded before charges hit, and cancel with step-by-step guides. Privacy-first — no bank linking, no data collection.",
    url: "https://cancelbefore.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "CancelBefore — Never forget to cancel a free trial again",
    description:
      "Track subscriptions, get reminded before charges hit, and cancel with step-by-step guides. Privacy-first.",
    creator: "@cancelbefore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cancelbefore.app",
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/us/app/cancelbefore/id6767471882",
      app_store_id: "id6767471882",
      app_name: "CancelBefore",
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <PostHogProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
