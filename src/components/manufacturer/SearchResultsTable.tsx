import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ManufacturerPrice } from '@/data/manufacturerSites';
import { Store, Factory, Link, ArrowUpWideNarrow, ArrowDownWideNarrow } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SearchResultsTableProps {
  results: (ManufacturerPrice & { searchResults?: any })[];
  searchTerm: string;
}

const SearchResultsTable = ({ results, searchTerm }: SearchResultsTableProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedResults = [...results].sort((a, b) => {
    const priceA = a.searchResults?.prices[0]?.price || 0;
    const priceB = b.searchResults?.prices[0]?.price || 0;
    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

  return (
    <div className="mt-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex gap-6 text-sm text-gray-600 justify-center md:justify-start">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
            <Factory className="h-4 w-4 text-dealfindr-blue" />
            <span>Direct Manufacturer</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
            <Store className="h-4 w-4 text-gray-600" />
            <span>Retail Brand</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <Select
            value={sortOrder}
            onValueChange={(value: 'asc' | 'desc') => setSortOrder(value)}
          >
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">
                <div className="flex items-center gap-2">
                  <ArrowUpWideNarrow className="h-4 w-4" />
                  Price: Low to High
                </div>
              </SelectItem>
              <SelectItem value="desc">
                <div className="flex items-center gap-2">
                  <ArrowDownWideNarrow className="h-4 w-4" />
                  Price: High to Low
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sortedResults.map((result) => (
          <Card 
            key={result.name} 
            className="p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-3">
                {result.searchResults?.imageUrl && (
                  <img 
                    src={result.searchResults.imageUrl} 
                    alt={result.searchResults.productTitle}
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {result.type === 'manufacturer' ? (
                      <Factory className="h-4 w-4 shrink-0 text-dealfindr-blue" />
                    ) : (
                      <Store className="h-4 w-4 shrink-0 text-gray-600" />
                    )}
                    <h3 className="font-medium truncate">{result.name}</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4 flex-grow">
                {result.searchResults?.prices.map((price: any, index: number) => (
                  <div 
                    key={index} 
                    className="text-sm flex justify-between bg-gray-50 p-2 rounded"
                  >
                    <span className="text-gray-600">
                      {price.condition || 'New'}
                    </span>
                    <span className="font-medium">
                      ${price.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2 border-t">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  result.type === 'manufacturer' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {result.type === 'manufacturer' ? 'Manufacturer' : 'Retail'}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(result.searchResults?.productUrl || result.url, '_blank')}
                  className="gap-1 hover:bg-gray-100"
                >
                  <Link className="h-4 w-4" />
                  Visit Site
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsTable;
