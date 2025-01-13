import React from 'react';
import HomeHero from './Components/HomeHero';
import HomeAbout from './Components/HomeAbout';
import DonateForm from './Components/DonateForm';

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