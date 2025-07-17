import React from "react";
import Card from "./Card";
export default function Features() {
  return (
    <section className="py-12 bg-white dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-800 dark:text-white">
          Our Hotel Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            name="Luxrious hotel"
            desc=" Spacious and stylish rooms equipped with modern amenities for your comfort."
          />
          <Card
            name="24/7 Service"
            desc="Round-the-clock customer support to assist you with all your travel needs."
          />

          <Card
            name="Premium Facilities"
            desc="Enjoy pools, gyms, spas, and gourmet dining across all our hotel locations."
          />
        </div>
      </div>
    </section>
  );
}
