'use client';

import { useFilters } from '@/context/FilterContext';
import { Search, X, Clock, Sun, Wifi, MapPin } from 'lucide-react';

export default function FilterBar() {
  const { filters, setFilters, neighborhoods } = useFilters();

  const toggleFilter = (key: 'openNow' | 'hasPatio' | 'hasWifi') => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      openNow: false,
      hasPatio: false,
      hasWifi: false,
      neighborhood: null,
    });
  };

  const hasActiveFilters = filters.openNow || filters.hasPatio || filters.hasWifi || filters.neighborhood || filters.search;

  return (
    <div className="bg-white dark:bg-yyc-sky/50 rounded-2xl shadow-lg p-4 mb-6">
      {/* Search bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
        <input
          type="text"
          placeholder="Search by name, neighborhood, or address..."
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          className="w-full pl-10 pr-10 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400"
        />
        {filters.search && (
          <button
            onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-coffee-400 hover:text-coffee-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter toggles */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => toggleFilter('openNow')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filters.openNow
              ? 'bg-coffee-600 text-white'
              : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300 hover:bg-coffee-200 dark:hover:bg-yyc-mountain/50'
          }`}
        >
          <Clock className="w-4 h-4" />
          Open Now
        </button>

        <button
          onClick={() => toggleFilter('hasPatio')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filters.hasPatio
              ? 'bg-coffee-600 text-white'
              : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300 hover:bg-coffee-200 dark:hover:bg-yyc-mountain/50'
          }`}
        >
          <Sun className="w-4 h-4" />
          Has Patio
        </button>

        <button
          onClick={() => toggleFilter('hasWifi')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filters.hasWifi
              ? 'bg-coffee-600 text-white'
              : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300 hover:bg-coffee-200 dark:hover:bg-yyc-mountain/50'
          }`}
        >
          <Wifi className="w-4 h-4" />
          WiFi
        </button>
      </div>

      {/* Neighborhood dropdown */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee-400" />
          <select
            value={filters.neighborhood || ''}
            onChange={(e) => setFilters(prev => ({ 
              ...prev, 
              neighborhood: e.target.value || null 
            }))}
            className="w-full pl-9 pr-4 py-2 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-lg appearance-none cursor-pointer focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none text-coffee-800 dark:text-coffee-100"
          >
            <option value="">All Neighborhoods</option>
            {neighborhoods.map(hood => (
              <option key={hood} value={hood}>{hood}</option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 px-3 py-2 text-sm text-coffee-500 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-200 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}