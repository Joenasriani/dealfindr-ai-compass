
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ManufacturerPrice {
  name: string;
  url: string;
  category: string;
  price?: number;
  currency?: string;
  available?: boolean;
}

const manufacturerSites: ManufacturerPrice[] = [
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
  const [searchResults, setSearchResults] = useState<ManufacturerPrice[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const categories = Array.from(new Set(manufacturerSites.map(site => site.category)));

  const simulateSearch = async (site: ManufacturerPrice): Promise<ManufacturerPrice> => {
    // Simulate an API call to get price data
    const randomPrice = Math.floor(Math.random() * 1000) + 10;
    const available = Math.random() > 0.3;
    return {
      ...site,
      price: randomPrice,
      currency: 'USD',
      available
    };
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter a search term",
        description: "Enter a product to search across manufacturers",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    const filteredSites = manufacturerSites.filter(site => 
      selectedCategory === 'all' || site.category === selectedCategory
    );

    try {
      const results = await Promise.all(
        filteredSites.map(site => simulateSearch(site))
      );

      // Sort by price (available items first, then by price)
      const sortedResults = results.sort((a, b) => {
        if (a.available && !b.available) return -1;
        if (!a.available && b.available) return 1;
        return (a.price || 0) - (b.price || 0);
      });

      setSearchResults(sortedResults);
      
      toast({
        title: "Search completed",
        description: `Found prices from ${results.length} manufacturers`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch prices",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <Card className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="text-xl font-semibold mb-4">Find Direct Manufacturers</h3>
      <div className="space-y-4">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search for a product..." 
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

        <Button 
          onClick={handleSearch}
          disabled={isSearching}
          className="w-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark"
        >
          {isSearching ? "Searching..." : "Search All Manufacturers"}
        </Button>

        {searchResults.length > 0 && (
          <div className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Manufacturer</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchResults.map((result) => (
                  <TableRow key={result.name}>
                    <TableCell className="font-medium">{result.name}</TableCell>
                    <TableCell>{result.category}</TableCell>
                    <TableCell>
                      {result.available 
                        ? `$${result.price?.toFixed(2)}` 
                        : '-'
                      }
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        result.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {result.available ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`${result.url}?q=${encodeURIComponent(searchTerm)}`, '_blank')}
                      >
                        Visit Site
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ManufacturerSearch;
