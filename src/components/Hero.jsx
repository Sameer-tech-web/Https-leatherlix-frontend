import {
  ArrowRight,
  Award,
  Globe2,
  Ruler,
  ShieldCheck,
} from 'lucide-react';

import {
  brand,
  heroFacts,
} from '../data/siteData';

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

        {/* Hero Image Block */}
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

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-stone-200/80 rounded-2xl border border-stone-200/80 bg-white shadow-sm sm:grid-cols-4 sm:divide-y-0">
        
        {/* 1. Premium Block */}
        <div className="flex flex-col items-center justify-center p-6 text-center sm:p-8">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
            <Award className="h-5 w-5 text-teal" />
          </div>
          <span className="text-3xl font-black tracking-tight text-teal sm:text-4xl">
            {factsList[0]?.value || 'Premium'}
          </span>
          <p className="mt-2 max-w-[170px] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-stone-500">
            {factsList[0]?.label || 'LEATHERLIX OPERATIONAL STANDARD'}
          </p>
        </div>

        {/* 2. 54+ Block */}
        <div className="flex flex-col items-center justify-center p-6 text-center sm:p-8">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
            <Globe2 className="h-5 w-5 text-teal" />
          </div>
          <span className="text-3xl font-black tracking-tight text-teal sm:text-4xl">
            {factsList[1]?.value || '54+'}
          </span>
          <p className="mt-2 max-w-[170px] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-stone-500">
            {factsList[1]?.label || 'COUNTRIES / GLOBAL REACH'}
          </p>
        </div>

        {/* 3. 3.5–4.0 mm Block */}
        <div className="flex flex-col items-center justify-center p-6 text-center sm:p-8">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
            <Ruler className="h-5 w-5 text-teal" />
          </div>
          <span className="text-3xl font-black tracking-tight text-teal sm:text-4xl">
            {factsList[2]?.value || '3.5–4.0 mm'}
          </span>
          <p className="mt-2 max-w-[170px] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-stone-500">
            {factsList[2]?.label || 'AVERAGE BELT LEATHER THICKNESS'}
          </p>
        </div>

        {/* 4. Gold Certificate Image Block */}
        <div className="flex flex-col items-center justify-center p-4 text-center sm:p-6">
          <img
            src="/assets/lwg-gold.svg.jpg"
            alt="LWG Gold Certificate"
            className="h-20 w-auto object-contain sm:h-24"
          />
          <p className="mt-2 max-w-[170px] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-stone-500">
            {factsList[3]?.label || 'LWG ENVIRONMENTAL RATING'}
          </p>
        </div>

      </div>
    </section>
  );
}
