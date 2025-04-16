
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { toast } from "@/hooks/use-toast";
import { manufacturerSites, type ManufacturerPrice } from '@/data/manufacturerSites';
import CategoryFilter from './manufacturer/CategoryFilter';
import SearchForm from './manufacturer/SearchForm';
import SearchResultsTable from './manufacturer/SearchResultsTable';

const ManufacturerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchResults, setSearchResults] = useState<ManufacturerPrice[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const categories = Array.from(new Set(manufacturerSites.map(site => site.category)));

  const simulateSearch = async (site: ManufacturerPrice): Promise<ManufacturerPrice> => {
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
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <SearchForm 
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
        isSearching={isSearching}
      />
      {searchResults.length > 0 && (
        <SearchResultsTable results={searchResults} searchTerm={searchTerm} />
      )}
    </Card>
  );
};

export default ManufacturerSearch;
