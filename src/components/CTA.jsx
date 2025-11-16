export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-400/30 bg-gray-900/50 backdrop-blur p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to strengthen your security posture?</h3>
          <p className="mt-3 text-gray-300">Book a consultation and receive a free high-level risk assessment.</p>

          <form className="mt-8 grid sm:grid-cols-2 gap-3">
            <input type="text" placeholder="Full name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input type="email" placeholder="Work email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input type="text" placeholder="Company" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" />
            <button type="submit" className="w-full sm:w-auto mt-2 inline-flex justify-center items-center rounded-lg bg-emerald-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors sm:col-span-2">Request Consultation</button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-gray-400">By submitting, you agree to our privacy policy.</p>
      </div>
    </section>
  )
}
