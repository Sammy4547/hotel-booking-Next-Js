

import HeroSection from "./Dashboard/HeroSection";
import Features from "./Dashboard/Features";
import About from "./Dashboard/About";

export default function HomePage() {
  return (
    <main className="bg-neutral-100 dark:bg-neutral-900 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Grid */}
      <Features />

      {/* About Section */}
      <About />
    </main>
  );
}
