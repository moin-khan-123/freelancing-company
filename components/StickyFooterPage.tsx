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
      className="h-screen flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-300 px-4 md:px-8 lg:px-16"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-black">
          This is an example of a sticky footer implemented with modern CSS
          techniques.
        </h2>
        <p className="mt-6 text-lg text-gray-600">
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
      title: 'Education',
      items: ['News', 'Learn', 'Certification', 'Publications'],
    },
    {
      title: 'Resources',
      items: ['Documentation', 'API', 'Tutorials', 'Community'],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-12 lg:gap-20 uppercase ">
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
      {' '}
      {/* Added overflow-visible */}
      <div className="w-full lg:w-auto overflow-visible">
        {' '}
        {/* Added overflow-visible */}
        <h1 className="text-[clamp(50px,13vw,250px)] font-bold leading-[0.80] text-gradient-1 px-4 lg:px-0 pb-4">
          {' '}
          {/* Added pb-4 */}
          Sticky Footer
        </h1>
        <div className="mt-8 lg:mt-0 flex justify-between">
          <p className="text-gray-400 mt-4">
            &copy; {currentYear} All rights reserved
          </p>
          <p className="mt-4 text-gray-400">A modern implementation</p>
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
