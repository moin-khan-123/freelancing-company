'use client';

import React, { useEffect, useRef } from 'react';
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import gsap from 'gsap';

/**
 * Magnetic animation wrapper component using GSAP
 */
interface GsapMagneticProps {
  children: React.ReactNode;
}

const GsapMagnetic = ({ children }: GsapMagneticProps) => {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = magneticRef.current;
    if (!element) return;

    gsap.set(element, { x: 0, y: 0 });

    const xTo = gsap.quickTo(element, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const yTo = gsap.quickTo(element, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.5;
      const y = (clientY - (top + height / 2)) * 0.5;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticRef]);

  return (
    <div
      ref={magneticRef}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Main page component demonstrating a sticky footer implementation
 */
export default function StickyFooterPage() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <Footer />
    </div>
  );
}

/**
 * Introductory header section with main content
 */
function HeaderSection() {
  return (
    <section
      className="h-screen flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-300 px-4 md:px-8 lg:px-16"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-black">
          This is an example of a sticky footer implemented with modern CSS
          techniques and magnetic social icons.
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Scroll down to experience the sticky footer effect with interactive
          elements
        </p>
      </div>
    </section>
  );
}

/**
 * Main Footer component containing all footer sections and sticky effect
 */
function Footer() {
  return (
    <footer
      className="relative h-[100vh]"
      aria-label="Main footer"
      style={{
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
        <div className="h-[100vh] sticky top-[calc(100vh-100vh)]">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}

/**
 * Content container for the footer
 */
function FooterContent() {
  return (
    <div className="bg-gray-800 py-12 px-6 md:px-8 lg:px-12 h-full w-full flex flex-col justify-between">
      {/* Social Icons with Magnetic Effect */}
      <SocialIconsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Navigation */}
      <FooterNavigation />

      {/* Bottom Section */}
      <FooterBottom />
    </div>
  );
}

/**
 * Social media icons section with magnetic animation
 */
function SocialIconsSection() {
  return (
    <div className="flex gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12 flex-wrap justify-center">
      {/* Facebook */}
      <GsapMagnetic>
        <a
          href="#"
          className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-xl"
        >
          <FaFacebookF className="text-[24px] md:text-[28px] lg:text-[34px]" />
        </a>
      </GsapMagnetic>

      {/* Instagram */}
      <GsapMagnetic>
        <a
          href="#"
          className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-xl"
        >
          <FaInstagram className="text-[24px] md:text-[28px] lg:text-[34px]" />
        </a>
      </GsapMagnetic>

      {/* LinkedIn */}
      <GsapMagnetic>
        <a
          href="#"
          className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-xl"
        >
          <FaLinkedinIn className="text-[24px] md:text-[28px] lg:text-[34px]" />
        </a>
      </GsapMagnetic>

      {/* X/Twitter */}
      <GsapMagnetic>
        <a
          href="#"
          className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-xl"
        >
          <FaXTwitter className="text-[24px] md:text-[28px] lg:text-[34px]" />
        </a>
      </GsapMagnetic>
    </div>
  );
}

/**
 * Newsletter subscription section
 */
function NewsletterSection() {
  return (
    <div className="w-full max-w-xl md:max-w-2xl mx-auto px-4 md:px-0 mb-12">
      <div className="relative group">
        <div className="relative flex flex-col md:flex-row gap-2 bg-gray-900 rounded-lg md:rounded-xl p-2 md:p-1 border border-gray-700">
          <div className="flex-1 relative w-full">
            <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px] md:text-[24px]" />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 md:py-4 bg-transparent border-none text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-0 text-base md:text-[18px] rounded-lg"
            />
          </div>

          <button className="px-6 md:px-8 py-3 md:py-4 bg-white rounded-lg font-semibold whitespace-nowrap border border-gray-600 flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-all duration-300 text-sm md:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Navigation section of the footer
 */
function FooterNavigation() {
  const navigationSections = [
    {
      title: 'About',
      items: ['Home', 'Projects'],
    },
    {
      title: 'Education',
      items: ['News', 'Learn'],
    },
    {
      title: 'Services',
      items: ['Consulting', 'Development'],
    },
    {
      title: 'Resources',
      items: ['Documentation', 'API'],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-12 lg:gap-20 uppercase mb-12">
      {navigationSections.map((section, index) => (
        <FooterNavSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
}

/**
 * Footer bottom section with branding and copyright
 */
function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex bg-gray-900 flex-col lg:flex-row justify-center items-center text-center mt-8 lg:mt-0 rounded-2xl uppercase p-8 overflow-visible">
      <div className="w-full lg:w-auto overflow-visible">
        <h1 className="text-[clamp(50px,13vw,220px)] font-bold leading-[0.80] text-gradient-1 px-4 lg:px-0 pb-4">
          Sticky <br /> Footer
        </h1>
        <div className="mt-8  lg:mt-0 w- flex justify-between ">
          <span className="text-gray-400 mt-4">
            &copy; {currentYear} All rights reserved
          </span>
          <span className="mt-4 text-gray-400">A modern implementation</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable footer navigation section component
 */
interface FooterNavSectionProps {
  title: string;
  items: string[];
}

function FooterNavSection({ title, items }: FooterNavSectionProps) {
  return (
    <nav aria-label={`${title} section`}>
      <h3 className="mb-4 text-lg font-medium uppercase tracking-wider text-gray-400">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                console.log(`Navigating to: ${item}`);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
