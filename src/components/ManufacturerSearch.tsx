import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "@/hooks/use-toast";

const manufacturerSites = [
  // Major B2B Platforms
  { name: '1688', url: 'https://s.1688.com/selloffer/offer_search.htm', category: 'B2B Platform' },
  { name: 'Made in China', url: 'https://www.made-in-china.com/productdirectory.do', category: 'B2B Platform' },
  { name: 'Global Sources', url: 'https://www.globalsources.com/product-search', category: 'B2B Platform' },
  { name: 'DHgate', url: 'https://www.dhgate.com/wholesale/search.do', category: 'B2B Platform' },
  
  // Industry-Specific Marketplaces
  { name: 'Yiwugo', url: 'https://en.yiwugo.com/products/search.html', category: 'Industry Specific' },
  { name: 'Chic Me', url: 'https://www.chicme.com/search', category: 'Fashion' },
  { name: 'LightInTheBox', url: 'https://www.lightinthebox.com/c/search', category: 'Industry Specific' },
  { name: 'Banggood', url: 'https://www.banggood.com/search', category: 'Industry Specific' },
  
  // Electronics & Components
  { name: 'Shenzhen LCSC', url: 'https://www.lcsc.com/search', category: 'Electronics' },
  { name: 'Chinavasion', url: 'https://www.chinavasion.com/search', category: 'Electronics' },
  { name: 'DX.com', url: 'https://www.dx.com/s', category: 'Electronics' },
  { name: 'TomTop', url: 'https://www.tomtop.com/search', category: 'Electronics' },
  
  // Fashion & Textiles
  { name: 'Zaful', url: 'https://www.zaful.com/search', category: 'Fashion' },
  { name: 'FashionTIY', url: 'https://www.fashiontiy.com/search', category: 'Fashion' },
  { name: 'Wholesale7', url: 'https://www.wholesale7.net/search', category: 'Fashion' }
];

const ManufacturerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Array.from(new Set(manufacturerSites.map(site => site.category)));

  const handleSearch = (site: typeof manufacturerSites[0]) => {
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter a search term",
        description: "Enter a product to search across manufacturers",
        variant: "destructive",
      });
      return;
    }

    const searchUrl = `${site.url}?q=${encodeURIComponent(searchTerm)}`;
    window.open(searchUrl, '_blank');
  };

  const handleSearchAll = () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter a search term",
        description: "Enter a product to search across manufacturers",
        variant: "destructive",
      });
      return;
    }

    const filteredSites = manufacturerSites.filter(site => 
      selectedCategory === 'all' || site.category === selectedCategory
    );

    filteredSites.forEach(site => {
      const searchUrl = `${site.url}?q=${encodeURIComponent(searchTerm)}`;
      window.open(searchUrl, '_blank');
    });

    toast({
      title: "Search initiated",
      description: `Searching across ${filteredSites.length} manufacturer sites`,
    });
  };

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
          <Search className="absolute left-3 top-3 h-4 w-4 text-dealfindr-blue" />
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
            <button
              key={site.name}
              onClick={() => handleSearch(site)}
              className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-left w-full"
            >
              <div>
                <div className="font-medium">{site.name}</div>
                <div className="text-xs text-gray-500">{site.category}</div>
              </div>
            </button>
          ))}
        </div>

        <Button 
          onClick={handleSearchAll}
          className="w-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark"
        >
          <Search className="mr-2 h-4 w-4" />
          Search All Manufacturers
        </Button>
      </div>
    </div>
  );
};

export default ManufacturerSearch;
