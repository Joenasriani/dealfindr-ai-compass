export interface ManufacturerPrice {
  name: string;
  url: string;
  category: string;
  type: 'manufacturer' | 'retail';
  price?: number;
  currency?: string;
  available?: boolean;
}

export const manufacturerSites: ManufacturerPrice[] = [
  // Direct Manufacturers
  { name: '1688', url: 'https://s.1688.com/selloffer/offer_search.htm', category: 'B2B Platform', type: 'manufacturer' },
  { name: 'Made in China', url: 'https://www.made-in-china.com/productdirectory.do', category: 'B2B Platform', type: 'manufacturer' },
  { name: 'Global Sources', url: 'https://www.globalsources.com/product-search', category: 'B2B Platform', type: 'manufacturer' },
  { name: 'DHgate', url: 'https://www.dhgate.com/wholesale/search.do', category: 'B2B Platform', type: 'manufacturer' },
  
  // Fashion & Accessories Retail
  { name: 'Nordstrom', url: 'https://www.nordstrom.com/search', category: 'Fashion', type: 'retail' },
  { name: 'Saks Fifth Avenue', url: 'https://www.saksfifthavenue.com/search', category: 'Fashion', type: 'retail' },
  { name: 'Kate Spade', url: 'https://www.katespade.com/search', category: 'Fashion', type: 'retail' },
  { name: 'Coach', url: 'https://www.coach.com/search', category: 'Fashion', type: 'retail' },
  { name: 'Michael Kors', url: 'https://www.michaelkors.com/search', category: 'Fashion', type: 'retail' },
  
  // Home & Furniture
  { name: 'Wayfair', url: 'https://www.wayfair.com/keyword.php', category: 'Home & Furniture', type: 'retail' },
  { name: 'Pottery Barn', url: 'https://www.potterybarn.com/search/results.html', category: 'Home & Furniture', type: 'retail' },
  { name: 'West Elm', url: 'https://www.westelm.com/search/results.html', category: 'Home & Furniture', type: 'retail' },
  { name: 'IKEA', url: 'https://www.ikea.com/us/en/search/', category: 'Home & Furniture', type: 'retail' },
  
  // Electronics
  { name: 'Best Buy', url: 'https://www.bestbuy.com/site/searchpage.jsp', category: 'Electronics', type: 'retail' },
  { name: 'Newegg', url: 'https://www.newegg.com/p/pl', category: 'Electronics', type: 'retail' },
  { name: 'B&H Photo', url: 'https://www.bhphotovideo.com/c/search', category: 'Electronics', type: 'retail' },
  
  // Department Stores
  { name: 'Walmart', url: 'https://www.walmart.com/search', category: 'Department Store', type: 'retail' },
  { name: 'Target', url: 'https://www.target.com/s', category: 'Department Store', type: 'retail' },
  { name: 'Costco', url: 'https://www.costco.com/CatalogSearch', category: 'Department Store', type: 'retail' },
  
  // Keep other existing manufacturers
  { name: 'Yiwugo', url: 'https://en.yiwugo.com/products/search.html', category: 'Industry Specific', type: 'manufacturer' },
  { name: 'Chic Me', url: 'https://www.chicme.com/search', category: 'Fashion', type: 'manufacturer' },
  { name: 'LightInTheBox', url: 'https://www.lightinthebox.com/c/search', category: 'Industry Specific', type: 'manufacturer' },
  { name: 'Banggood', url: 'https://www.banggood.com/search', category: 'Industry Specific', type: 'manufacturer' },
  
  // Electronics & Components
  { name: 'Shenzhen LCSC', url: 'https://www.lcsc.com/search', category: 'Electronics', type: 'manufacturer' },
  { name: 'Chinavasion', url: 'https://www.chinavasion.com/search', category: 'Electronics', type: 'manufacturer' },
  { name: 'DX.com', url: 'https://www.dx.com/s', category: 'Electronics', type: 'manufacturer' },
  { name: 'TomTop', url: 'https://www.tomtop.com/search', category: 'Electronics', type: 'manufacturer' },
  
  // Fashion & Textiles
  { name: 'Zaful', url: 'https://www.zaful.com/search', category: 'Fashion', type: 'manufacturer' },
  { name: 'FashionTIY', url: 'https://www.fashiontiy.com/search', category: 'Fashion', type: 'manufacturer' },
  { name: 'Wholesale7', url: 'https://www.wholesale7.net/search', category: 'Fashion', type: 'manufacturer' },

  // New Manufacturers
  { name: 'Jeerong', url: 'https://jeerong.goldsupplier.com', category: 'Manufacturing', type: 'manufacturer' },
  { name: 'MNA Case', url: 'https://mnacase.com', category: 'Manufacturing', type: 'manufacturer' },
  { name: 'MBBag', url: 'https://mbbag.en.alibaba.com', category: 'Manufacturing', type: 'manufacturer' },
  { name: 'Foxconn', url: 'https://www.foxconn.com/en-us', category: 'Electronics Manufacturing', type: 'manufacturer' },
  { name: 'Pegatron', url: 'https://www.pegatroncorp.com', category: 'Electronics Manufacturing', type: 'manufacturer' },
  { name: 'Wind Power', url: 'https://www.windpowercn.com', category: 'Energy Manufacturing', type: 'manufacturer' },
  { name: 'Shenzhou International', url: 'https://www.shenzhouintl.com', category: 'Textile Manufacturing', type: 'manufacturer' },
  { name: 'TAL Apparel', url: 'https://www.talapparel.com', category: 'Fashion Manufacturing', type: 'manufacturer' },
  { name: 'Oppein Home', url: 'https://www.oppeinhome.com', category: 'Furniture Manufacturing', type: 'manufacturer' },
  { name: 'KUKA Home', url: 'https://en.kukahome.com', category: 'Furniture Manufacturing', type: 'manufacturer' },
  { name: 'Huali', url: 'https://www.zjhuali.com/en', category: 'Manufacturing', type: 'manufacturer' },
  { name: 'YTT Global', url: 'https://yttgcl.goldsupplier.com', category: 'Manufacturing', type: 'manufacturer' }
];
