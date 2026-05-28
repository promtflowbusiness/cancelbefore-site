import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press & Media Kit",
  description:
    "CancelBefore press kit: logos, screenshots, founder bio, fact sheet, and contact for journalists, reviewers, and creators covering the privacy-first subscription tracker.",
  openGraph: {
    title: "Press & Media Kit — CancelBefore",
    description:
      "Logos, screenshots, fact sheet, and press contact for CancelBefore — the privacy-first iOS subscription tracker.",
    url: "https://cancelbefore.app/press",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media Kit — CancelBefore",
    description:
      "Logos, screenshots, fact sheet, and press contact for CancelBefore.",
  },
  alternates: {
    canonical: "https://cancelbefore.app/press",
  },
};

const SHOTS = [
  { file: "01-home.png", title: "Home — donut chart", caption: "Spending donut + brand-color cards with countdown badges" },
  { file: "02-calendar.png", title: "Calendar view", caption: "Monthly grid with color-coded renewal dots" },
  { file: "03-paywall.png", title: "Pro paywall", caption: "Loss-aversion hero with 3-tier pricing and free trial" },
  { file: "04-scan.png", title: "AI receipt scan", caption: "On-device ML Kit OCR — photos never leave the phone" },
  { file: "05-analytics-dark.png", title: "Analytics + dark mode", caption: "6-month trend bars and category breakdown" },
];

const BLURBS = [
  {
    length: "10 words",
    text: "Privacy-first iOS subscription tracker — no bank linking, ever.",
  },
  {
    length: "25 words",
    text:
      "CancelBefore tracks your subscriptions and reminds you before every renewal. No bank linking. All data stays on your device. $29.99 lifetime option.",
  },
  {
    length: "55 words",
    text:
      "CancelBefore is the privacy-first iOS subscription tracker. Unlike Rocket Money or Trim, CancelBefore never connects to your bank account — everything stays on your device, with optional end-to-end encrypted iCloud sync. Free tier tracks 5 subscriptions. Pro adds unlimited tracking, AI receipt scanning, home widgets, spending analytics, and dark mode for $2.99/mo, $19.99/yr (with 7-day free trial), or $29.99 lifetime.",
  },
];

