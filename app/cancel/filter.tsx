"use client";

import Link from "next/link";
import { useState } from "react";
import type { Category, Difficulty } from "./data";

type FilterService = {
  slug: string;
  name: string;
  category: Category;
  monthlyPrice: string;
  difficulty: Difficulty;
};

import { DIFFICULTY_COLORS, CATEGORY_LABELS } from "./constants";

export default function CancelGuidesFilter({
  services,
  categories,
}: {
  services: FilterService[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered = services.filter((s) => {
    const matchesQuery =
      query === "" ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || s.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      {/* Search & Category Filter */}
      <div className="mb-10 space-y-4">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for a service (e.g., Netflix, Spotify)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search cancel guides"
            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-slate-500">
        {filtered.length === 0
          ? "No guides found. Try a different search."
          : `Showing ${filtered.length} guide${filtered.length !== 1 ? "s" : ""}`}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <Link
            key={service.slug}
            href={`/cancel/${service.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {CATEGORY_LABELS[service.category]}
                </p>
              </div>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${DIFFICULTY_COLORS[service.difficulty]}`}
              >
                {service.difficulty}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-slate-900">
                {service.monthlyPrice}
                <span className="text-sm font-normal text-slate-400">
                  /mo
                </span>
              </span>
              <span className="text-sm font-medium text-indigo-600 group-hover:underline">
                View guide →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
