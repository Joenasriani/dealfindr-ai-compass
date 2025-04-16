import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Director Price Connect - Global Price Comparison";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Partners />
      <CTA />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
