
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ManufacturerPrice } from '@/data/manufacturerSites';
import { Store, Factory } from 'lucide-react';

interface SearchResultsTableProps {
  results: ManufacturerPrice[];
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Source</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.name} className={result.type === 'retail' ? 'bg-gray-50' : ''}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {result.type === 'manufacturer' ? (
                    <Factory className="h-4 w-4 text-dealfindr-blue" />
                  ) : (
                    <Store className="h-4 w-4 text-gray-600" />
                  )}
                  {result.name}
                </div>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  result.type === 'manufacturer' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {result.type === 'manufacturer' ? 'Manufacturer' : 'Retail'}
                </span>
              </TableCell>
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
  );
};

export default SearchResultsTable;

