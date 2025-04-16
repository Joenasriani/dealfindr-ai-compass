
import React from 'react';
import { DollarSign } from 'lucide-react';
import ManufacturerSearch from '../ManufacturerSearch';

const HeroSearch = () => {
  return (
    <div className="w-full lg:w-1/2 px-4 lg:px-0">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden p-4 md:p-6 card-shadow">
        <div className="bg-dealfindr-blue bg-opacity-10 rounded-lg p-3 mb-4 md:mb-6 flex items-center justify-center">
          <DollarSign className="h-4 md:h-5 w-4 md:w-5 text-dealfindr-blue mr-2" />
          <span className="text-xs md:text-sm font-medium text-dealfindr-blue">
            Save up to 45% with direct factory prices
          </span>
        </div>
        <div className="mt-6 md:mt-8">
          <ManufacturerSearch />
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
