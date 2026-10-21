'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NEIGHBORHOODS } from '@/types';
import { 
  ArrowLeft, Coffee, MapPin, Clock, Star, Wifi, Sun, Car, 
  Leaf, Cookie, Instagram, Globe, Phone, CheckCircle, AlertCircle 
} from 'lucide-react';

interface FormData {
  name: string;
  address: string;
  neighborhood: string;
  description: string;
  lat: string;
  lng: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  patio: boolean;
  wifi: boolean;
  parking: boolean;
  veganOptions: boolean;
  pastrySelection: boolean;
  instagram: string;
  website: string;
  phone: string;
}

export default function AddShopPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    neighborhood: '',
    description: '',
    lat: '',
    lng: '',
    hours: {
      monday: '7:00 AM - 6:00 PM',
      tuesday: '7:00 AM - 6:00 PM',
      wednesday: '7:00 AM - 6:00 PM',
      thursday: '7:00 AM - 6:00 PM',
      friday: '7:00 AM - 6:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 5:00 PM',
    },
    patio: false,
    wifi: true,
    parking: false,
    veganOptions: false,
    pastrySelection: true,
    instagram: '',
    website: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Shop name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.neighborhood) newErrors.neighborhood = 'Please select a neighborhood';
    if (!formData.description.trim()) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real app, this would send data to an API
      setSubmitted(true);
    }
  };

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const updateHours = (day: keyof FormData['hours'], value: string) => {
    setFormData(prev => ({
      ...prev,
      hours: { ...prev.hours, [day]: value },
    }));
  };

  const updateFeature = (feature: 'patio' | 'wifi' | 'parking' | 'veganOptions' | 'pastrySelection') => {
    setFormData(prev => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-white dark:bg-yyc-sky/30 rounded-2xl p-12 shadow-lg">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="font-display text-3xl font-bold text-coffee-800 dark:text-coffee-100 mb-4">
              Thanks!
            </h1>
            <p className="text-lg text-coffee-600 dark:text-coffee-300 mb-8">
              Thanks for suggesting <strong>{formData.name}</strong>. This is a demo form,
              so nothing was sent or saved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-coffee-600 dark:bg-coffee-500 text-white rounded-full font-medium hover:bg-coffee-700 dark:hover:bg-coffee-400 transition-colors"
              >
                Back to Map
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-white dark:bg-yyc-mountain/30 text-coffee-700 dark:text-coffee-200 rounded-full font-medium border border-coffee-200 dark:border-yyc-mountain hover:bg-coffee-50 dark:hover:bg-yyc-mountain/50 transition-colors"
              >
                Add Another Shop
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-coffee-100 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Map
        </Link>

        <div className="bg-white dark:bg-yyc-sky/30 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="text-center mb-8">
            <Coffee className="w-12 h-12 text-coffee-600 dark:text-coffee-400 mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-coffee-800 dark:text-coffee-100 mb-2">
              Add a Coffee Shop
            </h1>
            <p className="text-coffee-600 dark:text-coffee-300">
              Know a great cafe that&apos;s not on the map? Help fellow Calgarians discover it!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <section className="space-y-4">
              <h2 className="font-display text-lg font-semibold text-coffee-700 dark:text-coffee-200 flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Basic Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                  Shop Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="e.g., Monogram Coffee"
                  className={`w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400 ${
                    errors.name ? 'border-red-400' : 'border-coffee-200 dark:border-yyc-mountain'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    placeholder="e.g., 102 8 Ave SW"
                    className={`w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400 ${
                      errors.address ? 'border-red-400' : 'border-coffee-200 dark:border-yyc-mountain'
                    }`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                    Neighborhood *
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => updateField('neighborhood', e.target.value)}
                    className={`w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 appearance-none cursor-pointer ${
                      errors.neighborhood ? 'border-red-400' : 'border-coffee-200 dark:border-yyc-mountain'
                    }`}
                  >
                    <option value="">Select neighborhood</option>
                    {NEIGHBORHOODS.map(hood => (
                      <option key={hood} value={hood}>{hood}</option>
                    ))}
                  </select>
                  {errors.neighborhood && (
                    <p className="mt-1 text-sm text-red-500">{errors.neighborhood}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="Tell us about this coffee shop..."
                  rows={3}
                  className={`w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400 resize-none ${
                    errors.description ? 'border-red-400' : 'border-coffee-200 dark:border-yyc-mountain'
                  }`}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
              </div>

              {/* Coordinates helper */}
              <div className="bg-coffee-50 dark:bg-yyc-mountain/20 rounded-xl p-4 text-sm text-coffee-600 dark:text-coffee-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Tip: You can find coordinates by right-clicking on Google Maps and selecting coordinates.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                    Latitude (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.lat}
                    onChange={(e) => updateField('lat', e.target.value)}
                    placeholder="e.g., 51.0454"
                    className="w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                    Longitude (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.lng}
                    onChange={(e) => updateField('lng', e.target.value)}
                    placeholder="e.g., -114.0709"
                    className="w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400"
                  />
                </div>
              </div>
            </section>

            {/* Hours */}
            <section className="space-y-4">
              <h2 className="font-display text-lg font-semibold text-coffee-700 dark:text-coffee-200 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Opening Hours
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(formData.hours) as Array<keyof FormData['hours']>).map(day => (
                  <div key={day}>
                    <label className="block text-sm text-coffee-600 dark:text-coffee-300 capitalize mb-1">
                      {day}
                    </label>
                    <input
                      type="text"
                      value={formData.hours[day]}
                      onChange={(e) => updateHours(day, e.target.value)}
                      placeholder="e.g., 7:00 AM - 6:00 PM"
                      className="w-full px-3 py-2 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-lg focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 text-sm"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="space-y-4">
              <h2 className="font-display text-lg font-semibold text-coffee-700 dark:text-coffee-200">
                Features
              </h2>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => updateFeature('patio')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.patio
                      ? 'bg-coffee-600 text-white'
                      : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  Patio
                </button>

                <button
                  type="button"
                  onClick={() => updateFeature('wifi')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.wifi
                      ? 'bg-coffee-600 text-white'
                      : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300'
                  }`}
                >
                  <Wifi className="w-4 h-4" />
                  WiFi
                </button>

                <button
                  type="button"
                  onClick={() => updateFeature('parking')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.parking
                      ? 'bg-coffee-600 text-white'
                      : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300'
                  }`}
                >
                  <Car className="w-4 h-4" />
                  Parking
                </button>

                <button
                  type="button"
                  onClick={() => updateFeature('veganOptions')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.veganOptions
                      ? 'bg-coffee-600 text-white'
                      : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300'
                  }`}
                >
                  <Leaf className="w-4 h-4" />
                  Vegan Options
                </button>

                <button
                  type="button"
                  onClick={() => updateFeature('pastrySelection')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.pastrySelection
                      ? 'bg-coffee-600 text-white'
                      : 'bg-coffee-100 dark:bg-yyc-mountain/30 text-coffee-600 dark:text-coffee-300'
                  }`}
                >
                  <Cookie className="w-4 h-4" />
                  Pastries
                </button>
              </div>
            </section>

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="font-display text-lg font-semibold text-coffee-700 dark:text-coffee-200">
                Contact & Social
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                    <Instagram className="w-4 h-4 inline mr-1" />
                    Instagram
                  </label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => updateField('instagram', e.target.value)}
                    placeholder="@username"
                    className="w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Website
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-coffee-700 dark:text-coffee-200 mb-1">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="(403) 555-0123"
                  className="w-full px-4 py-3 bg-coffee-50 dark:bg-yyc-mountain/30 border border-coffee-200 dark:border-yyc-mountain rounded-xl focus:ring-2 focus:ring-coffee-400 dark:focus:ring-coffee-300 focus:border-transparent outline-none transition-all text-coffee-800 dark:text-coffee-100 placeholder:text-coffee-400"
                />
              </div>
            </section>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-coffee-600 dark:bg-coffee-500 text-white rounded-xl font-medium hover:bg-coffee-700 dark:hover:bg-coffee-400 transition-colors text-lg"
              >
                Submit Coffee Shop
              </button>
              <p className="text-center text-sm text-coffee-500 dark:text-coffee-400 mt-3">
                Submissions are reviewed before being added to the map.
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}