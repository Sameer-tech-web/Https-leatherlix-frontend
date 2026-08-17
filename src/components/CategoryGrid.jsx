import { ArrowUpRight } from 'lucide-react';

import { categories } from '../data/siteData';

export default function CategoryGrid() {
  return (
    <section
      id="collections"
      className="container-shell py-16 sm:py-24"
    >
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div className="max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
          Complete Product Portfolio
        </p>

        <h2 className="display-title mt-2 text-4xl font-extrabold text-ink sm:text-5xl">
          Every major leather collection in one sourcing destination.
        </h2>

        <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
          Explore our major leather application categories tailored for global
          supply.
        </p>
      </div>

      {/* =====================================================
          CATEGORY GRID
      ====================================================== */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(categories || []).map((category, index) => {
          const categoryKey =
            category.id ||
            category.slug ||
            category.name ||
            index;

          return (
            <article
              key={categoryKey}
              className="group flex flex-col justify-between overflow-hidden rounded-[25px] border border-stone-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div>
                {/* =================================================
                    CATEGORY IMAGE
                ================================================== */}
                <div className="relative h-[235px] overflow-hidden bg-warm">
                  <img
                    src={
                      category.image ||
                      '/assets/placeholder-leather.jpg'
                    }
                    alt={
                      category.name ||
                      'Leather category'
                    }
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Image Overlay */}
                  {category.short && (
                    <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/50 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-md">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
                        {category.short}
                      </p>
                    </div>
                  )}
                </div>

                {/* =================================================
                    CATEGORY CONTENT
                ================================================== */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold tracking-[-0.02em] text-ink">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* =================================================
                  ACTION
              ================================================== */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] text-teal transition-colors duration-200 hover:text-tealDark focus:outline-none focus-visible:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  Request Information

                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
