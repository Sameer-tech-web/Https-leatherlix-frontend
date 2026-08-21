import {
  ArrowUpRight,
  ExternalLink,
  FileText,
} from 'lucide-react';

import { brand, catalogLinks } from '../data/siteData';

export default function CatalogSection() {
  const brandName = brand?.name || 'Leatherlix';
  const catalogsList = catalogLinks || [];

  return (
    <section
      id="catalog"
      className="border-y border-stone-200 bg-white/45 py-16 sm:py-24"
    >
      <div className="container-shell">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
              Product Catalogues
            </p>

            <h2 className="display-title mt-2 text-4xl font-extrabold text-ink sm:text-5xl">
              Explore the catalogue for every major collection.
            </h2>

            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
              Browse the available {brandName} catalogue groups and view the relevant collection details.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-teal px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-soft transition-colors duration-200 hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 sm:self-auto"
          >
            <span>Request Catalogue PDF</span>
            <ExternalLink
              size={15}
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Catalogue Groups */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {catalogsList.map((catalog) => {
            const items = catalog?.items || [];
            const primaryItem = items[0];

            return (
              <article
                key={catalog.group}
                className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/20 hover:shadow-card"
              >
                <div>
                  {/* Group Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/8 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <FileText
                        size={20}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-stone-400">
                        Collection
                      </p>

                      <h3 className="text-base font-extrabold text-ink sm:text-lg">
                        {catalog.group}
                      </h3>
                    </div>
                  </div>

                  {/* Links List */}
                  <div className="mt-5 space-y-2.5">
                    {items.map((item) => (
                      <a
                        key={item.url || item.title}
                        href={item.url || '#contact'}
                        target={item.url?.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="group/link flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-cream px-4 py-3 text-xs font-semibold text-stone-700 transition-all duration-200 hover:border-teal/25 hover:bg-white hover:text-teal focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-1"
                      >
                        <span className="leading-5">{item.title}</span>

                        <ExternalLink
                          size={14}
                          className="shrink-0 text-stone-400 transition-colors duration-200 group-hover/link:text-teal"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Footer Main Action Link */}
                {primaryItem && (
                  <div className="mt-5 border-t border-stone-200 pt-4">
                    <a
                      href={primaryItem.url || '#contact'}
                      target={primaryItem.url?.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-teal transition-colors duration-200 hover:text-tealDark"
                    >
                      Explore Collection Overview
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Buyer Lead Magnet Box */}
        <div className="mt-10 rounded-2xl border border-teal/15 bg-teal/5 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <FileText
                size={19}
                className="mt-0.5 shrink-0 text-teal"
                aria-hidden="true"
              />

              <div>
                <h3 className="text-sm font-extrabold text-ink">
                  Looking for a specific article?
                </h3>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-stone-600 sm:text-sm">
                  Tell us the product category, article name, thickness, finish,
                  color and expected quantity and we can use the relevant
                  catalogue as the starting point for your sourcing conversation.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-teal bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-teal transition-colors duration-200 hover:bg-teal hover:text-white focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
            >
              Request Assistance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
