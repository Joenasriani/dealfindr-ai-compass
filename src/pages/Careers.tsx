
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4 py-16">
        <div className="text-center max-w-2xl">
          <Rocket className="mx-auto h-24 w-24 text-dealfindr-blue mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Careers at Compare Price Matrix
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're excited to share our upcoming career opportunities! 
            Stay tuned as we prepare to launch our careers page.
          </p>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-dealfindr-blue">
              Coming Soon
            </h2>
            <p className="text-gray-700">
              We're currently working on our careers page. 
              Check back soon for exciting job openings and opportunities to join our team!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
