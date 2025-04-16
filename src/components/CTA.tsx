
import React from 'react';
import { Button } from '@/components/ui/button';
import { BellRing, Search } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-dealfindr-blue to-dealfindr-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to start saving on all your purchases?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 px-4">
            Join thousands of smart shoppers who use DealFindr AI to find the best deals online.
            It's completely free to get started!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <Button size="lg" className="w-full sm:w-auto bg-white text-dealfindr-blue hover:bg-gray-100 rounded-full py-4 md:py-6">
              <Search className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              Compare Deals
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-full py-4 md:py-6">
              <BellRing className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              Track This Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
