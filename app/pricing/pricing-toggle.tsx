const FREE_FEATURES = [
  { name: "Track up to 5 subscriptions", included: true },
  { name: "Spending donut chart", included: true },
  { name: "Calendar view", included: true },
  { name: "Renewal reminders", included: true },
  { name: "Cancel guides (50+)", included: true },
  { name: "On-device storage (private)", included: true },
  { name: "Unlimited subscriptions", included: false },
  { name: "Spending analytics & trends", included: false },
  { name: "iCloud sync", included: false },
  { name: "Home screen widgets", included: false },
  { name: "AI screenshot import", included: false },
  { name: "Dark mode", included: false },
  { name: "Custom service colors", included: false },
];

const PRO_FEATURES = [
  { name: "Unlimited subscriptions", included: true },
  { name: "Spending donut chart", included: true },
  { name: "Calendar view", included: true },
  { name: "Renewal reminders", included: true },
  { name: "Cancel guides (50+)", included: true },
  { name: "On-device storage (private)", included: true },
  { name: "Spending analytics & trends", included: true },
  { name: "iCloud sync across devices", included: true },
  { name: "Home screen widgets", included: true },
  { name: "AI screenshot import", included: true },
  { name: "Dark mode", included: true },
  { name: "Custom service colors", included: true },
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
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-2">
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
          <p className="mt-1 text-sm text-slate-500">The complete subscription tracker</p>

          <div className="mt-6">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">$2.99</span>
                <span className="text-sm text-slate-500">/month</span>
              </div>
              <span className="text-sm text-slate-400">or</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900">$19.99</span>
                <span className="text-sm text-slate-500">/year</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                Save 44%
              </span>
              <span className="text-sm text-slate-500">with annual plan</span>
            </div>
          </div>

          <a
            href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
            className="mt-8 block w-full rounded-xl bg-indigo-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Start Free Trial
          </a>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-center">
            <span className="text-sm text-slate-600">
              Or unlock forever for{" "}
              <span className="font-bold text-slate-900">$29.99</span>
              {" "}one-time
            </span>
          </div>

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
    </div>
  );
}
