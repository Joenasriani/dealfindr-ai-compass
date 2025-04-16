
import React from 'react';

const HeroHeader = () => {
  return (
    <div className="lg:w-1/2 mb-10 lg:mb-0">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Direct Price Connect:{' '}
        <span className="gradient-text">Find Better Deals.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
        Compare prices from hundreds of stores and manufacturers. Get notified when prices drop. Powered by AI.
      </p>
    </div>
  );
};

export default HeroHeader;
