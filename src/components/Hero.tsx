
import React from 'react';
import { DollarSign } from 'lucide-react';
import ManufacturerSearch from './ManufacturerSearch';

const Hero = () => {
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
