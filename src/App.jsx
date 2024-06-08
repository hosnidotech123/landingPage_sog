import React, { useEffect } from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import './assets/vendor/swiper/swiper-bundle.min.css';
// import './assets/vendor/swiper/swiper-bundle.min.js';

import { toggleScrolled, mobileNavToogle, initScripts } from "./utils"
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'


import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.css';
// import '@srexi/purecounterjs/dist/purecounter.css';

import "./App.css"
import AboutSection from './components/AboutSection';
import ValuesSection from './components/ValueSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import AltFeaturesSection from './components/AltFeaturesSection';
import ServicesSection from './components/ServicesSection';
import FaqSection from './components/FaqSection';

function App() {


  useEffect(() => {
    initScripts();

    return () => {
      // Cleanup event listeners if necessary
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      // Remove other event listeners similarly...
    };
  }, []);


  return (
    <div className='index-page'>
       <Header/>
       <div className='main'>
          <HeroSection/>
          <AboutSection/>
          <ValuesSection/>
          <StatsSection/>
          <FeaturesSection/>
          <AltFeaturesSection/>
          <ServicesSection/>
          <FaqSection/>
       </div>
       <Footer/>
    </div>
  )
}

export default App
