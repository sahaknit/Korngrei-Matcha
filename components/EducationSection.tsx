"use client"; // Mark this as a client component
import React from "react";
import Image from "next/image";

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

const matchaSets: MatchaSetItem[] = [
  {
    id: 1,
    name: "Classic Ceramic Bowl Set",
    description: "A timeless matcha bowl set crafted from high-quality ceramic.",
    features: ["Hand-painted finish", "Authentic shape", "Easy to clean"],
    price: "$45.00",
    image: "/matcha-set-1-thumb.jpg", // Replace with your actual thumbnail image path
    alt: "Classic Ceramic Matcha Bowl Set"
  },
  {
    id: 2,
    name: "Bamboo & Stone Ritual Set",
    description: "An elegant combination of natural bamboo tools and a stone bowl.",
    features: ["Includes whisk (chasen)", "Scoop (chashaku)", "Natural materials"],
    price: "$65.00",
    image: "/matcha-set-2-thumb.jpg", // Replace with your actual thumbnail image path
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
  return (
    <section id="matcha-sets" className="py-6 bg-transparent"> {/* Changed ID and added bg-transparent */}
      <h1 className="my-6 text-center font-bold text-4xl text-[#386c00] dark:text-white"> {/* Updated color */}
        Our Matcha Sets
        <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded"></hr> {/* Updated color */}
      </h1>

      {/* Hero Image Section */}
      <div className="mb-12"> {/* Add some bottom margin to separate from the list */}
        <Image
          src="/IMG_1366.PNG" // Replace with your actual large image path
          alt="Featured Matcha Set Collection"
          width={1200} // Adjust width as needed for your layout
          height={600} // Adjust height as needed for your layout
          className="w-full h-auto object-cover rounded-xl shadow-lg" // Make it full width, responsive, and add styling
        />
      </div>

      {/* List of Matcha Sets */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#386c00] dark:text-white"> {/* Optional subheading */}
          Explore Our Matcha set items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid layout for sets */}
          {matchaSets.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col" // Container for each set card
            >
              {/* Image for each set in the grid */}
              <div className="h-48 w-full relative"> {/* Fixed height container for consistent grid rows */}
                <Image
                  src={item.image} // Use the thumbnail image for the grid
                  alt={item.alt}
                  fill // Use fill to make the image fill the container
                  className="object-cover" // Ensure the image covers the space nicely
                />
              </div>
              {/* Details for each set in the grid */}
              <div className="p-4 flex-grow flex flex-col justify-between"> {/* Flex column to push price to bottom */}
                <div>
                  <h3 className="text-lg font-bold text-[#386c00] dark:text-white mb-1"> {/* Updated color */}
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {item.description}
                  </p>
                  <ul className="list-disc pl-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {item.features.slice(0, 2).map((feature, featIdx) => ( // Show only first 2 features or adjust as needed
                      <li key={featIdx} className="truncate">{feature}</li> // Truncate if features are long
                    ))}
                  </ul>
                </div>
                <div className="mt-auto"> {/* Push price to the bottom */}
                  <span className="text-lg font-semibold text-[#386c00] dark:text-yellow-400"> {/* Updated color */}
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchaSetsSection;