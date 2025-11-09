import React from 'react';
import { ArrowRight, ClipboardList, FileText, LayoutDashboard, Loader2, Lock, Save, Settings, User, History, Download, ListChecks, BookOpen } from 'lucide-react';

const Section = ({ id, title, description, children }) => (
  <section id={id} className="scroll-mt-20">
    <div className="mt-12 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-slate-300 mb-6 max-w-3xl">{description}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {children}
      </div>
    </div>
  </section>
);

const Card = ({ title, subtitle, children, icon: Icon }) => (
  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 md:p-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {Icon && (
          <div className="h-8 w-8 rounded-md bg-slate-800/80 border border-slate-700 flex items-center justify-center">
            <Icon className="h-4 w-4 text-sky-300" />
          </div>
        )}
        <div>
          <h3 className="text-base font-medium text-white">{title}</h3>
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
      </div>
    </div>
    <div className="mt-4 text-slate-200 text-sm">
      {children}
    </div>
  </div>
);

export default function WireframeSections() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Authentication */}
      <Section
        id="authentication"
        title="Authentication"
        description="Minimal, focused forms with clear labels and actions for Sign-Up, Login, and Password Reset."
      >
        <Card title="Sign-Up" subtitle="Name, Email, Password + CTA" icon={User}>
          <div className="grid gap-3">
            <input className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Full name" />
            <input type="email" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Work email" />
            <input type="password" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Password" />
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-4 py-2">
              Create Account
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Card>
        <Card title="Login & Reset" subtitle="Email, Password + Forgot link" icon={Lock}>
          <div className="grid gap-3">
            <input type="email" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Work email" />
            <input type="password" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Password" />
            <div className="flex items-center justify-between">
              <button className="rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-4 py-2">Log in</button>
              <a className="text-sm text-sky-400 hover:text-sky-300" href="#">Forgot password?</a>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
              <p className="text-slate-300 text-sm">Password Reset</p>
              <div className="mt-2 flex gap-2">
                <input type="email" className="flex-1 rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Enter email to reset" />
                <button className="rounded-lg bg-slate-700 hover:bg-slate-600 text-white px-4">Send Link</button>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Onboarding */}
      <Section
        id="onboarding"
        title="Organization Onboarding"
        description="A concise wizard that collects company profile and compliance goals."
      >
        <Card title="Step 1: Company Profile" subtitle="Company Name, Industry, Size" icon={ClipboardList}>
          <div className="grid gap-3">
            <input className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Company name" />
            <div className="grid grid-cols-2 gap-3">
              <input className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Industry" />
              <select className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2">
                <option>Company size</option>
                <option>1-50</option>
                <option>51-200</option>
                <option>201-1000</option>
                <option>1000+</option>
              </select>
            </div>
          </div>
        </Card>
        <Card title="Step 2: Tech & Frameworks" subtitle="Tech stack and compliance goals" icon={ListChecks}>
          <div className="grid gap-3">
            <input className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Tech stack (e.g. AWS, GCP)" />
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-200">
              {['ISO 27001','SOC 2','GDPR','PCI-DSS'].map(fr => (
                <label key={fr} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-sky-500" />
                  {fr}
                </label>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 self-start rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-4 py-2">
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Card>
      </Section>

      {/* Dashboard */}
      <Section
        id="dashboard"
        title="Dashboard"
        description="An actionable overview: framework progress, recent activity, and a clear primary action."
      >
        <Card title="Framework Progress" subtitle="Completion by framework" icon={LayoutDashboard}>
          <div className="space-y-3">
            {[['ISO 27001',68],['SOC 2',42],['GDPR',30]].map(([name, pct]) => (
              <div key={name}>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{name}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded">
                  <div className="h-2 bg-sky-500 rounded" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
            <button className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-3 py-2 text-sm">New Policy</button>
          </div>
        </Card>
        <Card title="Recent Activity" subtitle="Policy events and changes" icon={Loader2}>
          <ul className="text-sm space-y-2 text-slate-300">
            <li>• Incident Response policy updated by A. Patel</li>
            <li>• Access Control policy approved by C. Nguyen</li>
            <li>• New Data Privacy draft generated</li>
          </ul>
        </Card>
      </Section>

      {/* Generator Wizard */}
      <Section
        id="wizard"
        title="Policy Generator Wizard"
        description="Two quick steps to generate a draft policy with clear progress cues."
      >
        <Card title="Step 1: Framework" subtitle="Choose one" icon={BookOpen}>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-200">
            {['ISO 27001','SOC 2','GDPR','PCI-DSS'].map(fr => (
              <label key={fr} className="flex items-center gap-2 p-2 rounded-lg border border-slate-800 bg-slate-900/50">
                <input name="framework" type="radio" className="accent-sky-500" />
                {fr}
              </label>
            ))}
            <div className="col-span-2 text-xs text-slate-400">Step 1 of 2</div>
          </div>
        </Card>
        <Card title="Step 2: Policy Type" subtitle="Pick a category" icon={FileText}>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-200">
            {['Data Privacy','Access Control','Incident Response','Vendor Risk'].map(t => (
              <label key={t} className="flex items-center gap-2 p-2 rounded-lg border border-slate-800 bg-slate-900/50">
                <input name="ptype" type="radio" className="accent-sky-500" />
                {t}
              </label>
            ))}
            <div className="col-span-2 flex items-center justify-between mt-1">
              <span className="text-xs text-slate-400">Step 2 of 2</span>
              <button className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-3 py-2 text-sm">Generate Policy</button>
            </div>
          </div>
        </Card>
      </Section>

      {/* Policy Editor */}
      <Section
        id="editor"
        title="Policy Editor"
        description="Split view with Markdown editor, live preview, version history, and changelog."
      >
        <Card title="Editor & Preview" subtitle="Write on the left, see results on the right" icon={Save}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea className="min-h-[220px] rounded-lg bg-slate-950 border border-slate-800 p-3 font-mono text-sm text-slate-200" defaultValue={`# Access Control Policy\n\n- Purpose\n- Scope\n- Roles & Responsibilities\n\n## Controls\n- MFA required\n- Least privilege\n- Quarterly access review`}></textarea>
            <div className="min-h-[220px] rounded-lg border border-slate-800 p-4 bg-slate-900/50">
              <h4 className="text-white font-semibold">Access Control Policy</h4>
              <ul className="list-disc pl-5 mt-2 text-slate-200 space-y-1">
                <li>Purpose</li>
                <li>Scope</li>
                <li>Roles & Responsibilities</li>
              </ul>
              <p className="text-slate-300 mt-3">Controls:</p>
              <ul className="list-disc pl-5 text-slate-200 space-y-1">
                <li>MFA required</li>
                <li>Least privilege</li>
                <li>Quarterly access review</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm">Toggle Preview</button>
                <button className="px-3 py-2 rounded-lg bg-sky-600 text-white text-sm">Save</button>
              </div>
            </div>
          </div>
        </Card>
        <Card title="Versions & Changelog" subtitle="Audit trail emphasized" icon={History}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-300 mb-2">Version History</p>
              <ul className="text-sm text-slate-200 space-y-1">
                <li>v3 • Minor copy edits</li>
                <li>v2 • Added MFA requirement</li>
                <li>v1 • Initial draft</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-slate-300 mb-2">Changelog</p>
              <ul className="text-sm text-slate-200 space-y-1">
                <li>+ Clarified scope language</li>
                <li>+ Expanded access review cadence</li>
                <li>- Removed legacy SSO references</li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* PDF Export */}
      <Section
        id="pdf"
        title="PDF Export"
        description="Preview with branding, header/footer, and a clear download action."
      >
        <Card title="Preview" subtitle="Branded PDF layout" icon={Download}>
          <div className="rounded-lg border border-slate-800 bg-white p-6 text-slate-800">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="font-semibold">Acme Corp</div>
              <div className="text-xs text-slate-500">PolicyPilot • Export Preview</div>
            </div>
            <div className="mt-4 space-y-2">
              <h4 className="text-lg font-semibold">Access Control Policy</h4>
              <p className="text-sm leading-relaxed">This policy defines requirements for managing user access across systems, enforcing least privilege, and ensuring regular reviews.</p>
            </div>
            <div className="mt-6 text-right text-xs text-slate-500">Page 1</div>
          </div>
          <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-4 py-2">
            Download PDF
            <ArrowRight className="h-4 w-4" />
          </button>
        </Card>
        <Card title="Export Notes" subtitle="Print-friendly by default" icon={FileText}>
          <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
            <li>Header includes company logo/name</li>
            <li>Footer shows page numbers</li>
            <li>Consistent margins and typography for auditors</li>
          </ul>
        </Card>
      </Section>

      {/* Settings */}
      <Section
        id="settings"
        title="Settings & Profile Management"
        description="Clean separation between personal and organization settings with simple saves."
      >
        <Card title="User Profile" subtitle="Personal details" icon={Settings}>
          <div className="grid gap-3">
            <input className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Name" />
            <input type="email" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Email" />
            <input type="password" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="New password" />
            <button className="self-start rounded-lg bg-slate-700 hover:bg-slate-600 text-white px-4 py-2">Save Changes</button>
          </div>
        </Card>
        <Card title="Organization Profile" subtitle="Company details & frameworks" icon={ClipboardList}>
          <div className="grid gap-3">
            <input className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Company name" />
            <div className="grid grid-cols-2 gap-3">
              <input className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Industry" />
              <input className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2" placeholder="Tech stack" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-200">
              {['ISO 27001','SOC 2','GDPR','PCI-DSS'].map(fr => (
                <label key={fr} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-sky-500" />
                  {fr}
                </label>
              ))}
            </div>
            <button className="self-start rounded-lg bg-slate-700 hover:bg-slate-600 text-white px-4 py-2">Save Changes</button>
          </div>
        </Card>
      </Section>
    </div>
  );
}
