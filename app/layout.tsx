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
    images: [
      {
        url: "/og?title=Stop+paying+for+subscriptions+you+forgot+about&subtitle=Track+subscriptions,+get+reminded+before+charges+hit,+and+cancel+with+step-by-step+guides.",
        width: 1200,
        height: 630,
        alt: "CancelBefore — Privacy-first subscription tracking",
      },
    ],
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
  alternates: {},
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
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Nav />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
