export interface CoffeeShop {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  hours: {
    [key: string]: string;
  };
  rating: number;
  reviewCount: number;
  features: {
    patio: boolean;
    wifi: boolean;
    parking: boolean;
    veganOptions: boolean;
    pastrySelection: boolean;
  };
  instagram?: string;
  website?: string;
  phone?: string;
  imageUrl?: string;
}

export interface FilterState {
  search: string;
  openNow: boolean;
  hasPatio: boolean;
  hasWifi: boolean;
  neighborhood: string | null;
}

export const NEIGHBORHOODS = [
  'Downtown',
  'Kensington',
  'Inglewood',
  'Bridgeland',
  'Mission',
  'Marda Loop',
  'Beltline',
  'Hillhurst',
  'Sunnyside',
  'Eau Claire',
  'East Village',
  'Brentwood',
  'Crowfoot',
  'Britannia',
  'Signal Hill',
] as const;

export type Neighborhood = typeof NEIGHBORHOODS[number];