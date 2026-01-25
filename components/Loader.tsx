'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase);
  CustomEase.create('hop', '0.9, 0, 0.1, 1');
}

const Loader = () => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const digitRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize digit refs array
  useEffect(() => {
    digitRefs.current = digitRefs.current.slice(0, 10);
  }, []);

  useEffect(() => {
    // Create animation timeline
    timelineRef.current = gsap.timeline({
      delay: 0.3,
      defaults: { ease: 'hop' },
    });

    // Animate each digit pair
    const counts = document.querySelectorAll('.count');
    counts.forEach((count, index) => {
      const digits = count.querySelectorAll('.digit h1');

      // First animation: bring digits into view
      timelineRef.current!.to(
        digits,
        {
          y: '0%',
          duration: 1,
          stagger: 0.075,
        },
        index * 1
      );

      // Second animation: move digits out of view
      if (index < counts.length - 1) {
        timelineRef.current!.to(
          digits,
          {
            y: '-100%',
            duration: 1,
            stagger: 0.075,
          },
          index * 1 + 1
        );
      }
    });

    // Animate spinner fade out
    timelineRef.current!.to(
      spinnerRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      counts.length * 1
    );

    // Animate words into position
    timelineRef.current!.to(
      [
        word1Ref.current?.querySelector('h1'),
        word2Ref.current?.querySelector('h1'),
      ],
      {
        y: '0%',
        duration: 1,
      },
      '<'
    );

    // Animate divider and then fade out
    timelineRef.current!.to(
      dividerRef.current,
      {
        scaleY: 1,
        duration: 1,
        onComplete: () => {
          gsap.to(dividerRef.current, {
            opacity: 0,
            duration: 0.4,
            delay: 0.3,
          });
        },
      },
      '<'
    );

    // Animate words out
    timelineRef.current!.to(
      word1Ref.current?.querySelector('h1'),
      {
        y: '100%',
        duration: 1,
        delay: 0.3,
      },
      '<'
    );

    timelineRef.current!.to(
      word2Ref.current?.querySelector('h1'),
      {
        y: '-100%',
        duration: 1,
      },
      '<'
    );

    // Animate blocks away
    timelineRef.current!.to(
      [block1Ref.current, block2Ref.current],
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
      },
      '<'
    );

    // Cleanup
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <>
      {/* Loader */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-50"
      >
        {/* Overlay with blocks */}
        <div className="absolute top-0 left-0 w-full h-full flex">
          <div
            ref={block1Ref}
            className="w-full h-full bg-gray-800"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
          <div
            ref={block2Ref}
            className="w-full h-full bg-gray-800"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
        </div>

        {/* Logo text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1">
          <div ref={word1Ref} id="word-1" className="relative -left-2 pr-1">
            <h1 className="text-4xl md:text-5xl text-white font-mono font-medium">
              <span
                className="font-mono font-medium italic"
                style={{ transform: 'translateY(-120%)' }}
              >
                Moin
              </span>
            </h1>
          </div>
          <div ref={word2Ref} id="word-2">
            <h1 className="text-4xl md:text-5xl text-white font-mono font-medium">
              <span
                className="font-mono font-medium italic"
                style={{ transform: 'translateY(120%)' }}
              >
                Khan
              </span>
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-white"
          style={{ transform: 'translateX(-50%) scaleY(0)' }}
        />

        {/* Spinner */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div
            ref={spinnerRef}
            className="w-12 h-12 border-2 border-white border-t-white/10 rounded-full animate-spin"
          />
        </div>

        {/* Counter */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {[
            ['0', '0'],
            ['2', '8'],
            ['6', '1'],
            ['9', '4'],
            ['9', '9'],
          ].map((pair, pairIndex) => (
            <div
              key={pairIndex}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex count"
            >
              {pair.map((digit, digitIndex) => (
                <div
                  key={`${pairIndex}-${digitIndex}`}
                  className="flex-1 pt-4 digit"
                  style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,0% 100%)' }}
                >
                  <h1
                    ref={(el) => {
                      digitRefs.current[pairIndex * 2 + digitIndex] = el;
                    }}
                    className="text-8xl md:text-[18rem] text-white font-normal"
                    style={{
                      position: 'relative',
                      transform: 'translateY(120%)',
                      willChange: 'transform',
                    }}
                  >
                    {digit}
                  </h1>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Global styles for spin animation */}
      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }

        /* Responsive font sizes */
        @media (max-width: 900px) {
          h1 {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Loader;
