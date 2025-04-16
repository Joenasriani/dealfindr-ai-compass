import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Bell, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Hero = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const convertPrice = (price: number, currency: string) => {
    const rates = {
      CNY: 1,
      USD: 0.14,
      AED: 0.51
    };
    return (price * rates[currency as keyof typeof rates]).toFixed(2);
  };

  const getCurrencySymbol = (currency: string) => {
    const symbols = {
      CNY: '¥',
      USD: '$',
      AED: 'د.إ'
    };
    return symbols[currency as keyof typeof symbols];
  };

  return (
    <section className="bg-gradient-to-b from-white to-dealfindr-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
            <Search className="h-8 w-8 text-gray-500 ml-8 mr-4" />
            <Input 
              type="text" 
              placeholder="Search for any product, deal, or manufacturer..." 
              className="flex-1 border-none text-xl md:text-2xl py-6 px-4 focus:ring-0"
            />
            <Select
              value={selectedCurrency}
              onValueChange={setSelectedCurrency}
            >
              <SelectTrigger className="w-[100px] border-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CNY">¥ CNY</SelectItem>
                <SelectItem value="USD">$ USD</SelectItem>
                <SelectItem value="AED">د.إ AED</SelectItem>
              </SelectContent>
            </Select>
            <Button className="mr-2 rounded-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark py-6 px-8 text-base">
              Search
            </Button>
          </div>
        </div>

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
                    value="Electronic Components Wholesale"
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-dealfindr-gray rounded-lg p-4 border border-gray-200 hover-scale">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Shenzhen LCSC</h3>
                      <p className="text-sm text-gray-500">Bulk Orders Available</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-dealfindr-green">
                        {getCurrencySymbol(selectedCurrency)}{convertPrice(12.50, selectedCurrency)}/pc
                      </p>
                      <p className="text-xs text-gray-500">MOQ: 1000 pcs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dealfindr-gray rounded-lg p-4 border border-gray-200 hover-scale">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Yiwu Market</h3>
                      <p className="text-sm text-gray-500">Direct Factory</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">
                        {getCurrencySymbol(selectedCurrency)}{convertPrice(11.80, selectedCurrency)}/pc
                      </p>
                      <p className="text-xs text-gray-500">MOQ: 5000 pcs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dealfindr-gray rounded-lg p-4 border border-gray-200 hover-scale">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Guangzhou Trading</h3>
                      <p className="text-sm text-gray-500">OEM Available</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">
                        {getCurrencySymbol(selectedCurrency)}{convertPrice(13.20, selectedCurrency)}/pc
                      </p>
                      <p className="text-xs text-gray-500">MOQ: 2000 pcs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="text-sm text-dealfindr-blue border-dealfindr-blue rounded-full">
                  View All 25 Manufacturers
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-dealfindr-green text-white rounded-full px-4 py-2 text-sm font-medium animate-pulse-slow">
              Save up to 45% with direct factory prices
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
