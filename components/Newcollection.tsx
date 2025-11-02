// components/CollectionSection.tsx
"use client"; // Mark this as a client component

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations_collection"; // <-- Updated path
import { BsCartPlus } from "react-icons/bs";

// --- 1. Define ProductItem type ---
interface ProductItem {
  id: number;
  name: string;
  price: string;
  description: string;
  imageLarge: string;    // For the large featured image (1:1 ratio)
  imageThumbnail: string; // For the smaller grid images (1:1 ratio)
  altLarge: string;      // Alt text for the large image
  altThumbnail: string;  // Alt text for the thumbnail image
  link: string;
  category?: string;
}

// --- 2. Matcha Set Products Data - Include translations directly ---
const matchaSets: ProductItem[] = [
  {
    id: 1,
    name: "KBACH KHMER Ceramic Bowl",
    price: "$24.99",
    description: "A timeless matcha bowl set crafted from high-quality ceramic.",
    imageLarge: "/Sakura02.jpg",     // --- YOUR LARGE 1:1 IMAGE PATH ---
    imageThumbnail: "/IMG_1361_thumb.JPG",         // --- YOUR THUMBNAIL 1:1 IMAGE PATH ---
    altLarge: "Featured Matcha Set Collection",    // --- SPECIFIC ALT TEXT FOR LARGE IMAGE ---
    altThumbnail: "Classic Ceramic Matcha Bowl Set Thumbnail", // --- SPECIFIC ALT TEXT FOR THUMBNAIL ---
    link: "/shop/classic-matcha-bowl", // Replace with your product page URL
    category: "ceramic"
  },
  {
    id: 2,
    name: "Whisk Holder",
    price: "$29.99",
    description: "An elegant combination of natural bamboo tools and a stone bowl.",
    imageLarge: "/hero-matcha-collection-2.jpg",   // --- YOUR LARGE 1:1 IMAGE PATH ---
    imageThumbnail: "/Sakura04.jpg",         // --- YOUR THUMBNAIL 1:1 IMAGE PATH ---
    altLarge: "Making Matcha Latte at Home",       // --- SPECIFIC ALT TEXT FOR LARGE IMAGE ---
    altThumbnail: "Modern Zen Matcha Bowl Thumbnail", // --- SPECIFIC ALT TEXT FOR THUMBNAIL ---
    link: "/shop/modern-zen-matcha-bowl", // Replace with your product page URL
    category: "bamboo"
  },
  {
    id: 3,
    name: "Modern Minimalist Set",
    price: "$29.99",
    description: "A sleek, contemporary take on the traditional matcha experience.",
    imageLarge: "/hero-matcha-collection-3.jpg",   // --- YOUR LARGE 1:1 IMAGE PATH ---
    imageThumbnail: "/Sakura01.jpg",         // --- YOUR THUMBNAIL 1:1 IMAGE PATH ---
    altLarge: "Sustainable Matcha Farming",        // --- SPECIFIC ALT TEXT FOR LARGE IMAGE ---
    altThumbnail: "Modern Minimalist Matcha Set Thumbnail", // --- SPECIFIC ALT TEXT FOR THUMBNAIL ---
    link: "/shop/premium-ceremonial-set", // Replace with your product page URL
    category: "modern"
  },
  {
    id: 4,
    name: "Premium Handcrafted Bowl",
    price: "$29.99",
    description: "A unique, individually crafted bowl by a master artisan.",
    imageLarge: "/hero-matcha-collection-4.jpg",   // --- YOUR LARGE 1:1 IMAGE PATH ---
    imageThumbnail: "/Sakura03.jpg",         // --- YOUR THUMBNAIL 1:1 IMAGE PATH ---
    altLarge: "Health Benefits of Matcha",         // --- SPECIFIC ALT TEXT FOR LARGE IMAGE ---
    altThumbnail: "Premium Handcrafted Matcha Bowl Thumbnail", // --- SPECIFIC ALT TEXT FOR THUMBNAIL ---
    link: "/shop/travel-matcha-kit", // Replace with your product page URL
    category: "premium"
  },
  {
    id: 5,
    name: "Travel-Friendly Matcha Kit",
    price: "$29.99",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    imageLarge: "/hero-matcha-collection-5.jpg",   // --- YOUR LARGE 1:1 IMAGE PATH ---
    imageThumbnail: "/IMG_1364_thumb.PNG",         // --- YOUR THUMBNAIL 1:1 IMAGE PATH ---
    altLarge: "Travel-Friendly Matcha Kit Collection", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE ---
    altThumbnail: "Travel-Friendly Matcha Kit Thumbnail", // --- SPECIFIC ALT TEXT FOR THUMBNAIL ---
    link: "/shop/travel-matcha-kit-2", // Example link
    category: "travel"
  },
  {
    id: 6,
    name: "Yet Another Kit",
    price: "$29.99",
    description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    imageLarge: "/hero-matcha-collection-6.jpg",   // --- YOUR LARGE 1:1 IMAGE PATH ---
    imageThumbnail: "/IMG_1365_thumb.JPG",         // --- YOUR THUMBNAIL 1:1 IMAGE PATH ---
    altLarge: "Yet Another Matcha Kit Collection", // --- SPECIFIC ALT TEXT FOR LARGE IMAGE ---
    altThumbnail: "Yet Another Kit Thumbnail",     // --- SPECIFIC ALT TEXT FOR THUMBNAIL ---
    link: "/shop/travel-matcha-kit-3", // Example link
    category: "travel"
  },
];

