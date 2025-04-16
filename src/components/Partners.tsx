
import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const Partners = () => {
  const manufacturerImages = [
    { name: '1688', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742' },
    { name: 'Made-in-China', image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb' },
    { name: 'Global Sources', image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be' },
    { name: 'DHgate', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625' },
    { name: 'Yiwugo', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742' },
  ];

  return (
    <section className="py-16 bg-white" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Direct Price Connect{' '}
            <span className="gradient-text">Manufacturing Partners</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Connect directly with top Chinese manufacturers and suppliers across various industries.
          </p>
        </div>

        <Card className="p-8 bg-white shadow-md border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {manufacturerImages.map((partner, index) => (
              <div key={index} className="flex items-center justify-center relative group">
                <div 
                  className="relative w-full h-24 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${partner.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-[#c0313d] opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <span className="text-white font-medium text-sm">{partner.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <AlertCircle className="h-4 w-4 mr-2" />
              <p>Direct access to verified Chinese manufacturers and suppliers.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Partners;
