import React from "react";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[80vh]">
      <Image
        src="/hotel.jpg"
        alt="Background"
        fill
        className="object-cover z-0 blur-xs"
        priority
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-colors duration-150 ease-in-out hover:text-amber-300">
          Welcome to Travelify Hotels
        </h1>

        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl">
          Discover premium hotels, seamless booking, and unforgettable
          experiences.
        </p>

        <SearchBar />
      </div>
    </section>
  );
}
