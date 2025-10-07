"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";
import { BsCartPlus, BsSearch } from "react-icons/bs";

// --- 1. Define ProductItem type with optional translated fields ---
interface ProductItem {
  id: number;
  // --- Default (English) fields ---
  name: string;
  description: string;
  alt: string;
  // --- Optional Khmer translated fields ---
  name_km?: string;
  description_km?: string;
  alt_km?: string;
  // --- Other fields ---
  price: string;
  imageThumbnail: string; // Use 'imageThumbnail' for grid items
  link: string;
  category?: string; // Optional category
}

// --- 2. Matcha Set Products Data - Include translations directly ---
const matchaSets: ProductItem[] = [
  {
    id: 1,
    name: "KBACH KHMER Ceramic Bowl",
    name_km: "ឈុតចានម៉ាតស៊ីខេមរកែន", // Khmer translation
    description: "A timeless matcha bowl set crafted from high-quality ceramic.",
    description_km: "ឈុតម៉ាតស៊ីដែលបានបង្កើតដោយដៃដែលមានគុណភាពខ្ពស់។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1361.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Classic Ceramic Matcha Bowl Set Thumbnail", // Default alt text
    alt_km: "ឈុតចានម៉ាតស៊ីបុរាណ", // Khmer alt text
    link: "/shop/classic-matcha-bowl", // Example link
    category: "ceramic"
  },
  {
    id: 2,
    name: "Whisk Holder",
    name_km: "កន្លែងដាក់ប៊ីត", // Khmer translation
    description: "An elegant combination of natural bamboo tools and a stone bowl.",
    description_km: "ការរួមបញ្ចូលគ្នានៃឧបករណ៍ប៊ីតធម្មជាតិ និងចានថ្ម។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1362.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Bamboo and Stone Matcha Ritual Set Thumbnail", // Default alt text
    alt_km: "សំណុំពិធីប៊ីត និងចាន", // Khmer alt text
    link: "/shop/modern-zen-matcha-bowl", // Example link
    category: "bamboo"
  },
  {
    id: 3,
    name: "Modern Minimalist Set",
    name_km: "សំណុំម៉ូឌើនមីនីម៉ាល", // Khmer translation
    description: "A sleek, contemporary take on the traditional matcha experience.",
    description_km: "ការបកប្រែទំនើបនៃបទពិសោធន៍ម៉ាតស៊ីបុរាណ។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1360.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Modern Minimalist Matcha Set Thumbnail", // Default alt text
    alt_km: "សំណុំម៉ូឌើនមីនីម៉ាលម៉ាតស៊ី", // Khmer alt text
    link: "/shop/premium-ceremonial-set", // Example link
    category: "modern"
  },
  {
    id: 4,
    name: "Premium Handcrafted Bowl",
    name_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ", // Khmer translation
    description: "A unique, individually crafted bowl by a master artisan.",
    description_km: "ចានដែលមានរចនាប័ទ្មពិសេសដោយសិល្បៈករ។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1363.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Premium Handcrafted Matcha Bowl Thumbnail", // Default alt text
    alt_km: "ចានប៊ីតដែលបានបង្កើតដោយដៃ", // Khmer alt text
    link: "/shop/travel-matcha-kit", // Example link
    category: "premium"
  },
  {
    id: 5,
    name: "Travel-Friendly Matcha Kit",
    name_km: "កញ្ចប់ដែលអាចយកទៅដំណើរ", // Khmer translation
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបានសម្រាប់ការរីករាយជាមួយនឹងម៉ាតស៊ី។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1364.PNG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Travel-Friendly Matcha Kit Thumbnail", // Default alt text
    alt_km: "កញ្ចប់ដែលអាចយកទៅដំណើរ", // Khmer alt text
    link: "/shop/travel-matcha-kit-2", // Example link
    category: "travel"
  },
  {
    id: 6,
    name: "Yet Another Kit",
    name_km: "កញ្ចប់ម៉ាតស៊ីផ្សេងទៀត", // Khmer translation
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    description_km: "សំណុំដែលអាចយកទៅដំណើរបានសម្រាប់ការរីករាយជាមួយនឹងម៉ាតស៊ី។", // Khmer translation
    price: "$29.99",
    imageThumbnail: "/IMG_1365.JPG", // --- YOUR THUMBNAIL IMAGE PATH ---
    alt: "Yet Another Kit Thumbnail", // Default alt text
    alt_km: "កញ្ចប់ម៉ាតស៊ីផ្សេងទៀត", // Khmer alt text
    link: "/shop/travel-matcha-kit-3", // Example link
    category: "travel"
  },
];

