
export interface ManufacturerPrice {
  name: string;
  url: string;
  category: string;
  price?: number;
  currency?: string;
  available?: boolean;
}

export const manufacturerSites: ManufacturerPrice[] = [
  // Major B2B Platforms
  { name: '1688', url: 'https://s.1688.com/selloffer/offer_search.htm', category: 'B2B Platform' },
  { name: 'Made in China', url: 'https://www.made-in-china.com/productdirectory.do', category: 'B2B Platform' },
  { name: 'Global Sources', url: 'https://www.globalsources.com/product-search', category: 'B2B Platform' },
  { name: 'DHgate', url: 'https://www.dhgate.com/wholesale/search.do', category: 'B2B Platform' },
  
  // Industry-Specific Marketplaces
  { name: 'Yiwugo', url: 'https://en.yiwugo.com/products/search.html', category: 'Industry Specific' },
  { name: 'Chic Me', url: 'https://www.chicme.com/search', category: 'Fashion' },
  { name: 'LightInTheBox', url: 'https://www.lightinthebox.com/c/search', category: 'Industry Specific' },
  { name: 'Banggood', url: 'https://www.banggood.com/search', category: 'Industry Specific' },
  
  // Electronics & Components
  { name: 'Shenzhen LCSC', url: 'https://www.lcsc.com/search', category: 'Electronics' },
  { name: 'Chinavasion', url: 'https://www.chinavasion.com/search', category: 'Electronics' },
  { name: 'DX.com', url: 'https://www.dx.com/s', category: 'Electronics' },
  { name: 'TomTop', url: 'https://www.tomtop.com/search', category: 'Electronics' },
  
  // Fashion & Textiles
  { name: 'Zaful', url: 'https://www.zaful.com/search', category: 'Fashion' },
  { name: 'FashionTIY', url: 'https://www.fashiontiy.com/search', category: 'Fashion' },
  { name: 'Wholesale7', url: 'https://www.wholesale7.net/search', category: 'Fashion' },

  // New Manufacturers
  { name: 'Jeerong', url: 'https://jeerong.goldsupplier.com', category: 'Manufacturing' },
  { name: 'MNA Case', url: 'https://mnacase.com', category: 'Manufacturing' },
  { name: 'MBBag', url: 'https://mbbag.en.alibaba.com', category: 'Manufacturing' },
  { name: 'Foxconn', url: 'https://www.foxconn.com/en-us', category: 'Electronics Manufacturing' },
  { name: 'Pegatron', url: 'https://www.pegatroncorp.com', category: 'Electronics Manufacturing' },
  { name: 'Wind Power', url: 'https://www.windpowercn.com', category: 'Energy Manufacturing' },
  { name: 'Shenzhou International', url: 'https://www.shenzhouintl.com', category: 'Textile Manufacturing' },
  { name: 'TAL Apparel', url: 'https://www.talapparel.com', category: 'Fashion Manufacturing' },
  { name: 'Oppein Home', url: 'https://www.oppeinhome.com', category: 'Furniture Manufacturing' },
  { name: 'KUKA Home', url: 'https://en.kukahome.com', category: 'Furniture Manufacturing' },
  { name: 'Huali', url: 'https://www.zjhuali.com/en', category: 'Manufacturing' },
  { name: 'YTT Global', url: 'https://yttgcl.goldsupplier.com', category: 'Manufacturing' }
];

