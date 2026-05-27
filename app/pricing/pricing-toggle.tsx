"use client";

import { useState } from "react";

const FREE_FEATURES = [
  { name: "Track up to 5 subscriptions", included: true },
  { name: "Renewal reminders", included: true },
  { name: "Local notifications", included: true },
  { name: "On-device storage (private)", included: true },
  { name: "Unlimited subscriptions", included: false },
  { name: "Price increase alerts", included: false },
  { name: "Annual spending reports", included: false },
  { name: "Export data (CSV)", included: false },
  { name: "Priority cancel guides", included: false },
  { name: "Calendar integration", included: false },
  { name: "Family sharing support", included: false },
];

const PRO_FEATURES = [
  { name: "Track up to 5 subscriptions", included: true },
  { name: "Renewal reminders", included: true },
  { name: "Local notifications", included: true },
  { name: "On-device storage (private)", included: true },
  { name: "Unlimited subscriptions", included: true },
  { name: "Price increase alerts", included: true },
  { name: "Annual spending reports", included: true },
  { name: "Export data (CSV)", included: true },
  { name: "Priority cancel guides", included: true },
  { name: "Calendar integration", included: true },
  { name: "Family sharing support", included: true },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-slate-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
    </svg>
  );
}

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className={`text-sm font-medium ${!annual ? "text-slate-900" : "text-slate-500"}`}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual(!annual)}
          className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
            annual ? "bg-indigo-600" : "bg-slate-200"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
              annual ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${annual ? "text-slate-900" : "text-slate-500"}`}>
          Annual
        </span>
        {annual && (
          <span className="ml-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
            Save 33%
          </span>
        )}
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
        {/* Free tier */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Free</h3>
          <p className="mt-1 text-sm text-slate-500">Get started tracking your subscriptions</p>

          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold tracking-tight text-slate-900">$0</span>
            <span className="text-sm text-slate-500">/forever</span>
          </div>

          <a
            href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
            className="mt-8 block w-full rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Download Free
          </a>

          <ul className="mt-8 space-y-3">
            {FREE_FEATURES.map((feature) => (
              <li key={feature.name} className="flex items-start gap-3">
                {feature.included ? <CheckIcon /> : <DashIcon />}
                <span className={`text-sm ${feature.included ? "text-slate-700" : "text-slate-400"}`}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro tier */}
        <div className="relative rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-md">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white uppercase tracking-wide">
              Recommended
            </span>
          </div>

          <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
          <p className="mt-1 text-sm text-slate-500">Everything you need to stay on top of subscriptions</p>

          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold tracking-tight text-slate-900">
              {annual ? "$39.99" : "$4.99"}
            </span>
            <span className="text-sm text-slate-500">/{annual ? "year" : "month"}</span>
          </div>
          {annual && (
            <p className="mt-1 text-sm text-indigo-600 font-medium">
              $3.33/mo — save 33% vs monthly
            </p>
          )}

          <a
            href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
            className="mt-8 block w-full rounded-xl bg-indigo-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Start Free Trial
          </a>

          <ul className="mt-8 space-y-3">
            {PRO_FEATURES.map((feature) => (
              <li key={feature.name} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm text-slate-700">{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
