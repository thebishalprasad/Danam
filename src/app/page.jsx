import React from 'react'
import HomeHero from './components/HomeHero'
import HomeAbout from './components/HomeAbout'
import DonateForm from './components/DonateForm'

const Home = () => {
  return (
    <main className="bg-white h-fit w-full">
      <div className="h-16">
        {/* Navbar placeholder */}
      </div>
      <HomeHero />
      <HomeAbout />
      <DonateForm />
    </main>
  )
}

export default Home