
import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const Partners = () => {
  return (
    <section className="py-16 bg-white" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leading Chinese{' '}
            <span className="gradient-text">Manufacturing Partners</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Connect directly with top Chinese manufacturers and suppliers across various industries.
          </p>
        </div>

        <Card className="p-8 bg-white shadow-md border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 rounded-lg p-4 h-16 w-full flex items-center justify-center text-gray-500 font-medium">Alibaba</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 rounded-lg p-4 h-16 w-full flex items-center justify-center text-gray-500 font-medium">1688</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 rounded-lg p-4 h-16 w-full flex items-center justify-center text-gray-500 font-medium">Made-in-China</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 rounded-lg p-4 h-16 w-full flex items-center justify-center text-gray-500 font-medium">Global Sources</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 rounded-lg p-4 h-16 w-full flex items-center justify-center text-gray-500 font-medium">DHgate</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 rounded-lg p-4 h-16 w-full flex items-center justify-center text-gray-500 font-medium">Yiwugo</div>
            </div>
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
