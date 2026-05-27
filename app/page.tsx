import Link from "next/link";
import EmailCapture from "./components/email-capture";
import PhoneMockup from "./components/phone-mockup";

const STATS = [
  { value: "$219", label: "Average monthly subscription spend" },
  { value: "74%", label: "Of people forget about recurring charges" },
  { value: "$127", label: "Wasted yearly on forgotten subscriptions" },
];

const FEATURES = [
  {
    title: "Track Everything",
    description: "Add all your subscriptions and trials in seconds. See exactly what you're paying and when.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: "Get Reminded",
    description: "Receive alerts before free trials end and subscriptions renew. Never get surprised by a charge again.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Cancel with Confidence",
    description: "Step-by-step cancellation guides for 50+ popular services. Know exactly what to click.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100% Private",
    description: "No bank linking. No data collection. Everything stays on your device. We can't see your data even if we wanted to.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "History Tracking",
    description: "See what you've canceled and how much you've saved over time. Your complete subscription history, always available.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quick Add",
    description: "Add popular services instantly with preset chips. Netflix, Spotify, and dozens more — one tap to start tracking.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Add Your Subscriptions", description: "Manually add your trials and subscriptions — name, price, renewal date. Takes 30 seconds each." },
  { step: "2", title: "Set Your Reminders", description: "Choose when to be reminded — 7, 3, 1, or 0 days before each renewal at 9:00 AM local time." },
  { step: "3", title: "Cancel or Keep", description: "When a reminder fires, decide: cancel using our step-by-step guide, or keep and track the next renewal." },
];

const COMPARISONS = [
  { feature: "Bank account required", them: "Yes", us: "Never" },
  { feature: "Data stored on servers", them: "Yes", us: "No — device only" },
  { feature: "Sells your data", them: "Often", us: "Never" },
  { feature: "Cancellation links included", them: "Sometimes", us: "Yes + 50 web guides" },
  { feature: "Hidden fees", them: "35-60% of savings", us: "$0 hidden fees" },
  { feature: "Works without internet", them: "No", us: "Yes" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-violet-100/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-4 py-1.5 text-sm font-semibold text-indigo-700">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            Privacy-first subscription tracking
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-[1.1]">
            Stop paying for <br className="hidden sm:block" />
            <span className="text-indigo-600">subscriptions you forgot about.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed sm:text-xl">
            The average person wastes $127/year on forgotten subscriptions.
            CancelBefore tracks your trials and renewals, reminds you before charges hit,
            and shows you exactly how to cancel — without ever touching your bank account.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 hover:shadow-indigo-600/30 transition-all"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
            <Link
              href="/cancel"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            >
              Browse Cancel Guides
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Free to start
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              No bank access needed
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              100% private
            </span>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <PhoneMockup />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">{stat.value}</div>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How CancelBefore Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">Three steps. Under a minute. Total control.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-600/25">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Take Control
            </h2>
            <p className="mt-4 text-lg text-slate-600">Simple tools that save you real money.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Why CancelBefore?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Other apps require your bank login and take a cut of your savings. We don&apos;t.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 font-semibold text-slate-400">Bank-linked apps</th>
                  <th className="px-6 py-4 font-semibold text-indigo-600">CancelBefore</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row, i) => (
                  <tr key={row.feature} className={i < COMPARISONS.length - 1 ? "border-b border-slate-100" : ""}>
                    <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="px-6 py-4 text-slate-400">{row.them}</td>
                    <td className="px-6 py-4 font-semibold text-indigo-600">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-indigo-600 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Your Subscriptions, Your Device, Your Control
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            No bank linking, no accounts, no data collection.
            CancelBefore exists because subscription tracking shouldn&apos;t require giving up your privacy.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "100% On-Device",
                description: "Your subscription data never leaves your phone. No servers, no sync, no cloud.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
              },
              {
                title: "No Accounts Required",
                description: "Open the app and start tracking. No sign-up, no email, no passwords.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                ),
              },
              {
                title: "One-Time Purchase",
                description: "Pro is $4.99 once. No recurring fees, no subscription to forget about.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl bg-white/10 p-6 text-left backdrop-blur-sm">
                <div className="text-indigo-200">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-indigo-100 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancel Guides CTA */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Need to Cancel Something Right Now?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Browse our step-by-step cancellation guides for 50+ popular services.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "Netflix", slug: "netflix" },
              { name: "Spotify", slug: "spotify" },
              { name: "Amazon Prime", slug: "amazon-prime" },
              { name: "Disney+", slug: "disney-plus" },
              { name: "Adobe CC", slug: "adobe-creative-cloud" },
              { name: "Hulu", slug: "hulu" },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/cancel/${service.slug}`}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-indigo-200 hover:text-indigo-600 transition-colors"
              >
                {service.name}
              </Link>
            ))}
            <Link
              href="/cancel"
              className="inline-flex items-center rounded-full bg-indigo-600/10 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-600/20 transition-colors"
            >
              +44 more →
            </Link>
          </div>

          <Link
            href="/cancel"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 transition-all"
          >
            Browse All Cancel Guides
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24" id="download">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ready to Stop Wasting Money?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Download CancelBefore free and start tracking your subscriptions today.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
              className="inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-white shadow-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-semibold leading-tight">App Store</div>
              </div>
            </a>

            <p className="text-sm text-slate-500">Free to download. No account required.</p>
          </div>

          <EmailCapture />
        </div>
      </section>
    </>
  );
}
