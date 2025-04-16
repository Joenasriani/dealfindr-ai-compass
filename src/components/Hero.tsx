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
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<null | any[]>(null);
  const navigate = useNavigate();

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

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search query is empty",
        description: "Please enter a product to search for",
        variant: "destructive",
      });
      return;
    }

    // Mock search results - in a real app this would be an API call
    const mockResults = [
      {
        id: 1,
        name: "Shenzhen Electronics",
        description: "Bulk Orders Available",
        price: 14.99,
        moq: "1000 pcs"
      },
      {
        id: 2,
        name: "Guangzhou Trading Co.",
        description: "Direct Factory",
        price: 12.50,
        moq: "5000 pcs"
      },
      {
        id: 3,
        name: "Shanghai Components Ltd",
        description: "OEM Available",
        price: 13.75,
        moq: "2000 pcs"
      }
    ];

    setSearchResults(mockResults);
    
    // Optional: you could also navigate to a search results page
    // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    
    toast({
      title: "Search results found",
      description: `Found ${mockResults.length} results for "${searchQuery}"`,
    });
  };

  const findCheapestPrice = (results: any[]) => {
    if (!results) return null;
    return Math.min(...results.map(item => item.price));
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
              <div className="bg-dealfindr-blue bg-opacity-10 rounded-lg p-3 mb-6 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-dealfindr-blue mr-2" />
                <span className="text-sm font-medium text-dealfindr-blue">
                  Save up to 45% with direct factory prices
                </span>
              </div>
              <div className="space-y-4">
                {searchResults && searchResults.map((result) => {
                  const isLowestPrice = result.price === findCheapestPrice(searchResults);
                  return (
                    <div key={result.id} className="bg-dealfindr-gray rounded-lg p-4 border border-gray-200 hover-scale">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{result.name}</h3>
                          <p className="text-sm text-gray-500">{result.description}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${isLowestPrice ? 'text-dealfindr-blue' : ''}`}>
                            {getCurrencySymbol(selectedCurrency)}{convertPrice(result.price, selectedCurrency)}/pc
                          </p>
                          <p className="text-xs text-gray-500">MOQ: {result.moq}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="text-sm text-dealfindr-blue border-dealfindr-blue rounded-full">
                  View All 25 Manufacturers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