const CollectionSection = () => {
  // 3. Use the hook to get the current language
  const { language } = useLanguage();
  // 4. Get the translation object for the current language
  const t = translations[language] || translations['en']; // Fallback to 'en'

  // --- 5. Defensive checks ---
  if (!t) {
    console.error(`[CollectionSection] Translations object not found for language '${language}' or fallback 'en'.`);
    return <div className="text-red-500 p-4">Error loading translations.</div>;
  }

  if (!t.CollectionSection) {
    console.error(`[CollectionSection] CollectionSection translations not found for language '${language}'. Check translations.ts structure.`);
    return <div className="text-red-500 p-4">Error loading section translations.</div>;
  }

  // --- 6. Select the first 4 items for display ---
  // First item (ID 1) will be the large image
  const featuredItem = matchaSets[0];
  if (!featuredItem) {
    console.error(`[CollectionSection] No featured item found.`);
    return <div className="text-red-500 p-4">Error loading featured item.</div>;
  }
  const translatedFeaturedItem = t.products?.[featuredItem.id];

  // Next 3 items (IDs 2, 3, 4) will be the smaller images
  const subItems = matchaSets.slice(1, 4);

  return (
    <section id="collection" className="relative bg-transparent px-6 sm:px-12 lg:px-20 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="my-4 font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
          {t.CollectionSection.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-kantumruy)]">
          {t.CollectionSection.subtitle || "Discover our handcrafted selection of matcha bowls, sets, and accessories."}
        </p>
        <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
      </div>

      {/* --- SINGLE CONTAINER FOR ALL CONTENT --- */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="p-6"> {/* Padding inside the container */}

          {/* --- LARGE FEATURED IMAGE (1:1 SQUARE) --- */}
          <div className="mb-8"> {/* Margin below the large image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md"> {/* aspect-square for 1:1 ratio */}
              {/* --- REMOVED legacyBehavior and inner <a> tag --- */}
              <Link
                href={featuredItem.link}
                className="block w-full h-full" // Ensure Link covers the container
              >
                <Image
                  src={featuredItem.imageLarge} // --- USE imageLarge ---
                  // Use translated alt text if available, fallback to default
                  alt={translatedFeaturedItem?.altLarge || featuredItem.altLarge}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1024px" // Responsive image loading
                  priority // Load featured image with high priority
                />
              </Link>
            </div>
          </div>

          {/* --- GRID OF THREE SMALLER 1:1 IMAGES --- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"> {/* Margin below the grid */}
            {subItems.map((item) => {
              // --- Get translated product data ---
              const translatedItem = t.products?.[item.id];

              return (
                <div
                  key={item.id}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow duration-300"
                >
                  {/* --- REMOVED legacyBehavior and inner <a> tag --- */}
                  <Link
                    href={item.link}
                    className="block w-full h-full" // Ensure Link covers the container
                  >
                    <Image
                      src={item.imageThumbnail} // --- USE imageThumbnail ---
                      // Use translated alt text if available, fallback to default
                      alt={translatedItem?.altThumbnail || item.altThumbnail}
                      fill
                      className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw" // Responsive image loading
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* --- SHARED TITLE, DESCRIPTION, AND BUTTON (BELOW THE CONTAINER) --- */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
              {/* Use translated name if available, fallback to default */}
              {translatedFeaturedItem?.name || featuredItem.name}
            </h2>
            <p className="text-xl font-semibold text-[#386c00] dark:text-yellow-400 mb-3 font-[family-name:var(--font-kantumruy)]">
              {featuredItem.price}
            </p>
            <p className="text-base leading-6 mb-6 text-gray-700 dark:text-gray-300 font-[family-name:var(--font-kantumruy)]">
              {/* Use translated description if available, fallback to default */}
              {translatedFeaturedItem?.description || featuredItem.description}
            </p>
            {/* --- REMOVED legacyBehavior and inner <a> tag --- */}
            <Link
              href={featuredItem.link}
              className="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2 font-[family-name:var(--font-kantumruy)]"
            >
              <BsCartPlus size={18} className="mr-2" />
              {/* Use translated button text if available, fallback to a default */}
              {t.CollectionSection.buttonText || "Shop Now"}
            </Link>
          </div>
          {/* --- END SHARED CONTENT --- */}

        </div> {/* End padding inside container */}
      </div> {/* End single container */}
      {/* --- END OF SINGLE CONTAINER --- */}
    </section>
  );
};

export default CollectionSection;