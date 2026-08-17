import {
  ArrowRight,
  Award,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

import {
  brand,
  heroFacts,
} from '../data/siteData';

// Inline LWG Gold Certification Badge (Zero external file dependency)
function LwgGoldBadge() {
  return (
    <svg
      viewBox="0 0 170 100"
      className="h-16 w-auto sm:h-20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LWG Gold Rated Certification Badge"
    >
      <defs>
        <linearGradient id="lwgGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#82C91E" />
          <stop offset="100%" stopColor="#4D7C0F" />
        </linearGradient>
        <linearGradient id="lwgGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>
      </defs>

      {/* Leaf Emblem */}
      <g transform="translate(5, 5)">
        <path
          d="M32 75 C30 70 24 62 20 59 C16 56 9 55 6 48 C3 41 7 36 7 29 C7 22 2 18 5 10 C8 2 17 1 22 0 C20 6 18 12 21 16 C24 20 29 18 32 24 C35 30 29 35 31 42 C32 49 39 50 38 57 C36 64 31 69 32 75 Z"
          fill="url(#lwgGreen)"
        />
        <path
          d="M32 75 L42 86 M21 16 C17 21 13 26 8 29 M31 42 C24 45 19 47 6 48 M32 57 C25 60 21 64 20 59"
          stroke="#3F6212"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Text Group */}
      <g transform="translate(52, 0)">
        <text
          x="0"
          y="28"
          fill="url(#lwgGold)"
          fontSize="22"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          GOLD
        </text>
        <text
          x="0"
          y="50"
          fill="url(#lwgGold)"
          fontSize="22"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          RATED
        </text>
        <text
          x="1"
          y="67"
          fill="#334155"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.4"
        >
          AUDITED
        </text>
        <text
          x="1"
          y="77"
          fill="#334155"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.4"
        >
          AGAINST LWG
        </text>
        <text
          x="1"
          y="87"
          fill="#334155"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.4"
        >
          STANDARDS
        </text>
      </g>
    </svg>
  );
}

export default function Hero() {
  const brandName = brand?.name || 'Leatherlix';
  const supplierLabel = brand?.supplierLabel || 'PREMIUM LEATHER SUPPLIER';
  const factsList = heroFacts || [];

  return (
    <section
      id="top"
      className="container-shell pt-9 sm:pt-14"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        {/* Left Content */}
        <div className="reveal">
          <span className="inline-flex max-w-full rounded-full border border-teal/20 bg-teal/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-teal">
            {supplierLabel}
          </span>

          <h1 className="display-title mt-5 max-w-[650px] text-5xl font-extrabold leading-[0.96] text-ink sm:text-6xl lg:text-[74px]">
            Premium leather for the products people keep.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            {brandName} provides a sourcing destination for premium leather
            applications across footwear, belts, fashion articles, lining,
            upholstery, printed leather, automotive and aviation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-soft transition-all duration-300 hover:bg-tealDark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-cream"
            >
              Explore All Collections
              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-800 transition-all duration-300 hover:border-teal hover:text-teal hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-cream"
            >
              Request Swatches
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-stone-600">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                size={15}
                className="shrink-0 text-teal"
                aria-hidden="true"
              />
              Supplier-led sourcing
            </span>

            <span className="inline-flex items-center gap-2">
              <Award
                size={15}
                className="shrink-0 text-teal"
                aria-hidden="true"
              />
              Verified credentials
            </span>

            <span className="inline-flex items-center gap-2">
              <Globe2
                size={15}
                className="shrink-0 text-teal"
                aria-hidden="true"
              />
              Global applications
            </span>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="relative">
          <div
            className="absolute -inset-5 rounded-[34px] bg-teal/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative h-[360px] overflow-hidden rounded-[30px] bg-warm shadow-card sm:h-[470px] lg:h-[530px]">
            <img
              src="/assets/belt-hero.jpg"
              alt="Premium belting leather raw product display"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl border border-white/60 bg-white/90 p-4 shadow-soft backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal">
              {brandName} Belting Leather
            </p>

            <p className="mt-1 text-sm font-bold leading-5 text-ink">
              River Bison · Single Butts · Double Butts · Doze
            </p>
          </div>
        </div>
      </div>

      {/* Executive Quick Facts Grid */}
      <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-stone-200/80 rounded-2xl border border-stone-200/80 bg-white/70 shadow-sm backdrop-blur-sm sm:grid-cols-4 sm:divide-y-0">
        {factsList.map((fact, index) => {
          const isGoldRating =
            fact.value?.toLowerCase().includes('gold') ||
            fact.label?.toLowerCase().includes('lwg');

          return (
            <div
              key={fact.label || index}
              className="group relative flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:bg-white/90 sm:p-8"
            >
              {isGoldRating ? (
                /* Pure Inline SVG LWG Gold Badge */
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-1 transition-transform duration-300 group-hover:scale-105">
                    <LwgGoldBadge />
                  </div>
                  <p className="mt-1 max-w-[170px] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-stone-500">
                    {fact.label}
                  </p>
                </div>
              ) : (
                /* Clean Stat Numbers */
                <div className="flex flex-col items-center justify-center">
                  <span className="text-3xl font-black tracking-tight text-teal transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
                    {fact.value}
                  </span>
                  <p className="mt-2 max-w-[170px] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-stone-500">
                    {fact.label}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
