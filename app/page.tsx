'use client';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <Loader />

      {/* Main Container */}
      <div className="w-full h-screen overflow-hidden relative">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}
