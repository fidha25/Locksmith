import React from 'react'
import Footer from '../components/Footer/Footer';
import AboutIntro from '../components/AboutIntro/AboutIntro';
import AboutPara from '../components/AboutPara/AboutPara';
import SecurityInfoSection from '../components/SecurityInfoSection/SecurityInfoSection';
import WhyChooseUs from '../components/vision/vision';
import TeamSection from '../components/OurTeam/OurTeam';
import AboutContact from '../components/AboutContact/AboutContact';

export default function AboutUs() {
  return (
    <div>
        <AboutIntro/>
        {/* <AboutPara/> */}
        <SecurityInfoSection/>
        <WhyChooseUs/>
        <TeamSection/>
<AboutContact/>
        </div>
  )
}
