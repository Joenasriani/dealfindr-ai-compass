
import React from 'react';
import { DollarSign } from 'lucide-react';
import ManufacturerSearch from '../ManufacturerSearch';

const HeroSearch = () => {
  return (
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
  );
};

export default HeroSearch;