const ShopPage = () => {
  // ✅ ALL HOOKS ARE NOW AT THE TOP LEVEL
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const t = translations[language] || translations['en']; // Fallback to 'en'

  // --- Get Unique Categories for Filter Buttons ---
  const categories = useMemo(() => {
    const cats = matchaSets
      .map(product => product.category)
      .filter((cat, index, arr) => cat && arr.indexOf(cat) === index) as string[];
    return cats;
  }, []);

  // --- Filter Products Based on Search and Category ---
  const filteredProducts = useMemo(() => {
    return matchaSets.filter(product => {
      const productName = language === 'km' && product.name_km ? product.name_km : product.name;
      const productDescription = language === 'km' && product.description_km ? product.description_km : product.description;

      const matchesSearch = productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            productDescription.toLowerCase().includes(searchTerm.toLowerCase());
                            
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, language]); // Added `language` to dependency array

  // ✅ DEFENSIVE CHECKS ARE NOW *AFTER* ALL HOOKS
  if (!t) {
    console.error(`[ShopPage] Translations object not found for language '${language}' or fallback 'en'.`);
    return <div className="text-red-500 p-4">Error loading translations.</div>;
  }

  if (!t.ShopPage) {
    console.error(`[ShopPage] ShopPage translations not found for language '${language}'. Check translations.ts structure.`);
    return <div className="text-red-500 p-4">Error loading section translations.</div>;
  }

  // --- Handle Category Filter Click ---
  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-12 lg:px-20 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center mb-12">
          <h1 className="my-4 font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
            {t.ShopPage.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-kantumruy)]">
            {t.ShopPage.subtitle || "Discover our handcrafted selection of matcha bowls, sets, and accessories."}
          </p>
          <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
        </div>

        {/* --- Search and Filter Section --- */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t.ShopPage.searchPlaceholder || "Search products..."}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#386c00] focus:border-[#386c00] dark:bg-gray-800 dark:text-white font-[family-name:var(--font-kantumruy)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-[family-name:var(--font-kantumruy)] ${
                selectedCategory === null
                  ? "bg-[#386c00] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {t.ShopPage.allCategories || "All"}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize font-[family-name:var(--font-kantumruy)] ${
                  selectedCategory === category
                    ? "bg-[#386c00] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* --- Product Grid --- */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 font-[family-name:var(--font-kantumruy)]">
              {t.ShopPage.noProductsMessage || "No products found. Try a different search or filter."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const productName = language === 'km' && product.name_km ? product.name_km : product.name;
              const productDescription = language === 'km' && product.description_km ? product.description_km : product.description;
              const productAlt = language === 'km' && product.alt_km ? product.alt_km : product.alt;

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-64 w-full">
                    <Link href={product.link} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src={product.imageThumbnail}
                          alt={productAlt}
                          fill
                          className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
                        {productName}
                      </h2>
                      <p className="text-xl font-semibold text-[#386c00] dark:text-yellow-400 mb-3 font-[family-name:var(--font-kantumruy)]">
                        {product.price}
                      </p>
                      <p className="text-base leading-6 mb-4 text-gray-700 dark:text-gray-300 font-[family-name:var(--font-kantumruy)]">
                        {productDescription}
                      </p>
                    </div>
                    <Link href={product.link} passHref legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]"
                      >
                        <BsCartPlus size={18} className="mr-2" />
                        {t.ShopPage.buttonText || "Shop Now"}
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default ShopPage;