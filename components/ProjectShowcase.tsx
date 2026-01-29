'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectShowcase = () => {
  const mainRef = useRef<HTMLElement>(null);
  const pinCardsRef = useRef<(HTMLElement | null)[]>([]);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Lenis Smooth Scroll
    const initLenis = async () => {
      const LenisModule = (await import('lenis')).default;
      lenisRef.current = new LenisModule({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // Prevent Lenis from interfering with other scroll effects
        syncTouch: true,
      });

      const scrollFn = () => {
        ScrollTrigger.update();
      };

      lenisRef.current.on('scroll', scrollFn);

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      gsap.ticker.lagSmoothing(0);
    };

    initLenis();

    // Delay ScrollTrigger setup to ensure DOM is ready
    const setupScrollTriggers = () => {
      const pinCards = pinCardsRef.current.filter(Boolean) as HTMLElement[];

      pinCards.forEach((eachCard, index) => {
        if (index < pinCards.length - 1) {
          ScrollTrigger.create({
            trigger: eachCard,
            start: 'top top',
            endTrigger: pinCards[pinCards.length - 1],
            end: 'top top',
            pin: true,
            pinSpacing: false,
            // Add a unique ID to help with cleanup
            id: `pin-card-${index}`,
          });

          ScrollTrigger.create({
            trigger: pinCards[index + 1],
            start: 'top bottom',
            end: 'top top',
            id: `scale-card-${index}`,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(eachCard, {
                scale: 1 - progress * 0.25,
                rotation: index % 2 === 0 ? progress * 5 : -progress * 5,
                rotationX: index % 2 === 0 ? progress * 40 : -progress * 40,
              });
              const overlay = eachCard.querySelector('.overlay') as HTMLElement;
              if (overlay) {
                gsap.set(overlay, {
                  opacity: progress * 0.4,
                });
              }
            },
          });
        }
      });
    };

    // Wait a bit for DOM to be ready
    const timeoutId = setTimeout(setupScrollTriggers, 100);

    return () => {
      clearTimeout(timeoutId);

      // Kill only ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.id?.toString().includes('card')) {
          trigger.kill();
        }
      });

      // Refresh remaining ScrollTriggers
      ScrollTrigger.refresh();

      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  const projects = [
    {
      number: '01',
      title: 'RDR 2',
      image:
        'https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg',
      description:
        'Red Dead Redemption 2 is a celebrated open-world adventure set in the American frontier, following Arthur Morgan and the Van der Linde gang through a gripping tale of loyalty, survival, and breathtaking landscapes.',
    },
    {
      number: '02',
      title: 'GOW : RAGNAROCK',
      image:
        'https://i.pinimg.com/1200x/83/a0/61/83a0611b7dffe9a845b371161da4a6ca.jpg',
      description:
        'God of War: Ragnarök is an acclaimed action-adventure game set in Norse mythology, following Kratos and his son Atreus through a thrilling story full of epic battles and stunning visuals.',
    },
    {
      number: '03',
      title: 'THE LAST OF US',
      image:
        'https://i.pinimg.com/1200x/6f/4a/73/6f4a73124e676232f7790afc347aa7cf.jpg',
      description:
        'The Last of Us is a powerful story-driven action game set in a post-apocalyptic world, following Joel and Ellie on an emotional journey through danger and hope in a beautifully haunting landscape.',
    },
    {
      number: '04',
      title: 'SEKIRO',
      image:
        'https://i.pinimg.com/1200x/41/a6/6c/41a66c375c827fa9f6b8257ce3a32567.jpg',
      description:
        'Sekiro: Shadows Die Twice is an intense action game set in feudal Japan, where you play as a shinobi on a quest for vengeance featuring brutal combat, stealth mechanics, and stunning visuals.',
    },
    {
      number: '05',
      title: 'ELDEN RING',
      image:
        'https://i.pinimg.com/1200x/34/ce/01/34ce0128069cab020ce3dce189ef84b9.jpg',
      description:
        'Elden Ring is an expansive open-world action RPG crafted by FromSoftware and George R.R. Martin, offering a vast dark fantasy realm filled with challenging combat and deep lore to uncover.',
    },
  ];

  return (
    <>
      <main
        ref={mainRef}
        className="w-full overflow-x-hidden bg-[#1a1a1a] font-sans"
      >
        {/* Intro Section */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-[#1a1a1a] px-[8vw] text-center text-white">
          <h2 className="flex flex-wrap items-center justify-center text-[4vw] md:text-[8vw] lg:text-[4vw]">
            Best{' '}
            <span className="ml-[0.8vw] flex items-center font-light text-[bisque]">
              Games{' '}
              <svg
                className="h-[5vw] w-[5vw] md:h-[8vw] md:w-[8vw] lg:h-[5vw] lg:w-[5vw]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12H18L15 21L9 3L6 12H2"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{' '}
            To Try.
          </h2>
          <p className="mt-4 max-w-200 text-lg leading-[1.4] opacity-80 md:text-base lg:text-xl">
            Here are a few of the most memorable and entertaining games I have
            enjoyed over the years. Each one stands out for its unique gameplay
            and lasting impact.
          </p>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="97"
          height="55"
          viewBox="0 0 97 55"
          fill="none"
        >
          <path
            d="M83.9847 54C78.6511 51.5322 68.0674 44.655 61.7108 35.7342M61.7108 35.7342C57.5824 29.9403 55.2371 23.2843 57.2715 16.4144C60.0986 7.49032 70.2847 -6.31124 90.9344 5.6788C98.7241 10.2019 98.4556 20.6021 83.5646 27.5777C79.0031 29.7146 71.0686 33.5275 61.7108 35.7342ZM61.7108 35.7342C53.4442 37.6836 44.0668 38.3795 34.9229 35.559C25.1202 32.5353 9.6859 22.4932 2.95683 11.8205M2.95683 11.8205C2.62313 11.2912 2.31083 10.7604 2.02169 10.2288M2.95683 11.8205C2.64312 11.2405 2.3276 10.7065 2.02169 10.2288M2.95683 11.8205C6.02114 17.4865 8.91304 27.5524 1 32.5592M2.02169 10.2288C4.26447 13.5357 12.5228 18.93 27.614 14.0517M60.1349 46.4081C56.4491 47.6903 43.2901 50.1894 32.1762 43.8776"
            stroke="#030303"
            stroke-width="1.5"
          />
        </svg>
        {/* Project Cards */}
        {projects.map((project, index) => (
          <section
            key={index}
            ref={(el) => {
              pinCardsRef.current[index] = el;
            }}
            className="relative flex min-h-[80vh] w-full flex-col items-start justify-between gap-8 border-b border-black/25 bg-[#fcfcfc] p-[5vh_6vw] md:flex-row md:gap-0 md:p-[10vh_8vw] perspective-[1000px]"
          >
            <div className="overlay pointer-events-none absolute inset-0 bg-black opacity-0"></div>
            <span className="text-[12vw] font-semibold md:text-[15vw] lg:text-[8vw]">
              ({project.number})
            </span>
            <div className="flex w-full flex-col items-start justify-start md:w-3/5">
              <h2 className="mb-4 text-[8vw] font-medium tracking-[-0.08rem] md:text-[10vw] md:mb-8 lg:mb-8 lg:text-[4vw]">
                {project.title}
              </h2>
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full"
              />
              <p className="mt-6 max-w-full leading-[1.3] md:max-w-[70%]">
                {project.description}
              </p>
            </div>
          </section>
        ))}

        {/* Outro Section */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-[#1a1a1a] px-[8vw] text-center text-white">
          <h2 className="flex flex-wrap items-center justify-center text-[4vw] md:text-[8vw] lg:text-[4vw]">
            Happy{' '}
            <span className="mr-[0.8vw] flex items-center font-light text-[bisque]">
              Gaming{' '}
              <svg
                className="h-[5vw] w-[5vw] md:h-[8vw] md:w-[8vw] lg:h-[5vw] lg:w-[5vw]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{' '}
            Out There.
          </h2>
          <p className="mt-4 max-w-200 text-lg leading-[1.4] opacity-80 md:text-base lg:text-xl">
            These games have shaped my gaming journey and left a lasting
            impression. Whether you&apos;re looking for epic adventures or
            challenging gameplay, each of these titles offers something truly
            special. Enjoy exploring these worlds!
          </p>
        </section>
      </main>
    </>
  );
};

export default ProjectShowcase;
