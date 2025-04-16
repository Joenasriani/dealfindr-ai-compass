import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Bell } from 'lucide-react';
import ManufacturerSearch from './ManufacturerSearch';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-dealfindr-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find the Best Deals.{' '}
              <span className="gradient-text">Instantly.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Compare prices from hundreds of stores. Get notified when prices drop. Powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-dealfindr-blue hover:bg-dealfindr-blue-dark rounded-full text-white py-6 px-8 flex items-center justify-center">
                <Search className="mr-2 h-5 w-5" />
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
              <div className="mb-6 border-b pb-4">
                <div className="flex items-center bg-gray-100 rounded-full p-2 mb-3">
                  <Search className="h-5 w-5 text-gray-500 mx-2" />
                  <input 
                    type="text" 
                    className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-500" 
                    placeholder="Search for any product..."
                    value="Sony WH-1000XM4 Headphones"
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-dealfindr-gray rounded-lg p-4 border border-gray-200 hover-scale">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Amazon</h3>
                      <p className="text-sm text-gray-500">Free shipping</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-dealfindr-green">$248.00</p>
                      <p className="text-xs text-gray-500">Last updated: 2h ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dealfindr-gray rounded-lg p-4 border border-gray-200 hover-scale">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Best Buy</h3>
                      <p className="text-sm text-gray-500">In store pickup</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$279.99</p>
                      <p className="text-xs text-gray-500">Last updated: 5h ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dealfindr-gray rounded-lg p-4 border border-gray-200 hover-scale">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Walmart</h3>
                      <p className="text-sm text-gray-500">Free shipping</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$298.00</p>
                      <p className="text-xs text-gray-500">Last updated: 1d ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="text-sm text-dealfindr-blue border-dealfindr-blue rounded-full">
                  View All 12 Deals
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-dealfindr-green text-white rounded-full px-4 py-2 text-sm font-medium animate-pulse-slow">
              Save up to 21% compared to retail
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
