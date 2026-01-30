'use client';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoLoop from '@/components/LogoLoop';
import ProjectShowcase from '@/components/ProjectShowcase';
import Whatwedo from '@/components/Whatwedo';
import StickyFooterPage from '@/components/StickyFooterPage';

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
        <Whatwedo />
        <ProjectShowcase />
        <StickyFooterPage />
      </div>
    </>
  );
}
