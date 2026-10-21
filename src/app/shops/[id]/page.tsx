'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoffeeShopMap from '@/components/CoffeeShopMap';
import StarRating from '@/components/StarRating';
import { getShopById, isOpenNow, coffeeShops } from '@/data/coffee-shops';
import { 
  MapPin, Clock, Star, Wifi, Sun, Car, Leaf, Cookie, 
  ArrowLeft, ExternalLink, Instagram, Globe, Phone,
  Share2, Heart
} from 'lucide-react';
import { useState } from 'react';

const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export default function ShopDetailPage() {
  const params = useParams();
  const shop = getShopById(params.id as string);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!shop) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-display font-bold text-coffee-800 dark:text-coffee-100 mb-4">
            Coffee Shop Not Found
          </h1>
          <p className="text-coffee-600 dark:text-coffee-300 mb-8">
            Sorry, we couldn&apos;t find that coffee shop.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-coffee-600 text-white rounded-full hover:bg-coffee-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const open = isOpenNow(shop);
  const today = new Date();
  const todayName = dayNames[today.getDay()];

  // Get nearby shops (same neighborhood)
  const nearbyShops = coffeeShops
    .filter(s => s.neighborhood === shop.neighborhood && s.id !== shop.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-coffee-100 via-coffee-50 to-yyc-sunrise/20 dark:from-yyc-sky dark:via-yyc-mountain dark:to-yyc-sky">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back button */}
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-coffee-100 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Map
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h1 className="font-display text-3xl md:text-4xl font-bold text-coffee-800 dark:text-coffee-100 mb-2">
                        {shop.name}
                      </h1>
                      <div className="flex items-center gap-3 text-coffee-500 dark:text-coffee-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {shop.neighborhood}
                        </span>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          open 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                        }`}>
                          {open ? 'Open Now' : 'Closed'}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="p-2 rounded-full bg-white dark:bg-yyc-mountain/30 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Heart className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-coffee-400'}`} />
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <StarRating rating={shop.rating} size="lg" />
                    <span className="text-xl font-semibold text-coffee-800 dark:text-coffee-100">
                      {shop.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-coffee-500 dark:text-coffee-400">
                    ({shop.reviewCount} reviews · sample data)
                  </span>
                </div>

                {/* Description */}
                <p className="text-lg text-coffee-600 dark:text-coffee-300 leading-relaxed">
                  {shop.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {shop.features.patio && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-yyc-mountain/30 rounded-full text-coffee-600 dark:text-coffee-300 shadow-sm">
                      <Sun className="w-4 h-4 text-yyc-sunrise" />
                      Patio
                    </span>
                  )}
                  {shop.features.wifi && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-yyc-mountain/30 rounded-full text-coffee-600 dark:text-coffee-300 shadow-sm">
                      <Wifi className="w-4 h-4 text-blue-500" />
                      Free WiFi
                    </span>
                  )}
                  {shop.features.parking && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-yyc-mountain/30 rounded-full text-coffee-600 dark:text-coffee-300 shadow-sm">
                      <Car className="w-4 h-4 text-green-500" />
                      Parking
                    </span>
                  )}
                  {shop.features.veganOptions && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-yyc-mountain/30 rounded-full text-coffee-600 dark:text-coffee-300 shadow-sm">
                      <Leaf className="w-4 h-4 text-green-600" />
                      Vegan Options
                    </span>
                  )}
                  {shop.features.pastrySelection && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-yyc-mountain/30 rounded-full text-coffee-600 dark:text-coffee-300 shadow-sm">
                      <Cookie className="w-4 h-4 text-amber-600" />
                      Pastries
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {shop.website && (
                    <a
                      href={shop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-coffee-600 dark:bg-coffee-500 text-white rounded-full hover:bg-coffee-700 dark:hover:bg-coffee-400 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  )}
                  {shop.instagram && (
                    <a
                      href={`https://instagram.com/${shop.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-yyc-mountain/30 text-coffee-700 dark:text-coffee-200 rounded-full border border-coffee-200 dark:border-yyc-mountain hover:bg-coffee-50 dark:hover:bg-yyc-mountain/50 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      {shop.instagram}
                    </a>
                  )}
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <CoffeeShopMap shops={[shop]} selectedShop={shop} />
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hours & Contact */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hours */}
              <div className="bg-white dark:bg-yyc-sky/30 rounded-2xl p-6 shadow-sm">
                <h2 className="font-display text-xl font-bold text-coffee-800 dark:text-coffee-100 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Opening Hours
                </h2>
                <div className="space-y-2">
                  {dayNames.map(day => (
                    <div 
                      key={day}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                        day === todayName 
                          ? 'bg-coffee-100 dark:bg-yyc-mountain/30' 
                          : ''
                      }`}
                    >
                      <span className={`capitalize ${day === todayName ? 'font-semibold text-coffee-700 dark:text-coffee-200' : 'text-coffee-600 dark:text-coffee-300'}`}>
                        {day}
                        {day === todayName && (
                          <span className="ml-2 text-xs text-coffee-500 dark:text-coffee-400">(Today)</span>
                        )}
                      </span>
                      <span className={day === todayName ? 'font-medium text-coffee-700 dark:text-coffee-200' : 'text-coffee-500 dark:text-coffee-400'}>
                        {shop.hours[day] || 'Closed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address & Contact */}
              <div className="bg-white dark:bg-yyc-sky/30 rounded-2xl p-6 shadow-sm">
                <h2 className="font-display text-xl font-bold text-coffee-800 dark:text-coffee-100 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location & Contact
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-coffee-800 dark:text-coffee-100 font-medium">{shop.address}</p>
                    <p className="text-coffee-500 dark:text-coffee-400">Calgary, Alberta</p>
                  </div>
                  {shop.phone && (
                    <div className="flex items-center gap-2 text-coffee-600 dark:text-coffee-300">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${shop.phone}`} className="hover:text-coffee-800 dark:hover:text-coffee-100">
                        {shop.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Directions link */}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${shop.coordinates.lat},${shop.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-700 dark:text-coffee-200 rounded-lg hover:bg-coffee-200 dark:hover:bg-yyc-mountain/50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Nearby */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-yyc-sky/30 rounded-2xl p-6 shadow-sm">
                <h2 className="font-display text-xl font-bold text-coffee-800 dark:text-coffee-100 mb-4">
                  Nearby in {shop.neighborhood}
                </h2>
                {nearbyShops.length > 0 ? (
                  <div className="space-y-3">
                    {nearbyShops.map(nearby => (
                      <Link
                        key={nearby.id}
                        href={`/shops/${nearby.id}`}
                        className="block p-3 rounded-lg bg-coffee-50 dark:bg-yyc-mountain/20 hover:bg-coffee-100 dark:hover:bg-yyc-mountain/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-coffee-700 dark:text-coffee-200">{nearby.name}</span>
                          <div className="flex items-center gap-1 text-sm text-coffee-500 dark:text-coffee-400">
                            <Star className="w-3 h-3 text-yyc-sunrise fill-yyc-sunrise" />
                            {nearby.rating}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-coffee-500 dark:text-coffee-400">
                    No other shops in this neighborhood yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}