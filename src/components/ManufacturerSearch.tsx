
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const manufacturerSites = [
  { name: 'Made in China', url: 'https://www.made-in-china.com' },
  { name: '1688', url: 'https://www.1688.com' },
  { name: 'Yiwugo', url: 'https://www.yiwugo.com' },
  { name: 'Zaful', url: 'https://www.zaful.com' },
  { name: 'Alibaba', url: 'https://www.alibaba.com' },
  { name: 'DHgate', url: 'https://www.dhgate.com' },
  { name: 'Global Sources', url: 'https://www.globalsources.com' },
];

const ManufacturerSearch = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="text-xl font-semibold mb-4">Find Direct Manufacturers</h3>
      <div className="space-y-4">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search products across manufacturer sites..." 
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2">
          {manufacturerSites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {site.name}
            </a>
          ))}
        </div>
        <Button className="w-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark">
          <Search className="mr-2 h-4 w-4" />
          Search All Manufacturers
        </Button>
      </div>
    </div>
  );
};

export default ManufacturerSearch;
