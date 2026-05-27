"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            CB
          </span>
          CancelBefore
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <Link href="/cancel" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Cancel Guides
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Pricing
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Privacy
          </Link>
          <a
            href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Download Free
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => { if (e.key === "Escape" && open) setOpen(false); }}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 pb-4 sm:hidden">
          <div className="flex flex-col gap-3 pt-3">
            <Link href="/cancel" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Cancel Guides
            </Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Pricing
            </Link>
            <Link href="/privacy" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Privacy
            </Link>
            <a
              href="https://apps.apple.com/us/app/cancelbefore/id6767471882"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Download Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
