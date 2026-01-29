'use client';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoLoop from '@/components/LogoLoop';
import AlericHero from '@/components/AlericHero';

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

        {/* Logo Section - Matching the design */}
        <section className="w-full bg-black py-6 md:py-8">
          <div className="w-full mx-auto px-4">
            {/* Heading with decorative lines */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              {/* Left decorative line */}
              <div className="w-12 md:w-20 h-[1px] bg-white/30"></div>

              {/* Heading */}
              <h2 className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-wide whitespace-nowrap">
                They Trust Us Always
              </h2>

              {/* Right decorative line */}
              <div className="w-12 md:w-20 h-[1px] bg-white/30"></div>
            </div>

            {/* Logo Loop */}
            <LogoLoop
              logos={logos}
              speed={40}
              direction="left"
              width="100%"
              logoHeight={30}
              gap={60}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={true}
              ariaLabel="Our trusted partners"
            />
          </div>
        </section>
        <AlericHero />
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
