'use client';

import { useEffect, useState } from 'react';
import { CoffeeShop } from '@/types';
import { useTheme } from '@/context/ThemeContext';

interface CoffeeShopMapProps {
  shops: CoffeeShop[];
  selectedShop?: CoffeeShop | null;
  onShopClick?: (shop: CoffeeShop) => void;
}

// Dynamic import for Leaflet components
export default function CoffeeShopMap({ shops, selectedShop, onShopClick }: CoffeeShopMapProps) {
  const [MapComponents, setMapComponents] = useState<React.ComponentType<{
    shops: CoffeeShop[];
    selectedShop?: CoffeeShop | null;
    onShopClick?: (shop: CoffeeShop) => void;
    isDark: boolean;
  }> | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    import('./LeafletMap').then(mod => {
      setMapComponents(() => mod.default);
    });
  }, []);

  if (!MapComponents) {
    return (
      <div className="w-full h-full min-h-[400px] bg-coffee-100 dark:bg-yyc-mountain/30 rounded-2xl flex items-center justify-center">
        <div className="text-coffee-500 dark:text-coffee-400">Loading map...</div>
      </div>
    );
  }

  return <MapComponents shops={shops} selectedShop={selectedShop} onShopClick={onShopClick} isDark={theme === 'dark'} />;
}