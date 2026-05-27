import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CancelBefore handles the data you enter, notifications, purchases, and your privacy.",
  openGraph: {
    title: "Privacy Policy — CancelBefore",
    description:
      "How CancelBefore handles the data you enter, notifications, purchases, and your privacy.",
    url: "https://cancelbefore.app/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — CancelBefore",
    description:
      "How CancelBefore handles the data you enter, notifications, purchases, and your privacy.",
  },
  alternates: {
    canonical: "https://cancelbefore.app/privacy",
  },
};

const LAST_UPDATED = "May 27, 2026";

export default function PrivacyPage() {
  return (
    <div className="px-6 py-12 sm:py-16">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          ← Back to CancelBefore
        </Link>

        <header className="mt-6 mb-10 border-b border-slate-200 pb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            CancelBefore Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <Section title="Overview">
            <p>
              CancelBefore is a personal subscription-tracking app. It is
              designed to be quiet, useful, and private. We do not run user
              accounts and we do not sell any data. The information you enter
              about your subscriptions stays on your device.
            </p>
          </Section>

          <Section title="The iOS App">
            <p>
              The CancelBefore iOS app does not collect analytics, does not
              use third-party tracking SDKs, and does not transmit your
              subscription data to any server. All data stays on your device.
            </p>
          </Section>

          <Section title="The Website (cancelbefore.app)">
            <p>
              Our website uses PostHog, a privacy-focused analytics tool, to
              understand how visitors use the site (pages visited, general
              traffic patterns). PostHog does not track you across other
              websites, and we do not collect personal information through
              it. We respect your browser&apos;s Do Not Track setting — if
              enabled, PostHog will not load. No data from the website is
              connected to the iOS app.
            </p>
            <p>
              If you subscribe to our newsletter via the website, your email
              address is stored with Resend, our email service provider, for
              the sole purpose of sending you subscription-saving tips. You
              can unsubscribe at any time.
            </p>
          </Section>

          <Section title="Information the App Collects">
            <p>
              CancelBefore stores the subscription and trial information you
              enter — service name, price, renewal date, billing frequency,
              optional cancellation link, optional notes, and your reminder
              preferences — locally on your device using on-device storage.
              This data does not leave your device. We do not have a server
              that receives or stores it. We do not have access to it.
            </p>
            <p>
              We do not collect your name, location, contacts,
              advertising identifier, or any device identifier.
            </p>
          </Section>

          <Section title="How We Use Information">
            <p>
              The subscription data you enter is used only to display your
              renewals inside the app and to schedule local reminders. It is
              not transmitted anywhere by CancelBefore.
            </p>
          </Section>

          <Section title="Notifications">
            <p>
              CancelBefore uses your device&apos;s local notification system
              to remind you before a subscription renews. Notifications are
              scheduled on your device by the operating system and are not
              sent through any external server. You can grant or revoke
              notification permission at any time in your device settings,
              and the app will continue to function without notifications if
              you choose not to allow them.
            </p>
          </Section>

          <Section title="Purchases">
            <p>
              In-app purchases (such as the optional Pro unlock) are processed
              by Apple and managed on our behalf by RevenueCat, a purchase
              infrastructure provider. When you make a purchase or restore a
              previous purchase, Apple and RevenueCat may receive purchase
              transaction information necessary to validate that purchase and
              keep your access in sync across your devices. CancelBefore does
              not see or store your payment details.
            </p>
            <p>
              Apple&apos;s and RevenueCat&apos;s handling of your purchase
              information is governed by their respective privacy policies.
            </p>
          </Section>

          <Section title="No Banking Access">
            <p>
              CancelBefore does not connect to your bank, your credit card,
              Plaid, your email inbox, or any financial institution. We never
              ask for and never receive your banking credentials, card
              numbers, or transaction history. The only information about a
              subscription is what you choose to type in.
            </p>
          </Section>

          <Section title="Data Sharing">
            <p>
              We do not sell, rent, or share your personal information with
              third parties for advertising or marketing. We do not have
              advertising partners. The only third parties involved in the
              app are Apple and RevenueCat, and only for processing in-app
              purchases as described above.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              Your subscription data stays on your device until you delete it
              from inside the app, or until you delete the app itself. The
              app includes a &ldquo;Delete All Data&rdquo; option in Settings
              that clears all subscriptions and cancels any scheduled
              reminders. Uninstalling the app will also remove all locally
              stored data.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              CancelBefore is not directed to children under 13, and we do
              not knowingly collect any personal information from children.
              The app does not require an account and does not collect
              personal data from any user.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about this policy or about how
              CancelBefore handles your information, please email{" "}
              <a
                href="mailto:support@cancelbefore.app"
                className="font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
              >
                support@cancelbefore.app
              </a>
              .
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3 text-base">{children}</div>
    </section>
  );
}
