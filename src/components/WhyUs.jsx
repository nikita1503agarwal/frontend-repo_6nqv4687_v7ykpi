import { CheckCircle2 } from 'lucide-react'

const points = [
  'Senior security architects and IR experts on call',
  'Proactive threat hunting and purple teaming',
  'Compliance-first methodology with measurable KPIs',
  'Executive dashboards and board-ready reporting',
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why Salus Security</h2>
          <p className="mt-4 text-gray-600">We combine elite talent, proven frameworks, and automation to reduce risk faster and more efficiently.</p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-[inset_0_1px_0_rgba(16,185,129,0.15)]">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 border border-emerald-300/40" />
            <p className="mt-4 text-sm text-gray-600">Secure by design: layered controls, continuous verification, clear accountability.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
