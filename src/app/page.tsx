'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import CoffeeShopMap from '@/components/CoffeeShopMap';
import CoffeeShopCard from '@/components/CoffeeShopCard';
import { useFilters } from '@/context/FilterContext';
import { CoffeeShop } from '@/types';
import { Coffee, MapPin, Star, ChevronDown } from 'lucide-react';

export default function Home() {
  const { filteredShops } = useFilters();
  const [selectedShop, setSelectedShop] = useState<CoffeeShop | null>(null);
  const [showList, setShowList] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-coffee-100 via-coffee-50 to-yyc-sunrise/20 dark:from-yyc-sky dark:via-yyc-mountain dark:to-yyc-sky">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" className="text-coffee-400" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Calgary Skyline Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 dark:opacity-30">
          <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full h-full text-coffee-400 dark:text-yyc-mountain" preserveAspectRatio="none">
            <path d="M0,120 L0,80 L60,80 L60,60 L80,60 L80,40 L100,40 L100,60 L120,60 L120,70 L160,70 L160,50 L180,50 L180,70 L220,70 L220,30 L240,30 L240,70 L280,70 L280,50 L300,50 L300,70 L340,70 L340,40 L360,40 L360,70 L400,70 L400,50 L420,50 L420,70 L460,70 L460,30 L480,30 L480,70 L520,70 L520,50 L540,50 L540,70 L580,70 L580,40 L600,40 L600,70 L640,70 L640,50 L660,50 L660,70 L700,70 L700,30 L720,30 L720,70 L760,70 L760,50 L780,50 L780,70 L820,70 L820,40 L840,40 L840,70 L880,70 L880,50 L900,50 L900,70 L940,70 L940,30 L960,30 L960,70 L1000,70 L1000,50 L1020,50 L1020,70 L1060,70 L1060,40 L1080,40 L1080,70 L1120,70 L1120,50 L1140,50 L1140,70 L1180,70 L1180,30 L1200,30 L1200,70 L1240,70 L1240,50 L1260,50 L1260,70 L1300,70 L1300,40 L1320,40 L1320,70 L1360,70 L1360,50 L1380,50 L1380,70 L1440,70 L1440,120 Z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            {/* Animated Coffee Cup */}
            <div className="relative inline-block mb-6">
              <div className="animate-float">
                <Coffee className="w-20 h-20 text-coffee-600 dark:text-coffee-400 mx-auto" />
              </div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 space-y-1">
                <div className="animate-steam w-1 h-4 bg-coffee-400/40 rounded-full" style={{ animationDelay: '0s' }} />
                <div className="animate-steam w-1 h-4 bg-coffee-400/40 rounded-full ml-2" style={{ animationDelay: '0.3s' }} />
                <div className="animate-steam w-1 h-4 bg-coffee-400/40 rounded-full -ml-4" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-coffee-800 dark:text-coffee-100 mb-4">
              Discover YYC&apos;s
              <span className="block text-yyc-sunrise dark:text-yyc-sunrise">Coffee Scene</span>
            </h1>
            <p className="text-lg md:text-xl text-coffee-600 dark:text-coffee-300 max-w-2xl mx-auto mb-8">
              From Kensington to Inglewood, explore Calgary&apos;s best coffee shops, track your favorites, 
              and find your new go-to cafe.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-coffee-700 dark:text-coffee-200">{filteredShops.length}+</div>
                <div className="text-sm text-coffee-500 dark:text-coffee-400">Coffee Shops</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coffee-700 dark:text-coffee-200">15</div>
                <div className="text-sm text-coffee-500 dark:text-coffee-400">Neighborhoods</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 text-yyc-sunrise fill-yyc-sunrise" />
                  <span className="text-3xl font-bold text-coffee-700 dark:text-coffee-200">4.5</span>
                </div>
                <div className="text-sm text-coffee-500 dark:text-coffee-400">Avg Rating</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#explore" 
                className="px-8 py-3 bg-coffee-600 dark:bg-coffee-500 text-white rounded-full font-medium hover:bg-coffee-700 dark:hover:bg-coffee-400 transition-colors shadow-lg shadow-coffee-600/20"
              >
                Start Exploring
              </a>
              <a 
                href="/add" 
                className="px-8 py-3 bg-white dark:bg-yyc-mountain text-coffee-700 dark:text-coffee-100 rounded-full font-medium hover:bg-coffee-50 dark:hover:bg-yyc-mountain/80 transition-colors border border-coffee-200 dark:border-yyc-mountain"
              >
                Add a Shop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="explore" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar />

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-coffee-600 dark:text-coffee-300">
            Found <span className="font-semibold text-coffee-800 dark:text-coffee-100">{filteredShops.length}</span> coffee shops
          </p>
          
          {/* Toggle between map and list on mobile */}
          <button
            onClick={() => setShowList(!showList)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-coffee-100 dark:bg-yyc-mountain/30 rounded-lg text-coffee-600 dark:text-coffee-300"
          >
            <MapPin className="w-4 h-4" />
            {showList ? 'Show Map' : 'Show List'}
          </button>
        </div>

        {/* Map and List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map */}
          <div className={`${showList ? 'hidden md:block' : ''} h-[500px] md:h-[600px] lg:sticky lg:top-24 rounded-2xl overflow-hidden shadow-lg`}>
            <CoffeeShopMap 
              shops={filteredShops} 
              selectedShop={selectedShop}
              onShopClick={setSelectedShop}
            />
          </div>

          {/* List */}
          <div className={`${!showList ? 'hidden md:block' : ''} space-y-4`}>
            {filteredShops.length === 0 ? (
              <div className="text-center py-12">
                <Coffee className="w-16 h-16 text-coffee-300 dark:text-yyc-mountain mx-auto mb-4" />
                <h3 className="text-lg font-medium text-coffee-700 dark:text-coffee-200 mb-2">
                  No coffee shops found
                </h3>
                <p className="text-coffee-500 dark:text-coffee-400">
                  Try adjusting your filters to discover more cafes.
                </p>
              </div>
            ) : (
              filteredShops.map(shop => (
                <CoffeeShopCard key={shop.id} shop={shop} />
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}