import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Car,
  Footprints,
  Printer,
  Sofa,
} from 'lucide-react';

import { applications, categories } from '../data/siteData';

// Application ID to Lucide Icon mapping
const applicationIcons = {
  footwear: Footprints,
  bags: BriefcaseBusiness,
  belting: BadgeCheck,
  lining: BriefcaseBusiness,
  furniture: Sofa,
  automotive: Car,
  aviation: Car,
  printed: Printer,
};

export default function ProductDetailSection() {
  return (
    <section
      id="applications"
      className="container-shell py-16 sm:py-24"
    >
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
            Leather Applications
          </p>

          <h2 className="display-title mt-2 text-4xl font-extrabold text-ink sm:text-5xl">
            Leather selected around the end product.
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
            Different products require different leather structures,
            thicknesses, finishes and performance characteristics. Explore the
            main application areas covered by the collection.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-stone-300 bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-800 transition-colors duration-200 hover:border-teal hover:text-teal focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 sm:self-auto"
        >
          Discuss Your Application
          <ArrowRight
            size={15}
            aria-hidden="true"
          />
        </a>
      </div>

      {/* =====================================================
          APPLICATION GRID
      ====================================================== */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {(applications || []).map((application, index) => {
          // Fallback icon to prevent undefined component runtime crash
          const IconComponent = applicationIcons[application.id] || BadgeCheck;

          const category = (categories || []).find(
            (item) => item.id === application.category,
          );

          return (
            <article
              key={application.id || index}
              className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:shadow-card"
            >
              {/* =================================================
                  ICON
              ================================================== */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                <IconComponent
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}
              <h3 className="mt-4 text-base font-extrabold tracking-[-0.01em] text-ink">
                {application.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}
              <p className="mt-2 flex-1 text-sm leading-6 text-stone-600">
                {application.description}
              </p>

              {/* =================================================
                  CATEGORY REFERENCE
              ================================================== */}
              {category?.page && (
                <a
                  href={category.page}
                  target={category.page.startsWith('http') ? '_blank' : '_self'}
                  rel={category.page.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-teal transition-colors duration-200 hover:text-tealDark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  View Manufacturer Collection

                  <BadgeCheck
                    size={14}
                    aria-hidden="true"
                  />
                </a>
              )}
            </article>
          );
        })}
      </div>

      {/* =====================================================
          FEATURED APPLICATION BAND
      ====================================================== */}
      <div className="mt-10 grid gap-6 rounded-[28px] border border-stone-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal">
            Sourcing Support
          </p>

          <h3 className="display-title mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Not sure which collection fits your product?
          </h3>

          <p className="mt-4 text-sm leading-7 text-stone-600">
            Share your product type, expected volume, thickness, finish, color
            and destination market. The right application category can then be
            used as the starting point for your sourcing discussion.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-soft transition-colors duration-200 hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
          >
            Start Sourcing Discussion

            <ArrowRight
              size={15}
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Right Application Summary */}
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Footwear', 'Upper and boot applications'],
            ['Belts', 'Heavy-duty belting constructions'],
            ['Bags', 'Wallets and premium leather goods'],
            ['Lining', 'Interior and lining leather'],
            ['Furniture', 'Whole-hide upholstery applications'],
            ['Automotive', 'Vehicle interior leather'],
            ['Aviation', 'Seating and aviation interiors'],
            ['Printed', 'Fashion and accessory surfaces'],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              className="rounded-xl border border-stone-200 bg-cream p-4"
            >
              <p className="text-xs font-extrabold text-ink">
                {title}
              </p>

              <p className="mt-1 text-[11px] leading-5 text-stone-500">
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
