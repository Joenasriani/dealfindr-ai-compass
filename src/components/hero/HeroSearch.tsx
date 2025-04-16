
import React from 'react';
import ManufacturerSearch from '../ManufacturerSearch';

const HeroSearch = () => {
  return (
    <div className="w-full lg:w-1/2 px-4 lg:px-0">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden p-4 md:p-6 card-shadow">
        <div className="mt-6 md:mt-8">
          <ManufacturerSearch />
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
