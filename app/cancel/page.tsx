import type { Metadata } from "next";
import Link from "next/link";
import { services, categories } from "./data";
import CancelGuidesFilter from "./filter";

export const metadata: Metadata = {
  title: "How to Cancel Any Subscription | CancelBefore",
  description:
    "Step-by-step cancellation guides for 50+ popular subscription services. Find out exactly how to cancel Netflix, Spotify, Amazon Prime, and more.",
  openGraph: {
    title: "How to Cancel Any Subscription | CancelBefore",
    description:
      "Step-by-step cancellation guides for 50+ popular subscription services. Find out exactly how to cancel Netflix, Spotify, Amazon Prime, and more.",
    type: "website",
    siteName: "CancelBefore",
  },
};

export default function CancelGuidesPage() {
  return (
    <div className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Cancel Guides</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Cancel Any Subscription
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Step-by-step guides to cancel 50+ popular services. No more
            hunting through settings menus or waiting on hold.
          </p>
        </div>

        {/* Filter (client component) */}
        <CancelGuidesFilter services={services} categories={categories} />

        {/* CTA Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-10 text-center text-white shadow-lg shadow-indigo-600/25 sm:px-12">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Track All Your Subscriptions in One Place
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Stop forgetting about renewals. CancelBefore reminds you before
            charges hit -- no bank linking, 100% private.
          </p>
          <a
            href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 transition-colors"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download CancelBefore Free
          </a>
        </div>
      </div>
    </div>
  );
}
