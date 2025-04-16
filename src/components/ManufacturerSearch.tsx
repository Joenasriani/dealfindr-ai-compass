
import React from 'react';
import { Card } from '@/components/ui/card';
import { manufacturerSites } from '@/data/manufacturerSites';
import CategoryFilter from './manufacturer/CategoryFilter';
import SearchForm from './manufacturer/SearchForm';
import SearchResultsTable from './manufacturer/SearchResultsTable';
import { useManufacturerSearch } from '@/hooks/useManufacturerSearch';

const ManufacturerSearch = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    searchResults,
    isSearching,
    handleSearch
  } = useManufacturerSearch();

  const categories = Array.from(new Set(manufacturerSites.map(site => site.category)));

  return (
    <Card className="bg-white p-6 rounded-xl shadow-sm border space-y-3">
      <h3 className="text-xl font-semibold mb-2">Find Direct Manufacturers</h3>
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
