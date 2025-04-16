
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchFormProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearch: () => void;
  isSearching: boolean;
}

const SearchForm = ({ searchTerm, onSearchTermChange, onSearch, isSearching }: SearchFormProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Input 
          type="text" 
          placeholder="Search for a product..." 
          className="pl-10"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-dealfindr-blue" />
      </div>
      <Button 
        onClick={onSearch}
        disabled={isSearching}
        className="w-full bg-dealfindr-blue hover:bg-dealfindr-blue-dark"
      >
        {isSearching ? "Searching..." : "Search All Manufacturers"}
      </Button>
    </div>
  );
};

export default SearchForm;
