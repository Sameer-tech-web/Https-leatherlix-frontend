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

// LWG Gold Badge Component
function LwgBadge() {
  return (
    <svg
      viewBox="0 0 100 60"
      className="h-10 w-auto mb-1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 45 C15 30 10 20 5 15 C15 15 25 25 25 45 Z"
        fill="#65A30D"
      />
      <text
        x="32"
        y="22"
        fill="#D97706"
        fontSize="16"
        fontWeight="900"
        fontFamily="sans-serif"
      >
        GOLD
      </text>
      <text
        x="32"
        y="36"
        fill="#D97706"
        fontSize="12"
        fontWeight="800"
        fontFamily="sans-serif"
      >
        RATED
      </text>
      <text
        x="32"
        y="48"
        fill="#475569"
        fontSize="6"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        LWG AUDITED
      </text>
    </svg>
  );
}

export default function Hero() {
  const brandName = brand?.name || 'Leatherlix';
  const supplierLabel = brand?.supplierLabel || 'PREMIUM LEATHER SUPPLIER';
  const factsList = heroFacts || [];

  return (
    <section id="top" className="container-shell pt-9 sm:pt-14">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-soft transition-all duration-300 hover:bg-tealDark hover:shadow-lg focus:outline-none"
            >
              Explore All Collections
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-800 transition-all duration-300 hover:border-teal hover:text-teal"
            >
              Request Swatches
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-stone-600">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={15} className="shrink-0 text-teal" aria-hidden="true" />
              Supplier-led sourcing
            </span>

            <span className="inline-flex items-center gap-2">
              <Award size={15} className="shrink-0 text-teal" aria-hidden="true" />
              Verified credentials
            </span>

            <span className="inline-flex items-center gap-2">
              <Globe2 size={15} className="shrink-0 text-teal" aria-hidden="true" />
              Global applications
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-[34px] bg-teal/5 blur-3xl" aria-hidden="true" />

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

      {/* Stats Cards Section */}
      <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-stone-200/80 rounded-2xl border border-stone-200/80 bg-white shadow-sm sm:grid-cols-4 sm:divide-y-0">
        {factsList.map((fact, index) => {
          const isGold = index === 3 || String(fact.value).toLowerCase().includes('gold');

          return (
            <div
              key={fact.label || index}
              className="flex flex-col items-center justify-center p-6 text-center sm:p-8"
            >
              {isGold && <LwgBadge />}

              <span
                className={`text-3xl font-black tracking-tight sm:text-4xl ${
                  isGold ? 'text-amber-600' : 'text-teal'
                }`}
              >
                {fact.value}
              </span>

              <p className="mt-2 max-w-[170px] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-stone-500">
                {fact.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
