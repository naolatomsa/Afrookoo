import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Engagement from './components/Engagement.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import SecondaryModals from './components/SecondaryModals.jsx'

export default function App() {
  const [preselectedLane, setPreselectedLane] = useState(null)
  const [modalState, setModalState] = useState({
    isOpen: false,
    tab: 'about',
  })

  const openModal = (tab = 'about') => {
    setModalState({ isOpen: true, tab })
  }

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  const setModalTab = (tab) => {
    setModalState((prev) => ({ ...prev, tab }))
  }

  const handleSelectLane = (laneId) => {
    setPreselectedLane(laneId)
  }

  return (
    <>
      <Navbar onOpenModal={openModal} />

      <main>
        {/* Chapter 1: Hero & Real-World System Showcase */}
        <Hero />

        {/* Chapter 2: High-Impact Case Studies */}
        <Portfolio />

        {/* Chapter 3: Core Engineering Capabilities */}
        <Services />

        {/* Chapter 4: Engagement Models & Shipping Process */}
        <Engagement onSelectLane={handleSelectLane} />

        {/* Chapter 5: Project Inquiry & Scoping */}
        <Contact preselectedLane={preselectedLane} />
      </main>

      <Footer onOpenModal={openModal} />
      <BackToTop />

      {/* Secondary Modals: About, Industries, Insights, Careers */}
      <SecondaryModals
        isOpen={modalState.isOpen}
        activeTab={modalState.tab}
        onClose={closeModal}
        onSelectTab={setModalTab}
      />
    </>
  )
}
