import type { Metadata } from "next";
import PricingToggle from "./pricing-toggle";

export const metadata: Metadata = {
  title: "Pricing — CancelBefore",
  description:
    "Choose the plan that fits your needs. Track subscriptions for free or unlock Pro for unlimited tracking, spending reports, and more.",
};

const FAQ_ITEMS = [
  {
    question: "Can I try Pro for free?",
    answer:
      "Yes! Pro comes with a 7-day free trial. You get full access to every Pro feature during the trial with no commitment.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "If you decide not to subscribe, you keep all Free tier features. Your existing subscriptions stay on your device — Pro-only features like spending reports and CSV export simply lock until you subscribe.",
  },
  {
    question: "Can I cancel my Pro subscription?",
    answer:
      "Absolutely. You can cancel anytime through the App Store. There are no cancellation fees, and you keep Pro access until the end of your current billing period.",
  },
  {
    question: "Is my data really private?",
    answer:
      "Yes. Everything you enter stays on your device. CancelBefore does not have user accounts, does not collect analytics, and does not send your subscription data to any server. Your information never leaves your phone.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refunds are handled by Apple through the App Store. You can request a refund from Apple within their refund policy window by visiting reportaproblem.apple.com.",
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
          {["No credit card required for free tier", "Cancel anytime", "7-day free trial for Pro"].map((text) => (
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
