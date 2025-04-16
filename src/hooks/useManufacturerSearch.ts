
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { manufacturerSites, type ManufacturerPrice } from '@/data/manufacturerSites';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export const useManufacturerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchResults, setSearchResults] = useState<ManufacturerPrice[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { user } = useAuth();

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

  const logSearch = async () => {
    if (!user) return;
    
    try {
      await supabase.from('search_logs').insert({
        user_id: user.id,
        search_term: searchTerm,
        category: selectedCategory
      });
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
      
      // Log the search if user is logged in
      if (user) {
        await logSearch();
      }
      
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
