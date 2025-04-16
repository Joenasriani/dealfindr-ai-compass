
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";
import ManufacturerSearch from './ManufacturerSearch';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartSaving = () => {
    // Optionally show a toast to guide the user
    toast({
      title: "Let's Find Your Deal",
      description: "Explore manufacturer websites below",
    });
  };

  return (
    <section className="bg-gradient-to-b from-white to-dealfindr-gray py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Direct Price Connect:{' '}
              <span className="gradient-text">Find Better Deals.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Compare prices from hundreds of stores and manufacturers. Get notified when prices drop. Powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={handleStartSaving} 
                className="bg-dealfindr-blue hover:bg-dealfindr-blue-dark rounded-full text-white py-6 px-8 flex items-center justify-center"
              >
                Start Saving Now
              </Button>
              <Button variant="outline" className="border-dealfindr-blue text-dealfindr-blue rounded-full py-6 px-8 flex items-center justify-center">
                <Bell className="mr-2 h-5 w-5" />
                Try Our Price Tracker
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 card-shadow">
              <div className="bg-dealfindr-blue bg-opacity-10 rounded-lg p-3 mb-6 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-dealfindr-blue mr-2" />
                <span className="text-sm font-medium text-dealfindr-blue">
                  Save up to 45% with direct factory prices
                </span>
              </div>
              <div className="mt-8">
                <ManufacturerSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

