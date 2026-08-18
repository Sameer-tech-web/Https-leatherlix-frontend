import React, { useState } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const applicationsData = [
  {
    id: 'footwear',
    title: 'Footwear',
    category: 'COW & RIVER BISON UPPER LEATHERS',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'Cow & River Bison Hides',
      thickness: '1.2 - 2.0 mm (Customizable)',
      tannage: 'Chrome / Semi-Vegetable Re-tanned',
      finish: 'Aniline, Pull-Up, Oil-Wax & Crazy Horse',
      cuttingYield: 'High Cutting Efficiency (B+/A Grade)',
      substance: 'Firm to Medium Soft Body',
    },
  },
  {
    id: 'bags',
    title: 'Bags & Leather Goods',
    category: 'FINE LEATHER ACCESSORIES',
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'Cow Calf & Buffalo Hides',
      thickness: '1.1 - 1.6 mm',
      tannage: 'Vegetable & Chrome Tanned',
      finish: 'Nappa, Smooth, Pull-Up & Embossed',
      cuttingYield: 'Premium Uniform Grade (A Grade)',
      substance: 'Soft to Medium Body',
    },
  },
  {
    id: 'belts',
    title: 'Belts',
    category: 'HEAVY SUBSTANCE LEATHERS',
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    image:
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'Heavy Buffalo & Cow Single Butts',
      thickness: '3.2 - 4.0 mm',
      tannage: '100% Vegetable Tanned',
      finish: 'Drum Dyed / Aniline Finish',
      cuttingYield: 'Maximum Strap Yield',
      substance: 'Firm / Zero Stretch',
    },
  },
  {
    id: 'lining',
    title: 'Lining Leather',
    category: 'INTERIOR LINING MATERIALS',
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'Cow, Goat & Buffalo',
      thickness: '0.7 - 1.1 mm',
      tannage: 'Chrome Free / Drum Dyed',
      finish: 'Soft Milled / Semi-Aniline',
      cuttingYield: 'High Yield Lining Standard',
      substance: 'Ultra Soft & Flexible Body',
    },
  },
  {
    id: 'furniture',
    title: 'Furniture & Upholstery',
    category: 'WHOLE-HIDE UPHOLSTERY',
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'European Bovine Hides',
      thickness: '0.9 - 1.4 mm',
      tannage: 'Chrome Tanned / Pigmented',
      finish: 'Stain Resistant / Semi-Aniline',
      cuttingYield: 'Large Average Hide Size (45-55 sq.ft.)',
      substance: 'Medium Soft Body',
    },
  },
  {
    id: 'automotive',
    title: 'Automotive',
    category: 'CABIN UPHOLSTERY LEATHERS',
    description:
      'Leather for automotive upholstery and interior applications.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'Selected Bovine Hides',
      thickness: '1.1 - 1.4 mm',
      tannage: 'Low-Fogging Automotive Grade',
      finish: 'UV-Protected Protective Topcoat',
      cuttingYield: 'OEM Grade Efficiency',
      substance: 'Supple & Scuff Resistant Body',
    },
  },
  {
    id: 'aviation',
    title: 'Aviation',
    category: 'CERTIFIED AIRCRAFT LEATHERS',
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    image:
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'Lightweight Bovine',
      thickness: '0.8 - 1.2 mm',
      tannage: 'Flame Retardant Aniline',
      finish: 'FAR 25.853 Burn Certified',
      cuttingYield: 'Precision Aviation Grade',
      substance: 'Lightweight & Flexible Body',
    },
  },
  {
    id: 'printed',
    title: 'Printed Leather Goods',
    category: 'EMBOSSED FASHION LEATHERS',
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    specs: {
      origin: 'Cow & Buffalo Hides',
      thickness: '1.2 - 1.8 mm',
      tannage: 'Chrome & Vegetable Tanned',
      finish: 'Embossed Pattern / Foil Stamped',
      cuttingYield: 'Uniform Repeat Pattern Grade',
      substance: 'Medium Firm Body',
    },
  },
];

export default function Applications() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Jab user click back karega
  if (selectedProduct) {
    return (
      <section className="container-shell py-12 sm:py-16">
        <button
          onClick={() => setSelectedProduct(null)}
          className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal hover:underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Collections
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Selected Product Image */}
          <div className="overflow-hidden rounded-3xl bg-stone-100 shadow-md">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-[420px] w-full object-cover"
            />
          </div>

          {/* Dynamic Technical Specs Table */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600">
              {selectedProduct.category}
            </span>
            <h2 className="mt-1 text-3xl font-bold text-ink">
              {selectedProduct.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              {selectedProduct.description}
            </p>

            {/* Specifications Card */}
            <div className="mt-6 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal mb-4 flex items-center gap-2">
                Technical Specifications
              </h3>

              <div className="divide-y divide-stone-100 text-xs">
                <div className="flex justify-between py-2.5">
                  <span className="text-stone-500">Origin / Raw Material</span>
                  <span className="font-bold text-stone-800">
                    {selectedProduct.specs.origin}
                  </span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-stone-500">Thickness Range</span>
                  <span className="font-bold text-stone-800">
                    {selectedProduct.specs.thickness}
                  </span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-stone-500">Tannage Type</span>
                  <span className="font-bold text-stone-800">
                    {selectedProduct.specs.tannage}
                  </span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-stone-500">Surface Finish</span>
                  <span className="font-bold text-stone-800">
                    {selectedProduct.specs.finish}
                  </span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-stone-500">Cutting Yield</span>
                  <span className="font-bold text-stone-800">
                    {selectedProduct.specs.cuttingYield}
                  </span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-stone-500">Substance & Temper</span>
                  <span className="font-bold text-stone-800">
                    {selectedProduct.specs.substance}
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-teal py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:opacity-90"
            >
              Request Samples / Inquire
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Normal Card Grid View
  return (
    <section id="applications" className="container-shell py-12 sm:py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applicationsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal/30 hover:shadow-md cursor-pointer"
          >
            <div>
              {/* Product Image Box (Replaced SVG Icon with Image) */}
              <div className="mb-5 h-16 w-16 overflow-hidden rounded-xl border border-stone-100 bg-stone-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-ink">{item.title}</h3>

              {/* Description */}
              <p className="mt-2.5 text-xs leading-5 text-stone-600">
                {item.description}
              </p>
            </div>

            {/* View Collection Action */}
            <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal group-hover:underline">
                View Manufacturer Collection
              </span>
              <CheckCircle2 className="h-4 w-4 text-teal" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
