
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const manufacturerSites = [
  // Major B2B Platforms
  { name: 'Alibaba', url: 'https://www.alibaba.com', category: 'B2B Platform' },
  { name: '1688', url: 'https://www.1688.com', category: 'B2B Platform' },
  { name: 'Made in China', url: 'https://www.made-in-china.com', category: 'B2B Platform' },
  { name: 'Global Sources', url: 'https://www.globalsources.com', category: 'B2B Platform' },
  { name: 'DHgate', url: 'https://www.dhgate.com', category: 'B2B Platform' },
  
  // Industry-Specific Marketplaces
  { name: 'Yiwugo', url: 'https://www.yiwugo.com', category: 'Industry Specific' },
  { name: 'Chic Me', url: 'https://www.chicme.com', category: 'Fashion' },
  { name: 'LightInTheBox', url: 'https://www.lightinthebox.com', category: 'Industry Specific' },
  { name: 'Banggood', url: 'https://www.banggood.com', category: 'Industry Specific' },
  { name: 'AliExpress', url: 'https://www.aliexpress.com', category: 'B2C Platform' },
  
  // Electronics & Components
  { name: 'Shenzhen LCSC', url: 'https://www.lcsc.com', category: 'Electronics' },
  { name: 'Chinavasion', url: 'https://www.chinavasion.com', category: 'Electronics' },
  { name: 'DX.com', url: 'https://www.dx.com', category: 'Electronics' },
  { name: 'TomTop', url: 'https://www.tomtop.com', category: 'Electronics' },
  
  // Fashion & Textiles
  { name: 'Zaful', url: 'https://www.zaful.com', category: 'Fashion' },
  { name: 'FashionTIY', url: 'https://www.fashiontiy.com', category: 'Fashion' },
  { name: 'Wholesale7', url: 'https://www.wholesale7.net', category: 'Fashion' },
  
  // Industrial & Machinery
  { name: 'EC21', url: 'https://www.ec21.com', category: 'Industrial' },
  { name: 'IndustryStock', url: 'https://www.industrystock.com', category: 'Industrial' },
  { name: 'ChinaCNCZone', url: 'https://www.chinacnczone.com', category: 'Industrial' }
];

const ManufacturerSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = Array.from(new Set(manufacturerSites.map(site => site.category)));
  
  const filteredSites = manufacturerSites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="text-xl font-semibold mb-4">Find Direct Manufacturers</h3>
      <div className="space-y-4">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search manufacturer platforms..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === 'all' 
                ? 'bg-dealfindr-blue text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category 
                  ? 'bg-dealfindr-blue text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto">
          {filteredSites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div>
                <div className="font-medium">{site.name}</div>
                <div className="text-xs text-gray-500">{site.category}</div>
              </div>
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
