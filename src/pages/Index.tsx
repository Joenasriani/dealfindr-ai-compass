
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
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
          <div className="bg-gray-50 py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}!</h2>
            <p className="text-gray-600">You are now logged in to Direct Price Connect</p>
          </div>
        )}
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
