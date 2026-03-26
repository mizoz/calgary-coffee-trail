'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export default function StarRating({ rating, maxRating = 5, size = 'md', showValue = false }: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    const filled = i <= Math.floor(rating);
    const partial = i === Math.ceil(rating) && rating % 1 !== 0;
    const percentage = partial ? (rating % 1) * 100 : 0;

    stars.push(
      <span key={i} className="relative">
        <Star 
          className={`${sizeClasses[size]} text-coffee-300 dark:text-yyc-mountain`}
        />
        {(filled || partial) && (
          <Star 
            className={`${sizeClasses[size]} absolute inset-0 text-yyc-sunrise fill-yyc-sunrise`}
            style={partial ? { clipPath: `inset(0 ${100 - percentage}% 0 0)` } : undefined}
          />
        )}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">{stars}</div>
      {showValue && (
        <span className="text-sm font-medium text-coffee-700 dark:text-coffee-200 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}