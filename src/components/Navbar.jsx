import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { brand, navLinks } from '../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((currentState) => !currentState);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/90 bg-cream/95 backdrop-blur-md">
      <div className="container-shell flex h-[74px] items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          onClick={closeMobileMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label={`${brand.name} home`}
        >
          <span className="shrink-0 text-[29px] font-extrabold tracking-[-0.06em] text-teal sm:text-[30px]">
            {brand.name}
          </span>

          <span className="hidden border-l border-stone-300 pl-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500 sm:block">
            Premium Leather
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-6"
          aria-label="Primary navigation"
        >
          {navLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.14em] text-stone-700 transition-colors duration-200 hover:text-teal focus:outline-none focus-visible:text-teal"
            >
              {name}
            </a>
          ))}

          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-teal px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-soft transition-colors duration-200 hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-cream"
          >
            Request Samples
          </a>
        </nav>

        {/* Mobile Menu Button (Fixed lg:hidden breakpoint match) */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={
            mobileMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-stone-700 transition-colors duration-200 hover:bg-white hover:text-teal focus:outline-none focus:ring-2 focus:ring-teal lg:hidden"
        >
          {mobileMenuOpen ? (
            <X
              size={22}
              strokeWidth={2}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={22}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-stone-200 bg-cream lg:hidden"
        >
          <nav
            className="container-shell flex flex-col py-3"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ name, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMobileMenu}
                className="border-b border-stone-200 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-stone-700 transition-colors duration-200 hover:text-teal focus:outline-none focus-visible:text-teal"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-4 rounded-full bg-teal px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-soft transition-colors duration-200 hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-cream"
            >
              Request Samples
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