export default function PressPage() {
  return (
    <div className="px-6 py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          ← Back to CancelBefore
        </Link>

        <header className="mt-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Press &amp; Media Kit
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
            Everything journalists, reviewers, and creators need to cover CancelBefore — the privacy-first iOS subscription tracker. Email
            {" "}
            <a
              href="mailto:press@cancelbefore.app"
              className="font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
            >
              press@cancelbefore.app
            </a>
            {" "}
            for interviews, exclusive embargo'd news, or Pro promo codes for review.
          </p>
        </header>

        {/* Fact sheet */}
        <Section title="Fact Sheet">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-base">
            <Fact label="Product" value="CancelBefore" />
            <Fact label="Category" value="Personal Finance · Productivity" />
            <Fact label="Platform" value="iOS 15.1+ (iPhone, iPad)" />
            <Fact label="Launched" value="Spring 2026" />
            <Fact label="Latest version" value="2.0.0 (May 2026)" />
            <Fact label="Founder" value="Chad Vasquez" />
            <Fact label="Headquarters" value="United States" />
            <Fact label="App Store ID" value="6767471882" />
            <Fact label="Free tier" value="5 active subscriptions + donut chart + calendar + alerts" />
            <Fact label="Pro pricing" value="$2.99/mo · $19.99/yr (7-day trial) · $29.99 lifetime" />
            <Fact label="Privacy label" value="Data Not Linked to You" />
            <Fact label="Press contact" value="press@cancelbefore.app" />
          </dl>
        </Section>

        {/* One-line blurbs */}
        <Section title="Ready-to-Quote Blurbs">
          <p className="text-slate-600 text-sm mb-6">Copy any of these into your article. No attribution needed.</p>
          <div className="space-y-5">
            {BLURBS.map((b) => (
              <div key={b.length} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
                  {b.length}
                </div>
                <p className="text-slate-800 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* What makes it different */}
        <Section title="What Makes CancelBefore Different">
          <ul className="space-y-3 text-slate-700 leading-relaxed">
            <li><strong>No bank linking, ever.</strong> Unlike Rocket Money, Trim, or Truebill — no Plaid, no credentials, no bank account connection. Manual entry, with an optional AI receipt scanner (Google ML Kit running entirely on-device) for the Pro tier.</li>
            <li><strong>True local-first.</strong> All subscription data lives on the user&apos;s device. Optional iCloud sync uses Apple&apos;s Key-Value Storage, which is end-to-end encrypted by Apple — never touches our servers.</li>
            <li><strong>Pay-once option.</strong> $29.99 lifetime alongside the monthly and annual plans. Charging a recurring fee to manage recurring fees felt off-brand.</li>
            <li><strong>Real free tier.</strong> 5 subscriptions, the full spending donut chart, calendar view, and renewal reminders — not a 3-day trial.</li>
            <li><strong>Designed for 2026.</strong> Donut chart, monthly calendar grid, brand-colored cards for 60+ services, countdown badges, actionable rich notifications, home widgets, system-aware dark mode.</li>
          </ul>
        </Section>

        {/* Logos */}
        <Section title="Logos">
          <p className="text-slate-600 text-sm mb-6">Click to download. SVG preferred — scales infinitely. PNG available on request.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="/press/logo-icon.svg"
              download="cancelbefore-icon.svg"
              className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col items-center justify-center gap-4 hover:border-indigo-300 transition-colors"
            >
              <Image src="/press/logo-icon.svg" alt="CancelBefore app icon" width={160} height={160} />
              <div className="text-center">
                <div className="font-semibold text-slate-900">App Icon</div>
                <div className="text-xs text-slate-500 mt-1">SVG · 1024×1024 source</div>
              </div>
            </a>
            <a
              href="/press/logo-wordmark.svg"
              download="cancelbefore-wordmark.svg"
              className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col items-center justify-center gap-4 hover:border-indigo-300 transition-colors"
            >
              <Image src="/press/logo-wordmark.svg" alt="CancelBefore wordmark" width={360} height={80} />
              <div className="text-center">
                <div className="font-semibold text-slate-900">Wordmark</div>
                <div className="text-xs text-slate-500 mt-1">SVG · for headers and bylines</div>
              </div>
            </a>
          </div>
        </Section>

        {/* Screenshots */}
        <Section title="Screenshots">
          <p className="text-slate-600 text-sm mb-6">
            Marketing screenshots at 1290×2796 (Apple&apos;s 6.7&quot; iPhone size). Click any image to download.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SHOTS.map((s) => (
              <a
                key={s.file}
                href={`/press/screenshots/${s.file}`}
                download
                className="block group"
              >
                <div className="relative aspect-[1290/2796] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/press/screenshots/${s.file}`}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                  />
                </div>
                <div className="mt-3">
                  <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.caption}</div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Founder bio */}
        <Section title="Founder Bio">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="font-semibold text-slate-900 text-lg">Chad Vasquez</div>
            <div className="text-sm text-slate-500 mt-1 mb-4">Founder, CancelBefore</div>
            <p className="text-slate-700 leading-relaxed">
              Chad Vasquez is the founder of CancelBefore. He built the app after repeatedly getting charged for free trials he forgot to cancel — and discovering that every existing subscription tracker required handing over bank credentials. CancelBefore is the alternative he couldn&apos;t find: manual entry, local storage, smart reminders, and a pay-once option.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              Contact for interviews:{" "}
              <a
                href="mailto:chad@cancelbefore.app"
                className="font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
              >
                chad@cancelbefore.app
              </a>
            </p>
          </div>
        </Section>

        {/* Key stats */}
        <Section title="Key Stats (Context for Your Story)">
          <ul className="space-y-3 text-slate-700 leading-relaxed">
            <li><strong>$127/year</strong> — Average amount the typical American wastes on forgotten subscriptions (C+R Research, 2023).</li>
            <li><strong>74%</strong> of consumers cannot list all their recurring subscriptions when asked.</li>
            <li><strong>42%</strong> of people have at least one subscription they intended to cancel but didn&apos;t.</li>
            <li><strong>$10.34B</strong> — Estimated size of the subscription management software market.</li>
            <li><strong>60+</strong> services with brand-color cards built into CancelBefore (Netflix, Spotify, Disney+, Apple, Amazon, Notion, and more).</li>
          </ul>
        </Section>

        {/* Coverage */}
        <Section title="Recent Coverage">
          <p className="text-slate-600 italic">
            Featured coverage appears here as it&apos;s published. Reviewers, writers, and podcasters covering CancelBefore — email{" "}
            <a
              href="mailto:press@cancelbefore.app"
              className="font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
            >
              press@cancelbefore.app
            </a>
            {" "}
            to be added.
          </p>
        </Section>

        {/* Brand */}
        <Section title="Brand Guidelines">
          <ul className="space-y-3 text-slate-700">
            <li><strong>Name:</strong> Write as &ldquo;CancelBefore&rdquo; — one word, no space, capital C and B.</li>
            <li><strong>Primary color:</strong> <span className="inline-block w-4 h-4 rounded-sm align-middle ml-1" style={{ backgroundColor: "#4f7cf7" }} /> <code className="text-sm">#4f7cf7</code></li>
            <li><strong>Dark color:</strong> <span className="inline-block w-4 h-4 rounded-sm align-middle ml-1" style={{ backgroundColor: "#3157d8" }} /> <code className="text-sm">#3157d8</code></li>
            <li><strong>Don&apos;t:</strong> Don&apos;t alter the wordmark, add taglines next to the logo, or use the icon on a non-brand-color background without padding.</li>
          </ul>
        </Section>

        {/* Contact */}
        <Section title="Contact">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700">
            <div className="space-y-2">
              <div><strong>Press inquiries:</strong> <a href="mailto:press@cancelbefore.app" className="font-medium text-indigo-600 hover:text-indigo-700">press@cancelbefore.app</a></div>
              <div><strong>Founder:</strong> <a href="mailto:chad@cancelbefore.app" className="font-medium text-indigo-600 hover:text-indigo-700">chad@cancelbefore.app</a></div>
              <div><strong>App Store:</strong> <a href="https://apps.apple.com/us/app/cancelbefore/id6767471882" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-700">Download CancelBefore</a></div>
              <div><strong>Website:</strong> <a href="https://cancelbefore.app" className="font-medium text-indigo-600 hover:text-indigo-700">cancelbefore.app</a></div>
            </div>
          </div>
        </Section>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold text-slate-900 mb-5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="mt-1 text-slate-900 font-medium">{value}</dd>
    </div>
  );
}
