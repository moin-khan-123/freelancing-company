'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase);
  CustomEase.create('hop', '0.9, 0, 0.1, 1');
}

const Loader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Generate three random numbers between 20-95
  const generateNumbers = () => {
    const nums: number[] = [];
    let currentNum = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    nums.push(currentNum);

    const minGap = Math.floor(Math.random() * 6) + 15;
    const maxForSecond = Math.min(95, currentNum + 35);
    currentNum =
      Math.floor(Math.random() * (maxForSecond - (currentNum + minGap) + 1)) +
      (currentNum + minGap);
    nums.push(currentNum);

    const minGap2 = Math.floor(Math.random() * 6) + 15;
    const maxForThird = 95;
    currentNum =
      Math.floor(Math.random() * (maxForThird - (currentNum + minGap2) + 1)) +
      (currentNum + minGap2);
    nums.push(currentNum);

    return nums;
  };

  const [numbers, setNumbers] = useState<number[]>(() => generateNumbers());

  useEffect(() => {
    if (numbers.length === 0) return;

    // Add loading class to html/body at the start
    document.documentElement.classList.add('loader-active');
    document.body.classList.add('loader-active');

    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: 'hop',
      },
      onStart: () => {
        // Keep scroll lock active while animating
        document.documentElement.classList.add('loader-active');
        document.body.classList.add('loader-active');
      },
      onComplete: () => {
        // Remove loading class IMMEDIATELY when animation completes to enable scrolling
        document.documentElement.classList.remove('loader-active');
        document.body.classList.remove('loader-active');
        setIsLoading(false);

        // Hide the loader element after a brief delay
        setTimeout(() => {
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        }, 300);
      },
    });

    const counts = document.querySelectorAll('.count');
    counts.forEach((count, index) => {
      const digits = count.querySelectorAll('.digit h1');
      tl.to(
        digits,
        {
          y: '0%',
          duration: 1,
          stagger: 0.075,
        },
        index * 1
      );
      if (index < counts.length) {
        tl.to(
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

    tl.to('.spinner', {
      opacity: 0,
      duration: 0.3,
    });

    tl.to(
      '.word h1',
      {
        y: '0%',
        duration: 1,
      },
      '<'
    );

    tl.to('.divider', {
      scaleY: '100%',
      duration: 1,
      onComplete: () => {
        gsap.to('.divider', { opacity: 0, duration: 0.4, delay: 0.3 });
      },
    });

    tl.to('#word-1 h1', {
      y: '100%',
      duration: 1,
      delay: 0.3,
    });

    tl.to(
      '#word-2 h1',
      {
        y: '-100%',
        duration: 1,
      },
      '<'
    );

    tl.to('.block', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1,
      stagger: 0.1,
      delay: 0.75,
      onStart: () => {
        gsap.to('.hero-img', { scale: 1, duration: 2, ease: 'hop' });
      },
    });

    tl.to(
      ['.nav', '.line h1', '.line p'],
      { y: '0%', duration: 1.5, stagger: 0.2 },
      '<'
    );

    tl.to(
      ['.cta', '.cta-icon'],
      { scale: 1, duration: 1.5, stagger: 0.75, delay: 0.3 },
      '<'
    );

    tl.to(
      '.cta-label p',
      {
        y: '0%',
        duration: 1.5,
        delay: 0.5,
      },
      '<'
    );

    return () => {
      tl.kill();
    };
  }, [numbers]);

  // Split number into digits
  const getDigits = (num: number) => {
    const str = num.toString().padStart(2, '0');
    return [str[0], str[1]];
  };

  if (numbers.length === 0) return null;

  return (
    <>
      <style jsx global>{`
        /* Only apply overflow:hidden when loader is active */
        html.loader-active,
        body.loader-active {
          overflow: hidden;
          height: 100vh;
        }

        /* When loader is not active, allow scrolling */
        html,
        body {
          overflow-x: hidden;
          width: 100%;
          overflow-y: auto;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .nav {
          transform: translateY(-120%);
        }

        .cta {
          transform: translateX(-50%) scale(0);
        }

        .cta-icon {
          transform: scale(0);
        }

        .line,
        .cta-label,
        .word,
        .count,
        .digit {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          overflow: hidden;
        }

        .line h1,
        .line p,
        .cta-label p,
        .count .digit h1 {
          position: relative;
          transform: translateY(120%);
          will-change: transform;
        }

        .count .digit h1 {
          position: relative;
          transform: translateY(120%);
          will-change: transform;
          font-family: 'Roboto Mono', monospace;
        }

        #word-1 h1 {
          transform: translateY(-120%);
        }

        #word-2 h1 {
          transform: translateY(120%);
        }

        .block {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .divider {
          transform: scaleY(0%);
          transform-origin: top center;
        }

        .hero-img {
          transform: scale(1.5);
          will-change: transform;
        }

        .loader {
          z-index: 9999;
        }
      `}</style>

      <div
        ref={loaderRef}
        className={`loader fixed top-0 left-0 w-full h-screen overflow-hidden z-[2] bg-transparent ${isLoading ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="overlay absolute top-0 w-full h-full flex">
          <div className="block w-full h-full bg-[#101828]"></div>
          <div className="block w-full h-full bg-[#101828]"></div>
        </div>

        <div className="intro-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
          <div className="word relative -left-2 pr-1" id="word-1">
            <h1 className="text-center text-white text-[2.5rem] font-medium leading-none">
              <span className="font-medium italic">Moin</span>
            </h1>
          </div>
          <div className="word" id="word-2">
            <h1 className="text-center text-white text-[2.5rem] font-medium leading-none">
              <span className="font-medium italic">Khan</span>
            </h1>
          </div>
        </div>

        <div className="divider absolute top-0 left-1/2 -translate-x-1/2 origin-top w-px h-full bg-white"></div>

        <div className="spinner-container absolute bottom-[10%] left-1/2 -translate-x-1/2">
          <div className="spinner w-[50px] h-[50px] border-[1.4px] border-white border-t-white/[0.125] rounded-full animate-[spin_1s_linear_infinite]"></div>
        </div>

        <div className="counter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          {/* Starting 00 */}
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                0
              </h1>
            </div>
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                0
              </h1>
            </div>
          </div>

          {/* First random number */}
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            {getDigits(numbers[0]).map((digit, i) => (
              <div key={i} className="digit flex-1 pt-4">
                <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                  {digit}
                </h1>
              </div>
            ))}
          </div>

          {/* Second random number */}
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            {getDigits(numbers[1]).map((digit, i) => (
              <div key={i} className="digit flex-1 pt-4">
                <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                  {digit}
                </h1>
              </div>
            ))}
          </div>

          {/* Third random number */}
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            {getDigits(numbers[2]).map((digit, i) => (
              <div key={i} className="digit flex-1 pt-4">
                <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                  {digit}
                </h1>
              </div>
            ))}
          </div>

          {/* Final 99 */}
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                9
              </h1>
            </div>
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                9
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
