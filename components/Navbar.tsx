'use client';

const Navbar = () => {
  return (
    <nav className="nav absolute top-0 w-full py-5 px-6 flex items-center gap-6 will-change-transform">
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
          className="flex justify-center items-center text-base w-37.5 h-10 text-black bg-white rounded-[40px]"
        >
          Learn more
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
