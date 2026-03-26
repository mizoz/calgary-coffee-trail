'use client';

import Link from 'next/link';
import { CoffeeShop } from '@/types';
import { isOpenNow } from '@/data/coffee-shops';
import { MapPin, Clock, Star, Wifi, Sun, Car, Leaf, Cookie } from 'lucide-react';

interface CoffeeShopCardProps {
  shop: CoffeeShop;
  compact?: boolean;
}

export default function CoffeeShopCard({ shop, compact = false }: CoffeeShopCardProps) {
  const open = isOpenNow(shop);
  const today = new Date();
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayName = dayNames[today.getDay()];
  const todayHours = shop.hours[todayName];

  if (compact) {
    return (
      <Link 
        href={`/shops/${shop.id}`}
        className="block p-4 bg-white dark:bg-yyc-sky/30 rounded-xl border border-coffee-200 dark:border-yyc-mountain/50 hover:shadow-lg hover:border-coffee-400 dark:hover:border-coffee-500 transition-all group"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-coffee-800 dark:text-coffee-100 group-hover:text-coffee-600 dark:group-hover:text-coffee-300 transition-colors">
              {shop.name}
            </h3>
            <p className="text-sm text-coffee-500 dark:text-coffee-400 flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" />
              {shop.neighborhood}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 text-yyc-sunrise fill-yyc-sunrise" />
            <span className="text-sm font-medium text-coffee-700 dark:text-coffee-200">{shop.rating}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      href={`/shops/${shop.id}`}
      className="block bg-white dark:bg-yyc-sky/30 rounded-2xl overflow-hidden border border-coffee-200 dark:border-yyc-mountain/50 hover:shadow-xl hover:border-coffee-400 dark:hover:border-coffee-500 transition-all group"
    >
      {/* Rating badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-1 px-3 py-1 bg-white/90 dark:bg-yyc-sky/90 backdrop-blur-sm rounded-full shadow-sm">
          <Star className="w-4 h-4 text-yyc-sunrise fill-yyc-sunrise" />
          <span className="text-sm font-semibold text-coffee-800 dark:text-coffee-100">{shop.rating}</span>
          <span className="text-xs text-coffee-500 dark:text-coffee-400">({shop.reviewCount})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-display text-xl font-bold text-coffee-800 dark:text-coffee-100 group-hover:text-coffee-600 dark:group-hover:text-coffee-300 transition-colors">
            {shop.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              open 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}>
              {open ? 'Open Now' : 'Closed'}
            </span>
            <span className="text-sm text-coffee-500 dark:text-coffee-400">{shop.neighborhood}</span>
          </div>
        </div>

        <p className="text-sm text-coffee-600 dark:text-coffee-300 line-clamp-2 mb-3">
          {shop.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-coffee-500 dark:text-coffee-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>Today: {todayHours}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-coffee-500 dark:text-coffee-400">
          <MapPin className="w-4 h-4" />
          <span>{shop.address}</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-coffee-100 dark:border-yyc-mountain/30">
          {shop.features.patio && (
            <span className="flex items-center gap-1 text-xs text-coffee-500 dark:text-coffee-400 bg-coffee-50 dark:bg-yyc-mountain/30 px-2 py-1 rounded-full">
              <Sun className="w-3 h-3" />
              Patio
            </span>
          )}
          {shop.features.wifi && (
            <span className="flex items-center gap-1 text-xs text-coffee-500 dark:text-coffee-400 bg-coffee-50 dark:bg-yyc-mountain/30 px-2 py-1 rounded-full">
              <Wifi className="w-3 h-3" />
              WiFi
            </span>
          )}
          {shop.features.parking && (
            <span className="flex items-center gap-1 text-xs text-coffee-500 dark:text-coffee-400 bg-coffee-50 dark:bg-yyc-mountain/30 px-2 py-1 rounded-full">
              <Car className="w-3 h-3" />
              Parking
            </span>
          )}
          {shop.features.veganOptions && (
            <span className="flex items-center gap-1 text-xs text-coffee-500 dark:text-coffee-400 bg-coffee-50 dark:bg-yyc-mountain/30 px-2 py-1 rounded-full">
              <Leaf className="w-3 h-3" />
              Vegan
            </span>
          )}
          {shop.features.pastrySelection && (
            <span className="flex items-center gap-1 text-xs text-coffee-500 dark:text-coffee-400 bg-coffee-50 dark:bg-yyc-mountain/30 px-2 py-1 rounded-full">
              <Cookie className="w-3 h-3" />
              Pastries
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}