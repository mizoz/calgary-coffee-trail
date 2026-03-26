'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import { FilterState, CoffeeShop, NEIGHBORHOODS } from '@/types';
import { coffeeShops, isOpenNow } from '@/data/coffee-shops';

interface FilterContextType {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  filteredShops: CoffeeShop[];
  neighborhoods: readonly string[];
}

const defaultFilters: FilterState = {
  search: '',
  openNow: false,
  hasPatio: false,
  hasWifi: false,
  neighborhood: null,
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filteredShops = useMemo(() => {
    return coffeeShops.filter(shop => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          shop.name.toLowerCase().includes(searchLower) ||
          shop.neighborhood.toLowerCase().includes(searchLower) ||
          shop.address.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Open now filter
      if (filters.openNow && !isOpenNow(shop)) {
        return false;
      }

      // Patio filter
      if (filters.hasPatio && !shop.features.patio) {
        return false;
      }

      // WiFi filter
      if (filters.hasWifi && !shop.features.wifi) {
        return false;
      }

      // Neighborhood filter
      if (filters.neighborhood && shop.neighborhood !== filters.neighborhood) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <FilterContext.Provider value={{ filters, setFilters, filteredShops, neighborhoods: NEIGHBORHOODS }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}