import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare, BsCartPlus } from "react-icons/bs";

// Matcha Bowl Products
const matchaBowls = [
  {
    name: "Classic Matcha Bowl Set",
    price: "$29.99",
    description:
      "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves.",
    image: "/IMG_1361.JPG",
    link: "/shop/classic-matcha-bowl", // Replace with your product page URL
  },
  {
    name: "Modern Zen Matcha Bowl",
    price: "$29.99",
    description:
      "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts.",
    image: "/IMG_1362.JPG",
    link: "/shop/modern-zen-matcha-bowl", // Replace with your product page URL
  },
  {
    name: "Premium Ceremonial Set",
    price: "$29.99",
    description:
      "An exclusive ceremonial set, complete with a bamboo whisk, scoop, and premium matcha powder. Elevate your tea experience with this luxurious collection.",
    image: "/IMG_1360.JPG",
    link: "/shop/premium-ceremonial-set", // Replace with your product page URL
  },
  {
    name: "Travel-Friendly Matcha Kit",
    price: "$29.99",
    description:
      "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    image: "/IMG_1363.JPG",
    link: "/shop/travel-matcha-kit", // Replace with your product page URL
  },
   {
    name: "Travel-Friendly Matcha Kit",
    price: "$29.99",
    description:
      "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    image: "/IMG_1364.PNG",
    link: "/shop/travel-matcha-kit", // Replace with your product page URL
  }
  ,
   {
    name: "Travel-Friendly Matcha Kit",
    price: "$29.99",
    description:
      "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers.",
    image: "/IMG_1365.JPG",
    link: "/shop/travel-matcha-kit", // Replace with your product page URL
  },
];

const MatchaBowlListSection = () => {
  return (
    <section id="matcha-bowls" className="relative bg-transparent px-6 sm:px-12 lg:px-20">
      {/* Section Header */}
      <h1 className="my-10 text-center font-bold text-4xl text-[#386c00]">
        Our Matcha Bowls
        <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded"></hr>
      </h1>

      {/* Matcha Bowl Grid */}
      <div className="flex flex-col space-y-28">
        {matchaBowls.map((bowl, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                {/* Image Section */}
                <div className="md:w-1/2">
                  <Link href={bowl.link} target="_blank">
                    <Image
                      src={bowl.image}
                      alt={bowl.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70 transition-opacity"
                    />
                  </Link>
                </div>

                {/* Details Section */}
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6 text-[#386c00]">
                    {bowl.name}
                  </h1>
                  <p className="text-2xl font-semibold text-[#386c00] mb-4">
                    {bowl.price}
                  </p>
                  <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {bowl.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    {/* Shop Now Button */}
                    <Link href={bowl.link} target="_blank">
                      <button className="inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-[#386c00] hover:bg-[#2d5400] rounded-full shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#386c00] focus:ring-offset-2">
                        <BsCartPlus size={20} className="mr-2" />
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatchaBowlListSection;