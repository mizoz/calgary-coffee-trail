import { Coffee, Heart, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-coffee-900 dark:bg-yyc-sky text-coffee-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6 text-coffee-400" />
              <span className="font-display text-lg font-bold text-coffee-100">YYC Coffee Trail</span>
            </div>
            <p className="text-sm text-coffee-400">
              Discover Calgary&apos;s vibrant coffee scene, one cup at a time.
            </p>
            <p className="text-xs text-coffee-500">
              Shop listings are sample data. Hours, ratings and review counts are illustrative, so check with each cafe before visiting.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-coffee-100">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-coffee-400 hover:text-coffee-200 transition-colors">
                Explore Map
              </Link>
              <Link href="/shops" className="text-coffee-400 hover:text-coffee-200 transition-colors">
                All Coffee Shops
              </Link>
              <Link href="/add" className="text-coffee-400 hover:text-coffee-200 transition-colors">
                Add a Shop
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-coffee-100">Community</h3>
            <p className="text-sm text-coffee-400">
              Know a great coffee spot? Add it to the trail and help fellow Calgarians discover their new favorite cafe.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-coffee-500">
            Made with <Heart className="w-4 h-4 inline text-red-500" /> in Calgary, Alberta
          </p>
          <div className="flex items-center gap-4 text-sm text-coffee-500">
            <span>© {new Date().getFullYear()} YYC Coffee Trail</span>
            <a 
              href="https://github.com/mizoz/calgary-coffee-trail"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coffee-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}