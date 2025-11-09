import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Rocket } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-slate-800/60 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (does not block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-2 mb-3 text-sky-300/90">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-sm tracking-wide uppercase">PolicyPilot • Compliance, Simplified</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight max-w-4xl">
          Streamline policy creation, editing, and export across your organization
        </h1>
        <p className="mt-3 md:mt-4 text-slate-300 max-w-2xl">
          A modern, B2B-focused workspace that turns compliance into clear, actionable steps with live feedback and versioning.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-500 transition">
            <Rocket className="h-4 w-4" />
            Preview Flow
          </button>
          <span className="text-slate-400 text-sm">User Journey: Sign Up → Onboarding → Dashboard → Wizard → Editor → PDF → Settings</span>
        </div>
      </div>
    </section>
  );
}
