import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getServicesByCategory } from "../data";

const DIFFICULTY_COLORS = {
  easy: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  hard: "bg-red-100 text-red-800",
};

const CATEGORY_LABELS: Record<string, string> = {
  streaming: "Streaming",
  music: "Music",
  fitness: "Fitness",
  software: "Software",
  gaming: "Gaming",
  news: "News",
  food: "Food & Delivery",
  cloud: "Cloud Storage",
  productivity: "Productivity",
  other: "Other",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Guide Not Found | CancelBefore" };
  }

  const title = `How to Cancel ${service.name} -- Step by Step Guide | CancelBefore`;
  const description = `Cancel your ${service.name} subscription in ${service.steps.length} easy steps. ${service.monthlyPrice}/month. Difficulty: ${service.difficulty}. Complete guide with tips.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "CancelBefore",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CancelGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  // JSON-LD HowTo structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Cancel ${service.name}`,
    description: `Step-by-step guide to cancel your ${service.name} subscription (${service.monthlyPrice}/month).`,
    totalTime: "PT5M",
    step: service.steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-slate-500">
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/cancel"
              className="hover:text-indigo-600 transition-colors"
            >
              Cancel Guides
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{service.name}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700">
                {CATEGORY_LABELS[service.category] ?? service.category}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${DIFFICULTY_COLORS[service.difficulty]}`}
              >
                {service.difficulty === "easy"
                  ? "Easy to cancel"
                  : service.difficulty === "medium"
                    ? "Medium difficulty"
                    : "Hard to cancel"}
              </span>
              <span className="text-sm text-slate-500">
                {service.monthlyPrice}/mo
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How to Cancel {service.name}
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              Follow these {service.steps.length} steps to cancel your{" "}
              {service.name} subscription.
            </p>
          </header>

          {/* Steps */}
          <section className="mb-12">
            <ol className="space-y-4">
              {service.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-base text-slate-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Tip */}
          <section className="mb-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex gap-3">
              <svg
                className="h-6 w-6 shrink-0 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <div>
                <h2 className="text-sm font-bold text-amber-900">
                  Helpful Tip
                </h2>
                <p className="mt-1 text-sm text-amber-800 leading-relaxed">
                  {service.tip}
                </p>
              </div>
            </div>
          </section>

          {/* Service link */}
          <section className="mb-12">
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Visit {service.name}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </section>

          {/* CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 text-center text-white shadow-lg shadow-indigo-600/25">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Track Your {service.name} Subscription
            </h2>
            <p className="mt-2 text-indigo-100 max-w-md mx-auto">
              Get reminded before your next renewal. Never get surprised by a
              charge again.
            </p>
            <a
              href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 transition-colors"
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
          </section>

          {/* Related Guides */}
          {relatedServices.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Related Cancel Guides
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/cancel/${related.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          Cancel {related.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {related.monthlyPrice}/mo
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${DIFFICULTY_COLORS[related.difficulty]}`}
                      >
                        {related.difficulty}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-indigo-600 group-hover:underline">
                      View guide →
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/cancel"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  ← Browse all cancel guides
                </Link>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
