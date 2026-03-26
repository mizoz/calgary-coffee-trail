'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import CoffeeShopCard from '@/components/CoffeeShopCard';
import { useFilters } from '@/context/FilterContext';
import { Coffee, Grid3X3, List } from 'lucide-react';
import { useState } from 'react';

export default function ShopsPage() {
  const { filteredShops } = useFilters();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-coffee-800 dark:text-coffee-100 mb-2">
            All Coffee Shops
          </h1>
          <p className="text-coffee-600 dark:text-coffee-300">
            Explore Calgary&apos;s complete coffee scene
          </p>
        </div>

        <FilterBar />

        {/* Results and View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-coffee-600 dark:text-coffee-300">
            Showing <span className="font-semibold text-coffee-800 dark:text-coffee-100">{filteredShops.length}</span> coffee shops
          </p>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-coffee-600 text-white' 
                  : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300'
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-coffee-600 text-white' 
                  : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300'
              }`}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Coffee Shops Grid/List */}
        {filteredShops.length === 0 ? (
          <div className="text-center py-16">
            <Coffee className="w-20 h-20 text-coffee-300 dark:text-yyc-mountain mx-auto mb-4" />
            <h3 className="text-xl font-medium text-coffee-700 dark:text-coffee-200 mb-2">
              No coffee shops found
            </h3>
            <p className="text-coffee-500 dark:text-coffee-400 max-w-md mx-auto">
              Try adjusting your filters or search terms to discover more of Calgary&apos;s coffee scene.
            </p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
          }>
            {filteredShops.map(shop => (
              <CoffeeShopCard 
                key={shop.id} 
                shop={shop} 
                compact={viewMode === 'list'}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}