import Link from "next/link";
import EmailCapture from "./email-capture";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                CB
              </span>
              CancelBefore
            </Link>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              The privacy-first subscription tracker. No bank linking. No data leaves your device.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Product</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/pricing" className="text-sm text-slate-500 hover:text-slate-700">Pricing</Link></li>
              <li><Link href="/cancel" className="text-sm text-slate-500 hover:text-slate-700">Cancel Guides</Link></li>
              <li><a href="https://apps.apple.com/us/app/cancelbefore/id6767471882" className="text-sm text-slate-500 hover:text-slate-700">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-700">Privacy Policy</Link></li>
              <li><a href="mailto:support@cancelbefore.app" className="text-sm text-slate-500 hover:text-slate-700">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Popular Guides</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/cancel/netflix" className="text-sm text-slate-500 hover:text-slate-700">Cancel Netflix</Link></li>
              <li><Link href="/cancel/amazon-prime" className="text-sm text-slate-500 hover:text-slate-700">Cancel Amazon Prime</Link></li>
              <li><Link href="/cancel/spotify" className="text-sm text-slate-500 hover:text-slate-700">Cancel Spotify</Link></li>
              <li><Link href="/cancel/adobe-creative-cloud" className="text-sm text-slate-500 hover:text-slate-700">Cancel Adobe CC</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <EmailCapture
            heading="Stay in the loop"
            subheading="Get tips on saving money and updates on new features."
          />
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} CancelBefore. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Made with care for your privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
