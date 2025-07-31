import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import RPAStatsSection from './components/RPAStatsSection';
import UseCasesSection from './components/UseCasesSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div id="home" className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <RPAStatsSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;