/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import GrowthCalculator from './components/GrowthCalculator';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PlaceholdersModal from './components/PlaceholdersModal';
import MobileBottomBar from './components/MobileBottomBar';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaceholdersModalOpen, setIsPlaceholdersModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('Marketing Strategy');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (summary: string, recommendedService: string) => {
    setPrefilledService(recommendedService);
    setPrefilledMessage(summary);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.querySelector('#services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#FACC15] selection:text-[#0B0F19]">
      
      {/* Intro Preloader Screen */}
      <Preloader onLoadingComplete={() => setIsLoading(false)} />

      {/* Sticky Navigation */}
      <Navbar 
        onOpenPlaceholdersModal={() => setIsPlaceholdersModalOpen(true)}
        onGetStartedClick={scrollToContact}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onGetStartedClick={scrollToContact}
          onExploreServicesClick={scrollToServices}
        />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Services Section */}
        <Services 
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. 4-Step Process Section */}
        <Process />

        {/* Interactive Growth Estimator */}
        <GrowthCalculator 
          onApplyEstimateToContact={handleApplyEstimate}
        />

        {/* 6. Call To Action Section */}
        <CTASection 
          onContactClick={scrollToContact}
        />

        {/* 7. Contact Section with Flyer Placeholders */}
        <ContactSection 
          prefilledService={prefilledService}
          prefilledMessage={prefilledMessage}
          onOpenPlaceholdersModal={() => setIsPlaceholdersModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPlaceholdersModal={() => setIsPlaceholdersModalOpen(true)}
      />

      {/* Mobile Sticky Quick Contact Dock */}
      <MobileBottomBar 
        onGetStartedClick={scrollToContact}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Placeholders Guide Modal */}
      <PlaceholdersModal 
        isOpen={isPlaceholdersModalOpen}
        onClose={() => setIsPlaceholdersModalOpen(false)}
      />

    </div>
  );
}
