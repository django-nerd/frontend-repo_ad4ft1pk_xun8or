import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-900/50 border border-sky-800">
            <ShieldCheck className="h-5 w-5 text-sky-300" />
          </div>
          <div>
            <p className="text-white font-semibold">PolicyPilot</p>
            <p className="text-slate-400 text-sm">Compliance that feels simple and trustworthy.</p>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-500 transition">
          Get Started
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
