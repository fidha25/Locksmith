import React from 'react'
import IntroSection from '../components/IntroSection/IntroSection';
import CardSection from '../components/CardSection/CardSection';
import LockSmith from '../components/LockSmith/LockSmith';
import OurServices from '../components/Services/Services';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import LastSection from '../components/LastSection/LastSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
    <IntroSection/>
 <CardSection/>
 <LockSmith/>
 <OurServices/>
 <HowWeWork/>
 <LastSection/>
 <Footer/></div>
  )
}

