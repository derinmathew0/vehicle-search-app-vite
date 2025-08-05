export type Vehicle = {
  id: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  color: string;
  mileage: number; // miles
  price: number; // USD
  image: string; // relative path to public images
  zip: string; // 5-digit US ZIP
};

export type SortKey = 'price-asc' | 'price-desc' | 'year-desc' | 'year-asc';