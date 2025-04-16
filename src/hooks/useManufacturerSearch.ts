
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { manufacturerSites, type ManufacturerPrice } from '@/data/manufacturerSites';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import type { ProductSearchResult } from '@/types/search';

export const useManufacturerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchResults, setSearchResults] = useState<ManufacturerPrice[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { user } = useAuth();

  const simulateSearch = async (site: ManufacturerPrice): Promise<ManufacturerPrice & { searchResults?: ProductSearchResult }> => {
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    
    const randomPrice = Math.floor(Math.random() * 1000) + 10;
    const available = Math.random() > 0.3;
    
    // Simulate finding 1-3 prices for the product
    const numPrices = Math.floor(Math.random() * 3) + 1;
    const prices = Array.from({ length: numPrices }, () => ({
      price: Math.floor(Math.random() * 1000) + 10,
      condition: Math.random() > 0.5 ? 'New' : 'Used'
    }));

    return {
      ...site,
      price: randomPrice,
      currency: 'USD',
      available,
      searchResults: {
        websiteName: site.name,
        productTitle: `${searchTerm} - ${site.name}`,
        imageUrl: `https://source.unsplash.com/random/100x100/?${encodeURIComponent(searchTerm)}`,
        prices,
        productUrl: `${site.url}?q=${encodeURIComponent(searchTerm)}`
      }
    };
  };

  const logSearch = async () => {
    if (!user) return;
    
    try {
      // Use the any type to override TypeScript's strict checking for now
      // since the types.ts file doesn't know about our new search_logs table
      await supabase
        .from('search_logs' as any)
        .insert({
          user_id: user.id,
          search_term: searchTerm,
          category: selectedCategory
        } as any);
    } catch (error) {
      console.error('Failed to log search:', error);
    }
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
      
      if (user) {
        await logSearch();
      }
      
      toast({
        title: "Search completed",
        description: `Found prices from ${results.length} sources`,
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

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    searchResults,
    isSearching,
    handleSearch
  };
};
