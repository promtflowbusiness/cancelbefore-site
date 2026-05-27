import type { Metadata } from "next";
import type { ReactNode } from "react";
import PricingToggle from "./pricing-toggle";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the plan that fits your needs. Track subscriptions for free or upgrade to Pro starting at $2.99/month.",
};

const FAQ_ITEMS: { question: string; answer: ReactNode }[] = [
  {
    question: "What are the pricing options?",
    answer:
      "Pro is available as $2.99/month, $19.99/year (save 44%), or a one-time $29.99 lifetime unlock. Pick whatever works for you — no hidden fees.",
  },
  {
    question: "What do I get with the free version?",
    answer:
      "You can track up to 5 active subscriptions with renewal reminders, spending chart, calendar view, cancel guides, and complete privacy — all for free, forever.",
  },
  {
    question: "Is my data really private?",
    answer:
      "Yes. Everything you enter stays on your device. CancelBefore does not have user accounts, does not collect analytics, and does not send your subscription data to any server. Your information never leaves your phone.",
  },
  {
    question: "What if I want a refund?",
    answer: (
      <>
        You can cancel your subscription anytime from your iPhone&apos;s Settings.
        For a refund on a recent purchase, request one from Apple by visiting{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
        >
          reportaproblem.apple.com
        </a>
        .
      </>
    ),
  },
];

export default function PricingPage() {
  return (
    <div className="px-6 py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Start tracking subscriptions for free. Upgrade to Pro when you need more power.
          </p>
        </div>

        <div className="mt-12">
          <PricingToggle />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          {["No credit card required for free tier", "Cancel anytime", "Lifetime option available"].map((text) => (
            <span key={text} className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {text}
            </span>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 mx-auto max-w-2xl space-y-8">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                <dt className="text-base font-semibold text-slate-900">{item.question}</dt>
                <dd className="mt-2 text-base text-slate-600 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
