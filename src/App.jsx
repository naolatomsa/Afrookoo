import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Products from './components/Products.jsx'
import Industries from './components/Industries.jsx'
import Process from './components/Process.jsx'
import Tech from './components/Tech.jsx'
import Portfolio from './components/Portfolio.jsx'
import Clients from './components/Clients.jsx'
import Insights from './components/Insights.jsx'
import Careers from './components/Careers.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Industries />
        <Process />
        <Tech />
        <Portfolio />
        <Clients />
        <Insights />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
