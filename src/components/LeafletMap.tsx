'use client';

import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoffeeShop } from '@/types';
import Link from 'next/link';

interface LeafletMapProps {
  shops: CoffeeShop[];
  selectedShop?: CoffeeShop | null;
  onShopClick?: (shop: CoffeeShop) => void;
  isDark: boolean;
}

// Custom coffee cup icon
const createIcon = (isSelected: boolean, isDark: boolean) => {
  const color = isSelected 
    ? '#d2844f' // coffee-500
    : isDark 
      ? '#a35534' // coffee-700
      : '#6c3c2a'; // coffee-900
  
  const size = isSelected ? 40 : 32;
  
  return L.divIcon({
    html: `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" fill="${color}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="6" y1="2" x2="6" y2="4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="10" y1="2" x2="10" y2="4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="14" y1="2" x2="14" y2="4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,
    className: 'coffee-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

function MapController({ selectedShop }: { selectedShop?: CoffeeShop | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedShop) {
      map.flyTo([selectedShop.coordinates.lat, selectedShop.coordinates.lng], 15, {
        duration: 0.5,
      });
    }
  }, [selectedShop, map]);

  return null;
}

export default function LeafletMap({ shops, selectedShop, onShopClick, isDark }: LeafletMapProps) {
  // Calgary center coordinates
  const center: [number, number] = useMemo(() => [51.0447, -114.0719], []);

  const tileUrl = isDark
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
      style={{ background: isDark ? '#1e3a5f' : '#f9ede0' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={tileUrl}
      />
      <MapController selectedShop={selectedShop} />
      {shops.map(shop => {
        const isSelected = selectedShop?.id === shop.id;
        return (
          <Marker
            key={shop.id}
            position={[shop.coordinates.lat, shop.coordinates.lng]}
            icon={createIcon(isSelected, isDark)}
            eventHandlers={{
              click: () => onShopClick?.(shop),
            }}
          >
            <Popup className="coffee-popup">
              <div className="p-2 min-w-[200px]">
                <h3 className="font-display font-bold text-coffee-800 text-lg">{shop.name}</h3>
                <p className="text-sm text-coffee-500">{shop.neighborhood}</p>
                <p className="text-sm text-coffee-600 mt-1">{shop.address}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-medium text-coffee-700">{shop.rating} ★</span>
                  <span className="text-xs text-coffee-400">({shop.reviewCount} reviews)</span>
                </div>
                <Link
                  href={`/shops/${shop.id}`}
                  className="block mt-3 text-center py-1.5 bg-coffee-600 text-white text-sm rounded-lg hover:bg-coffee-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}