import { ShieldCheck, Lock, Cloud, Activity, Network, FileCheck } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Managed Detection & Response',
    desc: '24/7 monitoring with rapid containment, guided by seasoned analysts.'
  },
  {
    icon: Lock,
    title: 'Identity & Access Management',
    desc: 'Zero-trust controls, SSO, MFA, and privileged access governance.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'Harden AWS, Azure, and GCP with continuous posture management.'
  },
  {
    icon: Activity,
    title: 'Risk & Compliance',
    desc: 'SOC 2, ISO 27001, HIPAA and PCI programs built for audit-readiness.'
  },
  {
    icon: Network,
    title: 'Network & Endpoint',
    desc: 'Next-gen EDR, microsegmentation, and secure remote access.'
  },
  {
    icon: FileCheck,
    title: 'Security Assessments',
    desc: 'Pen tests, red teaming, and executive-ready reports.'
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Solutions built to secure your business</h2>
          <p className="mt-3 text-gray-600">Modular services that scale with your risk profile and regulatory needs.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-[0_10px_40px_-15px_rgba(16,185,129,0.4)] transition-all">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
