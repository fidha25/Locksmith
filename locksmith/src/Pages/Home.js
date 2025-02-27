import React from 'react'
import IntroSection from '../components/IntroSection/IntroSection';
import CardSection from '../components/CardSection/CardSection';
import LockSmith from '../components/LockSmith/LockSmith';
import OurServices from '../components/Services/Services';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import LastSection from '../components/LastSection/LastSection';
import Footer from '../components/Footer/Footer';
import Carousal from '../components/IntroSection/Carousal';

export default function Home() {
  return (
    <div>
      {/* <Carousal/> */}
    <IntroSection/>
 <CardSection/>
 <LockSmith/>
 <OurServices/>
 <HowWeWork/>
 <LastSection/>
 </div>
  )
}

