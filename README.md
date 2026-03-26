# YYC Coffee Trail

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Discover Calgary's vibrant coffee scene, one cup at a time. 🫘

![YYC Coffee Trail Screenshot](./public/screenshot-placeholder.png)

## ✨ Features

- 🗺️ **Interactive Map** - Explore coffee shops across Calgary with an interactive Leaflet map
- 🔍 **Search & Filter** - Find cafes by name, neighborhood, or features (patio, wifi, parking)
- ⭐ **Ratings & Reviews** - See ratings and review counts for each shop
- 📱 **Mobile Responsive** - Beautiful experience on any device
- 🌙 **Dark Mode** - Easy on the eyes with automatic theme detection
- 📍 **Real Data** - Pre-populated with 25+ real Calgary coffee shops
- ➕ **Add Shops** - Submit new coffee shops to grow the community

## 🏃 Quick Start

```bash
# Clone the repository
git clone https://github.com/mizoz/yyc-coffee-trail.git
cd yyc-coffee-trail

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

The app is configured for static export (`output: 'export'`). The built files will be in the `out/` directory.

## 📁 Project Structure

```
yyc-coffee-trail/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page with map
│   │   ├── layout.tsx       # Root layout
│   │   ├── shops/
│   │   │   ├── page.tsx     # All shops list
│   │   │   └── [id]/
│   │   │       └── page.tsx # Individual shop detail
│   │   └── add/
│   │       └── page.tsx     # Add shop form
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FilterBar.tsx
│   │   ├── CoffeeShopCard.tsx
│   │   ├── CoffeeShopMap.tsx
│   │   ├── LeafletMap.tsx
│   │   └── StarRating.tsx
│   ├── context/             # React contexts
│   │   ├── ThemeContext.tsx
│   │   └── FilterContext.tsx
│   ├── data/
│   │   └── coffee-shops.ts  # Coffee shop data
│   └── types/
│       └── index.ts         # TypeScript types
├── public/                  # Static assets
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🎨 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Maps:** [Leaflet](https://leafletjs.com/) + [React-Leaflet](https://react-leaflet.js.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Inter](https://fonts.google.com/specimen/Inter)

## ☕ Featured Coffee Shops

The app comes pre-populated with 25+ real Calgary coffee shops including:

- **Monogram Coffee** - Downtown specialty roaster
- **Rosso Coffee Roasters** - Kensington with river views
- **Phil & Sebastian** - Pioneering Calgary roasters
- **Heritage Coffee Roasters** - Old-world charm in Mission
- **Regal Cat Coffee** - Cat-themed Beltline spot
- **Bumpy's Cafe** - Calgary institution since 1989
- **Higher Ground Cafe** - Cozy Kensington favorite
- **Vice Coffee** - Modern East Village bar
- And many more...

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Calgary's amazing coffee community
- All the local roasters and cafe owners making YYC's coffee scene special
- [OpenStreetMap](https://www.openstreetmap.org/) and [CARTO](https://carto.com/) for map tiles

---

Made with ☕ and ❤️ in Calgary, Alberta | YYC