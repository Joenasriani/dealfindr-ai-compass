
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ManufacturerPrice } from '@/data/manufacturerSites';

interface SearchResultsTableProps {
  results: ManufacturerPrice[];
  searchTerm: string;
}

const SearchResultsTable = ({ results, searchTerm }: SearchResultsTableProps) => {
  return (
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
          {results.map((result) => (
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
  );
};

export default SearchResultsTable;
