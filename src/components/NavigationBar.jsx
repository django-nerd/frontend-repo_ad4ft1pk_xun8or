import React from 'react';
import { ShieldCheck, User, Settings } from 'lucide-react';

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sky-300">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-900/50 border border-sky-800">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-semibold text-white tracking-tight">PolicyPilot</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white" href="#authentication">Authentication</a>
          <a className="hover:text-white" href="#onboarding">Onboarding</a>
          <a className="hover:text-white" href="#dashboard">Dashboard</a>
          <a className="hover:text-white" href="#editor">Editor</a>
          <a className="hover:text-white" href="#pdf">Export</a>
          <a className="hover:text-white" href="#settings">Settings</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm">
            <Settings className="h-4 w-4" />
            <span>Preferences</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-700 flex items-center justify-center">
            <User className="h-4 w-4 text-slate-200" />
          </div>
        </div>
      </div>
    </header>
  );
}
