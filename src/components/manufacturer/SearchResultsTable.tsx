
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ManufacturerPrice } from '@/data/manufacturerSites';
import { Store, Factory, Link } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SearchResultsTableProps {
  results: (ManufacturerPrice & { searchResults?: any })[];
  searchTerm: string;
}

const SearchResultsTable = ({ results, searchTerm }: SearchResultsTableProps) => {
  return (
    <div className="mt-6">
      <div className="mb-4 flex gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Factory className="h-4 w-4" />
          <span>Direct Manufacturer</span>
        </div>
        <div className="flex items-center gap-1">
          <Store className="h-4 w-4" />
          <span>Retail Brand</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result) => (
          <Card key={result.name} className="p-4">
            <div className="flex items-start gap-4">
              {result.searchResults?.imageUrl && (
                <img 
                  src={result.searchResults.imageUrl} 
                  alt={result.searchResults.productTitle}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {result.type === 'manufacturer' ? (
                    <Factory className="h-4 w-4 text-dealfindr-blue" />
                  ) : (
                    <Store className="h-4 w-4 text-gray-600" />
                  )}
                  <h3 className="font-medium">{result.name}</h3>
                </div>
                
                <div className="space-y-1 mb-3">
                  {result.searchResults?.prices.map((price: any, index: number) => (
                    <div key={index} className="text-sm flex justify-between">
                      <span className="text-gray-600">
                        {price.condition || 'New'}
                      </span>
                      <span className="font-medium">
                        ${price.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
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
                    className="gap-1"
                  >
                    <Link className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsTable;
