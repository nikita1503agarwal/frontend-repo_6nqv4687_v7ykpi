import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
