'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <div className="hero-img absolute top-0 w-full h-screen overflow-hidden -z-10">
        {/* Improved image loading with sizes attribute */}
        <Image
          src="/company-group-photo.webp"
          alt="Professional team of freelancers collaborating"
          className="object-cover"
          sizes="100vw"
          priority
          fill
        />
        {/* Optional: Add gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent md:from-black/60 md:via-black/30" />
      </div>

      {/* Main container with responsive positioning */}
      <div className="w-full h-screen flex items-start justify-center">
        {/* Responsive positioning - higher on mobile, lower on desktop */}
        <div className="w-full absolute top-[50vh] md:top-[60vh] left-0 flex justify-center px-4 md:px-6">
          <header className="header w-full max-w-6xl flex flex-col items-center gap-4 md:gap-6">
            <div className="hero-copy w-full text-center space-y-2 md:space-y-4">
              <div className="line">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-medium leading-tight md:leading-none">
                  Your Vision,{' '}
                  <span className="font-medium italic"> Our Expertise</span>
                </h1>
              </div>
              <div className="line">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-medium leading-tight md:leading-none">
                  Delivered by{' '}
                  <span className="font-medium italic">Top Talent</span>
                </h1>
              </div>
            </div>
            <div className="line max-w-2xl mx-auto">
              <p className="no-underline text-center text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed px-2">
                Connect with elite freelancers who bring your projects to life
              </p>
            </div>

            {/* Optional: Add a CTA button for better conversion */}
            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Hire Talent
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg">
                View Projects
              </button>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
