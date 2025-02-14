import React from 'react'
import Footer from '../components/Footer/Footer';
import AboutIntro from '../components/AboutIntro/AboutIntro';
import AboutPara from '../components/AboutPara/AboutPara';
import SecurityInfoSection from '../components/SecurityInfoSection/SecurityInfoSection';

export default function AboutUs() {
  return (
    <div>
        <AboutIntro/>
        <AboutPara/>
        <SecurityInfoSection/>
        <Footer/>
        </div>
  )
}
