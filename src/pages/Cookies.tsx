
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Cookie Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit our website. They help us make your experience better by remembering your 
              preferences and providing personalized features.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold mb-2">Essential Cookies</h3>
                <p className="text-gray-600">Required for basic website functionality</p>
              </li>
              <li>
                <h3 className="font-semibold mb-2">Preference Cookies</h3>
                <p className="text-gray-600">Remember your settings and preferences</p>
              </li>
              <li>
                <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-gray-600">Help us understand how visitors use our website</p>
              </li>
              <li>
                <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                <p className="text-gray-600">Used to deliver relevant advertisements</p>
              </li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are 
              already on your computer and you can set most browsers to prevent them from being placed.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
