import React, { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  X,
  Layers,
  Sparkles,
} from 'lucide-react';

import { brand, catalogLinks, beltingCatalog } from '../data/siteData';

export default function CatalogSection() {
  const brandName = brand?.name || 'Leatherlix';
  const catalogsList = catalogLinks || [];

  // Modal State for Digital Swatch Book
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeSwatchColor, setActiveSwatchColor] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    setActiveSwatchColor(null);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setActiveSwatchColor(null);
  };

  return (
    <section
      id="catalog"
      className="border-y border-stone-200 bg-white/45 py-16 sm:py-24"
    >
      <div className="container-shell">
        {/* =========================================================
            1. SECTION HEADER
        ========================================================= */}
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
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>

        {/* =========================================================
            2. NEW FEATURED DIGITAL SWATCH BOOK (VOL. 4)
        ========================================================= */}
        {beltingCatalog && (
          <div id="digital-catalog" className="mt-12 rounded-3xl border border-stone-200 bg-stone-900 p-6 text-stone-100 shadow-card sm:p-8">
            <div className="flex flex-col justify-between gap-4 border-b border-stone-800 pb-6 md:flex-row md:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-teal/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
                  <Sparkles size={14} />
                  <span>Interactive Swatch Book</span>
                </div>
                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl font-serif">
                  {beltingCatalog.title}
                </h3>
                <p className="mt-1 text-sm text-stone-400">
                  {beltingCatalog.subtitle}
                </p>
              </div>

              {/* Specs Badge */}
              <div className="inline-flex items-center gap-4 rounded-xl border border-stone-800 bg-stone-800/60 px-4 py-2 text-xs font-medium text-stone-300">
                <div>
                  <span className="text-stone-500">Cut: </span>
                  <span className="text-amber-400 font-bold">{beltingCatalog.standardSpecs?.size}</span>
                </div>
                <div className="h-3 w-px bg-stone-700" />
                <div>
                  <span className="text-stone-500">Thickness: </span>
                  <span className="text-amber-400 font-bold">{beltingCatalog.standardSpecs?.thickness}</span>
                </div>
              </div>
            </div>

            {/* Grid of 16 Articles */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {beltingCatalog.articles?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openModal(item)}
                  className="group flex cursor-pointer flex-col justify-between rounded-xl border border-stone-800 bg-stone-800/40 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-stone-800/80 hover:shadow-lg"
                >
                  <div>
                    {/* Top Tag */}
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono text-stone-500">PAGE {item.pageNumber}</span>
                      <span className="rounded bg-amber-500/10 px-1.5 py-0.5 font-bold uppercase text-amber-400">
                        {item.mainColorLabel}
                      </span>
                    </div>

                    {/* Image Preview */}
                    <div className="relative mt-2 h-36 overflow-hidden rounded-lg bg-stone-950">
                      <img
                        src={item.mainImage}
                        alt={item.name}
                        className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>

                    <h4 className="mt-3 text-sm font-bold text-white transition-colors group-hover:text-amber-400">
                      {item.name}
                    </h4>
                  </div>

                  {/* Color Swatch Dots */}
                  <div className="mt-3 flex items-center justify-between border-t border-stone-800/80 pt-2">
                    <span className="text-[10px] text-stone-500">Colors:</span>
                    <div className="flex gap-1">
                      {item.swatches?.map((swatch, idx) => (
                        <span
                          key={idx}
                          className="h-3.5 w-3.5 rounded-full border border-stone-700 shadow-sm"
                          style={{ backgroundColor: swatch.color }}
                          title={swatch.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================
            3. STANDARD CATALOGUE GROUPS
        ========================================================= */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

        {/* =========================================================
            4. BUYER LEAD MAGNET BOX
        ========================================================= */}
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

      {/* =========================================================
          5. ARTICLE MODAL DIALOG
      ========================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-stone-700 bg-stone-900 text-stone-100 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Modal Left: Image */}
              <div className="relative h-64 bg-black md:h-full">
                <img
                  src={selectedArticle.mainImage}
                  alt={selectedArticle.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded bg-stone-900/90 px-3 py-1 text-xs text-stone-300 backdrop-blur">
                  Base: {selectedArticle.mainColorLabel}
                </div>
              </div>

              {/* Modal Right: Info */}
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="font-mono text-xs text-amber-500">
                    ARTICLE #{selectedArticle.pageNumber}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {selectedArticle.name}
                  </h3>

                  {/* Specs */}
                  <div className="mt-4 space-y-2 text-xs text-stone-300">
                    <div className="flex justify-between border-b border-stone-800 pb-1.5">
                      <span className="text-stone-500">Standard Cut:</span>
                      <span className="font-medium">{beltingCatalog.standardSpecs?.size}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1.5">
                      <span className="text-stone-500">Thickness Range:</span>
                      <span className="font-medium">{beltingCatalog.standardSpecs?.thickness}</span>
                    </div>
                  </div>

                  {/* Color Swatches */}
                  <div className="mt-5">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Available Color Swatches
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {selectedArticle.swatches?.map((swatch, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveSwatchColor(swatch.name)}
                          className={`flex items-center gap-2 rounded-lg border p-2 text-left text-xs transition-all ${
                            activeSwatchColor === swatch.name
                              ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                              : 'border-stone-800 bg-stone-800/50 text-stone-300 hover:border-stone-700'
                          }`}
                        >
                          <span
                            className="h-3.5 w-3.5 shrink-0 rounded-full border border-stone-600"
                            style={{ backgroundColor: swatch.color }}
                          />
                          <span className="truncate">{swatch.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inquiry Action Button */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="block w-full rounded-xl bg-amber-500 py-3 text-center text-xs font-bold uppercase tracking-wider text-stone-950 transition-colors hover:bg-amber-400"
                  >
                    Inquire About {selectedArticle.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
