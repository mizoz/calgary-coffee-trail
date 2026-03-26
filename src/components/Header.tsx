'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, MapPin, Coffee } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-yyc-sky/95 backdrop-blur-md border-b border-coffee-200 dark:border-yyc-mountain/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Coffee className="w-8 h-8 text-coffee-600 dark:text-coffee-400 group-hover:scale-110 transition-transform" />
              <MapPin className="w-4 h-4 text-yyc-sunrise absolute -bottom-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-coffee-800 dark:text-coffee-100">
                YYC Coffee Trail
              </span>
              <span className="text-xs text-coffee-500 dark:text-coffee-400 -mt-1">
                Discover Calgary&apos;s Best Cafés
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-coffee-100 transition-colors"
            >
              Map
            </Link>
            <Link 
              href="/shops" 
              className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-coffee-100 transition-colors"
            >
              All Shops
            </Link>
            <Link 
              href="/add" 
              className="px-4 py-2 bg-coffee-600 dark:bg-coffee-500 text-white rounded-full hover:bg-coffee-700 dark:hover:bg-coffee-400 transition-colors text-sm font-medium"
            >
              Add a Shop
            </Link>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-coffee-100 dark:bg-yyc-mountain hover:bg-coffee-200 dark:hover:bg-yyc-mountain/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-yyc-sky dark:text-coffee-300" />
            ) : (
              <Sun className="w-5 h-5 text-yyc-sunrise" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-coffee-200 dark:border-yyc-mountain/50">
        <div className="flex justify-around py-2">
          <Link 
            href="/" 
            className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-coffee-100 text-sm"
          >
            Map
          </Link>
          <Link 
            href="/shops" 
            className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-coffee-100 text-sm"
          >
            All Shops
          </Link>
          <Link 
            href="/add" 
            className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-coffee-100 text-sm"
          >
            Add Shop
          </Link>
        </div>
      </div>
    </header>
  );
}