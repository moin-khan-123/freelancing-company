'use client';

import React from 'react';

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
      className="h-screen flex items-center justify-center min-h-screen bg-linear-to-br from-gray-50 to-gray-100 px-4 md:px-8 lg:px-16"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-black">
          This is an example of a sticky footer implemented with modern CSS
          techniques.
        </h2>
        <p className="mt-6 text-lg text-gray-300">
          Scroll down to experience the sticky footer effect
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
      className="relative h-[800px]"
      aria-label="Main footer"
      style={{
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
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
      <FooterNavigation />
      <FooterBottom />
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
      items: ['Home', 'Projects', 'Our Mission', 'Contact Us'],
    },
    {
      title: 'Education',
      items: ['News', 'Learn', 'Certification', 'Publications'],
    },
    {
      title: 'Resources',
      items: ['Documentation', 'API', 'Tutorials', 'Community'],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
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
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-8 lg:mt-0">
      <div>
        <h1 className="text-8xl md:text-9xl lg:text-[14vw] font-bold leading-[0.85] text-white">
          Sticky Footer
        </h1>
        <p className="mt-4 text-gray-400">
          A modern implementation using CSS and React
        </p>
      </div>

      <div className="mt-8 lg:mt-0 text-right">
        <p className="text-gray-400 mb-2">
          &copy; {currentYear} All rights reserved
        </p>
        <p className="text-sm text-gray-500">
          Designed with Next.js and Tailwind CSS
        </p>
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
                // Handle navigation
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
