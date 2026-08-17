import {
  Droplets,
  Leaf,
  Recycle,
  ShieldCheck,
  Zap,
} from 'lucide-react';

import { brand, sustainability } from '../data/siteData';

const sustainabilityIcons = [
  Droplets,
  Zap,
  Recycle,
];

export default function SustainabilitySection() {
  const items = sustainability || [];

  return (
    <section
      id="sustainability"
      className="border-y border-stone-200 bg-ink py-16 text-white sm:py-24"
    >
      <div className="container-shell">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ===================================================
              LEFT COLUMN
          ==================================================== */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-teal">
              <Leaf
                size={14}
                aria-hidden="true"
              />

              Sustainability
            </div>

            {/* Heading */}
            <h2 className="display-title mt-5 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Greener production is part of the product story.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
              {brand?.name || 'Leatherlix'} describes sustainability through water reuse,
              cleaner chemistry, process control, traceability, energy
              efficiency and continued development of lower-impact leather
              production.
            </p>

            {/* Highlight Box */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-extrabold text-white">
                    Environmental focus
                  </p>

                  <p className="mt-1 text-xs leading-5 text-stone-300 sm:text-sm">
                    Sustainability claims on this page are presented as
                    supplier-published information and should remain
                    attributed to {brand?.name || 'Leatherlix'} in commercial communications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT COLUMN
          ==================================================== */}
          <div className="space-y-4">
            {items.map((item, index) => {
              // Fallback to Leaf icon if array index exceeds predefined icons
              const IconComponent = sustainabilityIcons[index] || Leaf;

              return (
                <article
                  key={item.title || index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <IconComponent
                        size={20}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-base font-extrabold text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-stone-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ENVIRONMENTAL PRINCIPLES
        ====================================================== */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal">
              01
            </p>

            <h3 className="mt-2 text-sm font-extrabold text-white">
              Reduce
            </h3>

            <p className="mt-1 text-xs leading-5 text-stone-400">
              Reduce unnecessary resource consumption through controlled
              processes and cleaner production methods.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal">
              02
            </p>

            <h3 className="mt-2 text-sm font-extrabold text-white">
              Reuse
            </h3>

            <p className="mt-1 text-xs leading-5 text-stone-400">
              Reuse treated water and other resources where the manufacturing
              process allows.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal">
              03
            </p>

            <h3 className="mt-2 text-sm font-extrabold text-white">
              Improve
            </h3>

            <p className="mt-1 text-xs leading-5 text-stone-400">
              Continue developing lower-impact chemistry, traceability and
              production controls.
            </p>
          </div>
        </div>

        {/* =====================================================
            CLOSING MESSAGE
        ====================================================== */}
        <div className="mt-10 rounded-2xl border border-teal/20 bg-teal/10 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Leaf
              size={19}
              className="mt-0.5 shrink-0 text-teal"
              aria-hidden="true"
            />

            <p className="text-xs leading-5 text-stone-200 sm:text-sm">
              For final commercial quotations, sustainability specifications,
              testing documents and environmental certificates should be
              confirmed for the exact article and production requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
