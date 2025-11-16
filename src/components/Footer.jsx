export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Salus Security. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#solutions" className="hover:text-emerald-700">Solutions</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
            <a href="#" className="hover:text-emerald-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
