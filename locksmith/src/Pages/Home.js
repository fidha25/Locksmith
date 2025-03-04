import React from 'react'
import IntroSection from '../components/IntroSection/IntroSection';
import CardSection from '../components/CardSection/CardSection';
import LockSmith from '../components/LockSmith/LockSmith';
import OurServices from '../components/Services/Services';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import LastSection from '../components/LastSection/LastSection';
import Footer from '../components/Footer/Footer';
import Carousal from '../components/IntroSection/Carousal';
import UnlockYourFuture from '../components/UnlockYourFuture/UnlockYourFuture';

export default function Home() {
  return (
    <div>
      {/* <Carousal/> */}
    <IntroSection/>
 <CardSection/>
 <LockSmith/>
 <UnlockYourFuture/>
 <OurServices/>
 <HowWeWork/>
 <LastSection/>
 </div>
  )
}

