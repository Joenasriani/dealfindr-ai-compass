
import React from 'react';
import HeroHeader from './hero/HeroHeader';
import HeroSearch from './hero/HeroSearch';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-dealfindr-gray py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <HeroHeader />
          <HeroSearch />
        </div>
      </div>
    </section>
  );
};

export default Hero;
