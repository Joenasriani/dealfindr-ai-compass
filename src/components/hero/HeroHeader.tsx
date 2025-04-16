
import React from 'react';

const HeroHeader = () => {
  return (
    <div className="lg:w-1/2 mb-8 md:mb-10 lg:mb-0 px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
        Direct Price Connect:{' '}
        <span className="gradient-text">Find Better Deals.</span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl">
        Compare prices from hundreds of stores and manufacturers. Get notified when prices drop. Powered by AI.
      </p>
    </div>
  );
};

export default HeroHeader;
