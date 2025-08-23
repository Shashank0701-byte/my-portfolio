// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechnicalProficiency from './sections/TechnicalProficiency';
import AboutMe from './sections/AboutMe';
import MyProjects from './sections/MyProjects';
import Blog from './sections/Blog';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import IntroAnimation from './components/IntroAnimation';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [showHero, setShowHero] = useState(false);

  const handleFinishIntro = () => {
    setShowHero(true);
  };

  return (
    <>
      {showHero ? (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Hero />
          <TechnicalProficiency />
          <AboutMe />
          <MyProjects />
          <Blog />
          <ContactMe />
          <Footer />
          <ScrollToTop />
        </div>
      ) : (
        <IntroAnimation onFinish={handleFinishIntro} />
      )}
    </>
  );
};

export default App;
