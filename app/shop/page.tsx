// File: app/about/page.tsx

import React from 'react';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-24"> {/* py-24 to add padding below fixed navbar */}
      <h1 className="text-4xl font-bold text-center">Our Story</h1>
      <p className="mt-4 text-lg text-center">
        This is where you will tell the story of your Matcha Bowl business.
        Talk about your passion for matcha, your sourcing, and your mission.
      </p>
      {/* You can add more sections, images, and components here */}
    </main>
  );
}