import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const applicationsData = [
  {
    id: 'footwear',
    title: 'Footwear',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Cow & River Bison Upper Leathers',
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
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Fine Leather Accessories',
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
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    image:
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Heavy Substance Leathers',
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
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Interior Lining Materials',
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
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Whole-Hide Upholstery',
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
    description:
      'Leather for automotive upholstery and interior applications.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Cabin Upholstery Leathers',
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
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    image:
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Certified Aircraft Leathers',
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
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    specs: {
      category: 'Embossed Fashion Leathers',
      origin: 'Cow & Buffalo Hides',
      thickness: '1.2 - 1.8 mm',
      tannage: 'Chrome & Vegetable Tanned',
      finish: 'Embossed Pattern / Foil Stamped',
      cuttingYield: 'Uniform Repeat Pattern Grade',
      substance: 'Medium Firm Body',
    },
  },
];

export default function ApplicationsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="applications" className="container-shell py-12 sm:py-16">
      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applicationsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal/30 hover:shadow-md cursor-pointer"
          >
            <div>
              {/* Icon ki jagah direct Image */}
              <div className="mb-4 h-14 w-14 overflow-hidden rounded-xl bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-ink">{item.title}</h3>

              {/* Short Description */}
              <p className="mt-2 text-xs leading-relaxed text-stone-600">
                {item.description}
              </p>
            </div>

            {/* View Manufacturer Collection Button */}
            <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal group-hover:underline">
                View Manufacturer Collection
              </span>
              <CheckCircle2 className="h-4 w-4 text-teal" />
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Info Card / Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header with Image */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="h-32 w-32 rounded-2xl object-cover shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal">
                  {selectedProduct.specs.category}
                </span>
                <h3 className="text-2xl font-bold text-ink mt-1">
                  {selectedProduct.title}
                </h3>
                <p className="mt-2 text-xs text-stone-600">
                  {selectedProduct.description}
                </p>
              </div>
            </div>

            {/* Specifications Details Table */}
            <div className="mt-6 rounded-xl border border-stone-100 bg-stone-50/60 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Material Specifications
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="border-b border-stone-200/50 pb-2">
                  <span className="text-stone-400 block text-[10px]">Origin / Raw Material</span>
                  <span className="font-semibold text-stone-800">{selectedProduct.specs.origin}</span>
                </div>
                <div className="border-b border-stone-200/50 pb-2">
                  <span className="text-stone-400 block text-[10px]">Thickness</span>
                  <span className="font-semibold text-stone-800">{selectedProduct.specs.thickness}</span>
                </div>
                <div className="border-b border-stone-200/50 pb-2">
                  <span className="text-stone-400 block text-[10px]">Tannage</span>
                  <span className="font-semibold text-stone-800">{selectedProduct.specs.tannage}</span>
                </div>
                <div className="border-b border-stone-200/50 pb-2">
                  <span className="text-stone-400 block text-[10px]">Finish</span>
                  <span className="font-semibold text-stone-800">{selectedProduct.specs.finish}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Cutting Yield</span>
                  <span className="font-semibold text-stone-800">{selectedProduct.specs.cuttingYield}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Temper</span>
                  <span className="font-semibold text-stone-800">{selectedProduct.specs.substance}</span>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="rounded-xl border border-stone-200 px-5 py-2.5 text-xs font-semibold text-stone-600 hover:bg-stone-50"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProduct(null)}
                className="rounded-xl bg-teal px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:opacity-90"
              >
                Inquire Article
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
