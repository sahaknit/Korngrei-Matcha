"use client"; // Ensure this is a client component if you're using hooks or browser-specific APIs later

import React from "react";
import Image from "next/image";

// Define the font class name you set up in your layout.tsx (or global CSS)
// Assuming you used `font-[family-name:var(--font-khmer)]` as shown in the previous example
// This example applies the font class to elements where you might want Khmer script (e.g., company name, specific phrases)
// Or, you can remove the font class application if you only want English text in standard fonts.
// const KHMER_FONT_CLASS = "font-[family-name:var(--font-khmer)]";
// For now, let's assume you want the standard font for English text and potentially the Khmer font for specific parts like the company name.
// If you want the Khmer font applied to English text, you can uncomment the line above and use the class below.
const KHMER_FONT_CLASS = ""; // Set to empty string if not applying Khmer font to English content

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-transparent px-6 sm:px-12 lg:px-20">
      {/* Section Header */}
      <div className="my-12 pb-8 md:pb-24">
        <h1 className={`text-center font-bold text-4xl text-[#386c00] ${KHMER_FONT_CLASS}`}>
          About Us
          <hr className="w-6 h-1 mx-auto my-4 bg-[#e3edc9] border-0 rounded" />
        </h1>

        {/* Content Grid */}
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* Left Column - Story */}
          <div className="md:w-1/2">
            <h1 className={`text-center text-2xl font-bold mb-6 md:text-left text-[#386c00] ${KHMER_FONT_CLASS}`}>
              Our Story: A Tradition of Quality
            </h1>
            <p className={`${KHMER_FONT_CLASS}`}>
              Our philosophy is rooted in the rich heritage of Kampong Chhnang province, a land renowned for its master potters. Like a finely crafted piece of pottery, each of our products is shaped with skill, passion, and an unwavering commitment to quality. We pride ourselves on using only the finest ingredients, sourced directly from nature and infused with vibrant local elements like fresh green lime.
            </p>
            <br />
            <p className={`${KHMER_FONT_CLASS}`}>
              Inspired by Tradition, Crafted for Today
            </p>
            <br />
            <p className={`${KHMER_FONT_CLASS}`}>
              Noticing the local appreciation for Japanese Matcha, we were inspired to innovate. We set out to create a uniquely Cambodian product, starting with pure, locally-sourced green tea and meticulously blending it with the best ingredients our country has to offer.
            </p>
            <br />
            <p className={`${KHMER_FONT_CLASS}`}>
              Our mission is to create high-quality, hygienic products you can trust for your well-being. 
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
              <Image
                src="/Untitled design (7).png" // Replace with your actual image path
                alt="Matcha bowl craftsmanship"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;