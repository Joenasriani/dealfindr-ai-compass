
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, Bell } from 'lucide-react';

const Extension = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-dealfindr-blue-light rounded-full p-4 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
            <Globe className="h-8 w-8 text-dealfindr-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Browser Extension Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Shop smarter with our browser extension. Compare prices across global manufacturers in real-time.
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

export default Extension;
