'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase);
  CustomEase.create('hop', '0.9, 0, 0.1, 1');
}

const Loader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: 'hop',
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
      onComplete: () =>
        gsap.to('.divider', { opacity: 0, duration: 0.4, delay: 0.3 }),
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
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');

        * {
          font-family: 'Roboto Mono', monospace;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          overflow-x: hidden;
          width: 100%;
          height: 100%;
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
        }

        .hero-img {
          transform: scale(1.5);
          will-change: transform;
        }
      `}</style>

      {/* Loader */}
      <div
        ref={loaderRef}
        className="loader fixed top-0 left-0 w-full h-screen overflow-hidden z-[2]"
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
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                2
              </h1>
            </div>
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                8
              </h1>
            </div>
          </div>
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                6
              </h1>
            </div>
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                1
              </h1>
            </div>
          </div>
          <div className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                9
              </h1>
            </div>
            <div className="digit flex-1 pt-4">
              <h1 className="text-center text-white text-[18rem] font-normal leading-none">
                4
              </h1>
            </div>
          </div>
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

      {/* Main Container */}
      <div className="w-full h-screen overflow-hidden relative">
        <div className="hero-img absolute top-0 w-full h-screen overflow-hidden -z-10">
          <img
            src="/moin.jpeg"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>

        <nav
          className="nav absolute top-0 w-full py-5 px-6 flex items-center gap-6 will-change-transform"
          style={{ padding: '1.25rem 1.5rem' }}
        >
          <div className="flex-1">
            <a
              href=""
              className="no-underline uppercase text-white text-sm font-bold capitalize"
            >
              rasel
            </a>
          </div>
          <div className="nav-links flex-1 flex gap-6 justify-center max-md:hidden">
            <a
              href=""
              className="no-underline uppercase text-white text-xs font-medium leading-none"
            >
              Home
            </a>
            <a
              href=""
              className="no-underline uppercase text-white text-xs font-medium leading-none"
            >
              About
            </a>
            <a
              href=""
              className="no-underline uppercase text-white text-xs font-medium leading-none"
            >
              Services
            </a>
            <a
              href=""
              className="no-underline uppercase text-white text-xs font-medium leading-none"
            >
              Portfolio
            </a>
            <a
              href=""
              className="no-underline uppercase text-white text-xs font-medium leading-none"
            >
              Contact
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <a
              href=""
              className="flex justify-center items-center text-base w-[60px] h-10 text-black bg-white rounded-[40px]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </div>
        </nav>

        <div className="w-full h-full flex items-center justify-center">
          <header className="header w-full max-w-6xl py-[25vh] flex flex-col items-center gap-6">
            <div className="hero-copy w-full text-center">
              <div className="line">
                <h1 className="text-white text-[5rem] max-md:text-5xl font-medium leading-none">
                  <span className="font-medium italic">Rooted</span> in care
                </h1>
              </div>
              <div className="line">
                <h1 className="text-white text-[5rem] max-md:text-5xl font-medium leading-none">
                  for a better{' '}
                  <span className="font-medium italic">tomorrow</span>
                </h1>
              </div>
            </div>
            <div className="line">
              <p className="no-underline uppercase text-white text-xs font-medium leading-none">
                Lorem ipsum dolor sit amet elit. Fugiat, ipsam.
              </p>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Loader;
