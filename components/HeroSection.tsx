'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      {/* Hero Image Container with refined overlay */}
      <div className="hero-img fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
        <Image
          src="/company-group-photo.webp"
          alt="Professional team of freelancers collaborating"
          className="object-cover"
          sizes="100vw"
          priority
          fill
        />
        {/* Sophisticated multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent md:from-black/60 md:via-black/30" />
      </div>

      {/* Main container with responsive positioning */}
      <div className="w-full h-screen flex items-start justify-center">
        {/* Responsive positioning - higher on mobile, lower on desktop */}
        <div className="w-full absolute top-[50vh] md:top-[60vh] left-0 flex justify-center px-4 md:px-6">
          <header className="header w-full max-w-6xl flex flex-col items-center gap-4 md:gap-6">
            <div className="hero-copy w-full text-center space-y-2 md:space-y-4">
              <div className="line">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-medium leading-tight md:leading-none">
                  Your Vision,{' '}
                  <span className="font-medium italic"> Our Expertise</span>
                </h1>
              </div>
              <div className="line">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-medium leading-tight md:leading-none">
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

            {/* Optional CTA Button with elegant hover effect The button has been commented, I will use it later. */}
            {/* <div className="line pt-4 md:pt-6 animate-[fade-in_1s_ease-out_1.4s_both]">
              <button className="group relative px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base md:text-lg font-light tracking-wider uppercase overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]">
                <span className="relative z-10">Explore Talent</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </div> */}
          </header>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[bounce-subtle_2s_ease-in-out_infinite]">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-white/60 rounded-full animate-[scroll-down_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes subtle-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }

        @keyframes scroll-down {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(12px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
