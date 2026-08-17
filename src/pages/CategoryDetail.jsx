import { ArrowLeft, ExternalLink, Mail, ShieldCheck } from 'lucide-react';

import {
  brand,
  categories,
  catalogLinks,
} from '../data/siteData';

/*
  This component is intentionally NOT using react-router-dom.
  Your current project uses same-page anchor navigation.
  
  Use this component by passing:
  <CategoryDetail categoryId="belts" />
*/

const catalogGroupByCategory = {
  american: 'American Lifestyle',
  fashion: 'Fashion Articles',
  upholstery: 'Upholstery',
  belts: 'Belts',
  printed: 'Other Collections',
  lining: 'Other Collections',
  'auto-aviation': 'Other Collections',
};

export default function CategoryDetail({
  categoryId,
  onBack,
}) {
  const category = categories.find(
    (item) => item.id === categoryId,
  );

  /*
    Safe fallback when a wrong / missing category ID is supplied.
  */
  if (!category) {
    return (
      <section className="min-h-[60vh] bg-cream px-4 py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold text-ink">
            Category Not Found
          </h2>

          <p className="mt-3 text-sm leading-6 text-stone-600">
            The requested leather category could not be found.
          </p>

          <a
            href="#collections"
            onClick={onBack}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
            />

            Back to Collections
          </a>
        </div>
      </section>
    );
  }

  /*
    Find the matching catalogue group safely.
  */
  const catalogGroupName =
    catalogGroupByCategory[category.id];

  const relatedCatalogs = catalogLinks.find(
    (catalog) => catalog.group === catalogGroupName,
  );

  return (
    <section className="bg-cream px-4 py-16 text-ink sm:py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* =====================================================
            BACK LINK
        ====================================================== */}
        <a
          href="#collections"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-tealDark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        >
          <ArrowLeft
            size={17}
            aria-hidden="true"
          />

          Back to Collections
        </a>

        {/* =====================================================
            HEADER / MAIN PRODUCT CARD
        ====================================================== */}
        <div className="overflow-hidden rounded-[28px] border border-line bg-paper shadow-card">
          {/* Image */}
          <div className="relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[470px]">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover"
              loading="eager"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
              <span className="inline-flex rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-teal backdrop-blur">
                {category.short}
              </span>

              <h1 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {category.name}
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              {category.description}
            </p>

            {/* =================================================
                SUPPLY INFORMATION
            ================================================== */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InfoItem
                label="Supplier"
                value={brand.name}
              />

              <InfoItem
                label="Manufacturer"
                value={brand.manufacturer}
              />

              <InfoItem
                label="Category"
                value={category.name}
              />

              <InfoItem
                label="Inquiry"
                value="Available on request"
              />
            </div>

            {/* =================================================
                MANUFACTURER REFERENCE
            ================================================== */}
            <div className="mt-8 rounded-2xl border border-teal/15 bg-teal/5 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-extrabold text-ink">
                    Manufacturer Reference
                  </p>

                  <p className="mt-1 text-xs leading-5 text-stone-600 sm:text-sm">
                    Product information and manufacturer credentials should be
                    confirmed for the exact article, finish and production
                    requirement before commercial order placement.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                CATALOGUES
            ================================================== */}
            <div className="mt-8">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-coral">
                    Related Catalogues
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-ink">
                    {relatedCatalogs
                      ? relatedCatalogs.group
                      : 'Catalogue Information'}
                  </h2>
                </div>

                <a
                  href={category.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-teal transition-colors hover:text-tealDark"
                >
                  Open Manufacturer Page

                  <ExternalLink
                    size={14}
                    aria-hidden="true"
                  />
                </a>
              </div>

              {relatedCatalogs &&
              Array.isArray(relatedCatalogs.items) &&
              relatedCatalogs.items.length > 0 ? (
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {relatedCatalogs.items.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-paper p-4 transition-all duration-200 hover:border-teal/30 hover:bg-cream"
                    >
                      <div>
                        <p className="text-sm font-bold text-ink">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-400">
                          Manufacturer catalogue
                        </p>
                      </div>

                      <ExternalLink
                        size={16}
                        className="shrink-0 text-stone-400 transition-colors group-hover:text-teal"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-xl border border-line bg-paper p-5">
                  <p className="text-sm leading-6 text-stone-600">
                    No dedicated catalogue group is mapped for this category.
                    Contact us directly for the relevant article or
                    specification documentation.
                  </p>
                </div>
              )}
            </div>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="mt-8 rounded-[24px] bg-ink p-6 text-center sm:p-8">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Need {category.name}?
              </h2>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-stone-300">
                Share your thickness, finish, color, application and expected
                quantity so the appropriate sourcing conversation can begin.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  onClick={onBack}
                  className="inline-flex items-center justify-center rounded-xl bg-teal px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-ink"
                >
                  Request Samples &amp; Quote
                </a>

                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-teal hover:text-teal"
                >
                  <Mail
                    size={14}
                    aria-hidden="true"
                  />

                  Email Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE INFORMATION ITEM
========================================================= */

function InfoItem({ label, value }) {
  return (
    <div className="rounded-xl border border-line bg-cream p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-stone-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold leading-5 text-ink">
        {value}
      </p>
    </div>
  );
}
