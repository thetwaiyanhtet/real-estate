import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/Hero'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'
import SectionFour from '../Components/SectionFour'
import LastSection from '../Components/LastSection'
import Footer from '../Components/Footer'


const HomePage = () => {
  return (
      <div>
          <Navbar />
          <HeroSection />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <LastSection />
          <Footer/>
    </div>
  )
}

export default HomePage
