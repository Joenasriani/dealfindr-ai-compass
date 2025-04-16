
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Smartphone, Bell } from 'lucide-react';

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-dealfindr-blue-light rounded-full p-4 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
            <Smartphone className="h-8 w-8 text-dealfindr-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mobile App Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're working hard to bring DealFindr AI to your mobile device. Get notified when we launch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark">
              <Bell className="mr-2 h-4 w-4" />
              Get Launch Alert
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileApp;
