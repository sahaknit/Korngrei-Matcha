// components/MatchaSetsSection.tsx
"use client"; // Mark this as a client component

import React from "react";
import Image from "next/image";
// 1. Import the useLanguage hook and translations
import { useLanguage } from "components/context/LanguageContext";
import { translations } from "@/lib/translations";

// Define the type for a matcha set item
interface MatchaSetItem {
  id: number; // Added an ID for the key
  name: string;
  description: string;
  features: string[]; // List of features/benefits
  price: string; // Or number if you plan to do calculations
  image: string; // Path to the image for the list view
  alt: string; // Alt text for the list view image
}

// Sample data - Ideally, this would come from a data source with translations
const matchaSets: MatchaSetItem[] = [
  {
    id: 1,
    name: "KBACH KHMER Ceramic Bowl",
    description: "A timeless matcha bowl set crafted from high-quality ceramic.",
    features: ["Hand-painted finish", "Authentic shape", "Easy to clean"],
    price: "$18.00",
    image: "/IMG_6478.JPG", // Replace with your actual thumbnail image path
    alt: "Classic Ceramic Matcha Bowl Set"
  },
  {
    id: 2,
    name: "Whisk Holder",
    description: "An elegant combination of natural bamboo tools and a stone bowl.",
    features: ["Includes whisk (chasen)", "Scoop (chashaku)", "Natural materials"],
    price: "$6.00",
    image: "/IMG_6467.JPG", // Replace with your actual thumbnail image path
    alt: "Bamboo and Stone Matcha Ritual Set"
  },
  {
    id: 3,
    name: "Modern Minimalist Set",
    description: "A sleek, contemporary take on the traditional matcha experience.",
    features: ["Geometric design", "Matte finish", "Compact storage"],
    price: "$55.00",
    image: "/matcha-set-3-thumb.jpg", // Replace with your actual thumbnail image path
    alt: "Modern Minimalist Matcha Set"
  },
  {
    id: 4,
    name: "Premium Handcrafted Bowl",
    description: "A unique, individually crafted bowl by a master artisan.",
    features: ["One-of-a-kind design", "Traditional techniques", "Comes with certificate"],
    price: "$85.00",
    image: "/matcha-set-4-thumb.jpg", // Replace with your actual thumbnail image path
    alt: "Premium Handcrafted Matcha Bowl"
  },
  {
    id: 5,
    name: "Travel-Friendly Kit",
    description: "A portable set perfect for enjoying matcha on the go.",
    features: ["Compact and lightweight", "Durable materials", "Carrying case included"],
    price: "$35.00",
    image: "/matcha-set-5-thumb.jpg", // Replace with your actual thumbnail image path
    alt: "Travel-Friendly Matcha Kit"
  },
  {
    id: 6,
    name: "Luxury Gold-Edged Set",
    description: "An opulent set featuring gold accents for a special occasion.",
    features: ["Gold rim details", "Premium packaging", "Ideal gift option"],
    price: "$95.00",
    image: "/matcha-set-6-thumb.jpg", // Replace with your actual thumbnail image path
    alt: "Luxury Gold-Edged Matcha Set"
  },
];

const MatchaSetsSection = () => {
  // 2. Use the hook to get the current language
  const { language } = useLanguage();
  // 3. Get the translation object for the current language
  // --- Add a check for the language key ---
  const t = translations[language] || translations['en']; // Fallback to 'en' if language key is somehow invalid

  // --- Add debugging logs ---
  // console.log("DEBUG - MatchaSetsSection:");
  // console.log("  language from context:", language);
  // console.log("  t (translations[language]):", t);
  // console.log("  t?.MatchaSetsSection:", t?.MatchaSetsSection);

  // --- Defensive checks ---
  if (!t) {
    console.error(`[MatchaSetsSection] Translations object not found for language '${language}' or fallback 'en'.`);
    return <div className="text-red-500 p-4">Error loading translations.</div>; // Or a more graceful fallback
  }

  if (!t.MatchaSetsSection) {
    console.error(`[MatchaSetsSection] MatchaSetsSection translations not found for language '${language}'. Check translations.ts structure.`);
    return <div className="text-red-500 p-4">Error loading section translations.</div>; // Or a more graceful fallback
  }

  return (
    <section id="matcha-sets" className="py-6 bg-transparent">
      {/* Section Header */}
      <h1 className="my-6 text-center font-bold text-4xl text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
        {/* Use the translated title */}
        {t.MatchaSetsSection.title}
        <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
      </h1>

      {/* Hero Image Section */}
      <div className="mb-12">
        <Image
          src="/IMG_1366.PNG" // Replace with your actual large image path
          alt={t.MatchaSetsSection.heroImageAlt || "Featured Matcha Set Collection"} // Use translated alt text
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* List of Matcha Sets */}
      <div className="max-w-4xl mx-auto">
        {/* Optional Subheading */}
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#386c00] dark:text-white font-[family-name:var(--font-kantumruy)]">
          {/* Use the translated subheading */}
          {t.MatchaSetsSection.subheading}
        </h2>
        {/* Grid layout for sets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchaSets.map((item) => {
            // --- Get translated product data ---
            const translatedProduct = t.products?.[item.id];
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                {/* Image for each set in the grid */}
                <div className="h-48 w-full relative">
                  <Image
                    src={item.image}
                    // Use translated alt text if available, fallback to default
                    alt={translatedProduct?.alt || item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" // Responsive image loading
                  />
                </div>
                {/* Details for each set in the grid */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-[#386c00] dark:text-white mb-1 font-[family-name:var(--font-kantumruy)]">
                      {/* Use translated name if available, fallback to default */}
                      {translatedProduct?.name || item.name}
                    </h3>
                    {/* Product Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-[family-name:var(--font-kantumruy)]">
                      {/* Use translated description if available, fallback to default */}
                      {translatedProduct?.description || item.description}
                    </p>
                    {/* Product Features */}
                    <ul className="list-disc pl-4 text-xs text-gray-500 dark:text-gray-400 mb-2 font-[family-name:var(--font-kantumruy)]">
                      {/* Show only first 2 features or adjust as needed */}
                      {(translatedProduct?.features || item.features).slice(0, 2).map((feature, featIdx) => (
                        <li key={featIdx} className="truncate">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Price */}
                  <div className="mt-auto">
                    <span className="text-lg font-semibold text-[#386c00] dark:text-yellow-400 font-[family-name:var(--font-kantumruy)]">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MatchaSetsSection;