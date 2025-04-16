
export interface ProductSearchResult {
  websiteName: string;
  productTitle: string;
  imageUrl: string;
  prices: {
    price: number;
    condition?: string;
  }[];
  productUrl: string;
}
