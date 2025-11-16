import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.20),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15),transparent_45%)] pointer-events-none" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-200 text-xs mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Enterprise Security. Assured.
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Modern Protection for a Connected World
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl">
              Salus Security delivers end-to-end cybersecurity, risk management, and 24/7 monitoring so your business stays resilient and compliant.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-emerald-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors">
                Talk to an Expert
              </a>
              <a href="#solutions" className="inline-flex justify-center items-center rounded-lg bg-white/10 text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors">
                Explore Solutions
              </a>
            </div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
