import {
  ArrowRight,
  Award,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

import { brand, heroFacts } from '../data/siteData';

export default function Hero() {
  return (
    <section
      id="top"
      className="container-shell pt-9 sm:pt-14"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="reveal">
          {/* Supplier Badge */}
          <span className="inline-flex max-w-full rounded-full border border-teal/20 bg-teal/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-teal">
            {brand?.supplierLabel || 'B2B Wholesale Leather Supplier'}
          </span>

          {/* Main Heading */}
          <h1 className="display-title mt-5 max-w-[650px] text-5xl font-extrabold leading-[0.96] text-ink sm:text-6xl lg:text-[74px]">
            Premium leather for the products people keep.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Leatherlix provides a sourcing destination for premium
            leather applications across footwear, belts, fashion
            articles, lining, upholstery, printed leather,
            automotive and aviation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-soft transition-colors duration-200 hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-cream"
            >
              Explore All Collections

              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-800 transition-colors duration-200 hover:border-teal hover:text-teal focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-cream"
            >
              Request Swatches
            </a>
          </div>

          {/* Trust Points */}
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

              KTM published credentials
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

        {/* =====================================================
            RIGHT HERO IMAGE
        ====================================================== */}
        <div className="relative">
          {/* Decorative Glow */}
          <div
            className="absolute -inset-5 rounded-[34px] bg-teal/5 blur-3xl"
            aria-hidden="true"
          />

          {/* Main Hero Image */}
          <div className="relative h-[360px] overflow-hidden rounded-[30px] bg-warm shadow-card sm:h-[470px] lg:h-[530px]">
            <img
              src="/assets/belt-hero.jpg"
              alt="Premium finished leather craftsmanship"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Image Information Card */}
          <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl border border-white/60 bg-white/90 p-4 shadow-soft backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal">
              KTM belting leather
            </p>

            <p className="mt-1 text-sm font-bold leading-5 text-ink">
              River Bison · Single Butts · Double Butts · Doze
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          QUICK FACTS
      ====================================================== */}
      <div className="mt-12 grid grid-cols-2 border-y border-stone-200 bg-white/45 sm:grid-cols-4">
        {heroFacts.map((fact, index) => {
          // Robust check for object vs tuple array format
          const value = Array.isArray(fact) ? fact[0] : fact.value;
          const label = Array.isArray(fact) ? fact[1] : fact.label;

          return (
            <div
              key={label || index}
              className="border-b border-r border-stone-200 p-4 text-center last:border-r-0 sm:border-b-0 sm:p-6"
            >
              <p className="text-2xl font-extrabold tracking-[-0.04em] text-teal sm:text-3xl">
                {value}
              </p>

              <p className="mx-auto mt-1 max-w-[170px] text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-stone-500">
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
