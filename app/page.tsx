import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto mb-8 inline-flex items-center justify-center rounded-2xl bg-indigo-600/10 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 uppercase">
          CancelBefore
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Never forget to cancel a free trial again.
        </h1>

        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          Track subscriptions and get reminded before surprise charges.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Privacy Policy
          </Link>
          <a
            href="mailto:support@cancelbefore.app"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Contact Support
          </a>
        </div>

        <p className="mt-16 text-sm text-slate-500">
          Questions? Email{" "}
          <a
            href="mailto:support@cancelbefore.app"
            className="font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
          >
            support@cancelbefore.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}
