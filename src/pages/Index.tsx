
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        {user && (
          <div className="bg-gray-50 py-8 md:py-12 px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Welcome, {user.email}!</h2>
            <p className="text-sm md:text-base text-gray-600">You are now logged in to Direct Price Comparison</p>
          </div>
        )}
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
