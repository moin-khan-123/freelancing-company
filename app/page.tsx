'use client';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoLoop from '@/components/LogoLoop';

export default function Page() {
  // Create an array of logo items
  const logos = Array.from({ length: 5 }, (_, i) => ({
    src: `/logo-${i + 1}.webp`,
    alt: `Company logo ${i + 1}`,
    title: `Partner ${i + 1}`,
    // Add width and height to help with layout
    width: 120,
    height: 48,
  }));

  return (
    <>
      {/* <Loader /> */}
      {/* Main Container */}
      <div className="w-full min-h-screen relative">
        {/* Hero Section */}
        <div className="w-full h-screen relative">
          <Navbar />
          <HeroSection />
        </div>
        <div className="w-full bg-black py-12">
          <LogoLoop
            logos={logos}
            speed={80}
            direction="left"
            width="100%"
            logoHeight={28}
            gap={64}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#0b0b0b"
            scaleOnHover={true}
            ariaLabel="Our trusted partners"
          />
        </div>
        {/* Add more sections below to enable scrolling */}
        <section className="w-full min-h-screen bg-white p-8 md:p-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section className="w-full min-h-screen bg-white p-8 md:p-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              Services
            </h2>
            <p className="text-lg text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
