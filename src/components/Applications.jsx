import { useState } from 'react';
import { CheckCircle2, X, ArrowRight, ShieldCheck } from 'lucide-react';

const applicationsData = [
  {
    id: 'footwear',
    title: 'Footwear',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    substance: '1.2 - 2.0 mm',
    rawOrigin: 'Cow / Buffalo Hides',
    finishType: 'Aniline / Semi-Aniline',
    compliance: 'LWG Certified, REACH Compliant',
    features: [
      'High tensile and tear resistance for long-lasting shoes',
      'Breathable leather structure for maximum foot comfort',
      'Excellent buffing and burnishing properties',
    ],
  },
  {
    id: 'bags',
    title: 'Bags & Leather Goods',
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    substance: '1.1 - 1.6 mm',
    rawOrigin: 'Cow Calf / Buffalo',
    finishType: 'Nappa / Pull-Up / Embossed',
    compliance: 'LWG Silver / Gold Standard',
    features: [
      'Supple and soft touch ideal for luxury goods',
      'Perfect edge-painting and fine stitching quality',
      'Rich natural grain texture and aging patina',
    ],
  },
  {
    id: 'belts',
    title: 'Belts',
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    image:
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&auto=format&fit=crop&q=80',
    substance: '3.2 - 4.0 mm',
    rawOrigin: 'Buffalo / Heavy Cow Single Butts',
    finishType: 'Vegetable Tanned / Drum Dyed',
    compliance: 'Heavy Duty Industrial Grade',
    features: [
      'Zero elongation or stretch under tension',
      'Smooth, burnishable raw edges',
      'Consistent thickness throughout single/double butts',
    ],
  },
  {
    id: 'lining',
    title: 'Lining Leather',
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80',
    substance: '0.7 - 1.1 mm',
    rawOrigin: 'Cow / Goat / Buffalo',
    finishType: 'Drum Dyed / Milled',
    compliance: 'Sweat Resistant ISO 11641',
    features: [
      'Ultra-soft feel for interior comfort',
      'High moisture absorption and quick drying',
      'Colorfast finish to prevent dye transfer',
    ],
  },
  {
    id: 'furniture',
    title: 'Furniture & Upholstery',
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
    substance: '0.9 - 1.4 mm',
    rawOrigin: 'European Bovine Hides',
    finishType: 'Pigmented / Semi-Aniline',
    compliance: 'BS 5852 Fire Retardant Standard',
    features: [
      'Large average hide yield (45-55 sq. ft.)',
      'High resistance to UV light fading and abrasion',
      'Easy-to-clean protective coating',
    ],
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description:
      'Leather for automotive upholstery and interior applications.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    substance: '1.1 - 1.4 mm',
    rawOrigin: 'Selected Premium Bovine',
    finishType: 'UV Protected / Low-Fogging',
    compliance: 'ISO 105-B02 OEM Certified',
    features: [
      'Extreme temperature and crack resistance',
      'Low VOC emissions for interior air quality',
      'Scratch and scuff-resistant surface finish',
    ],
  },
  {
    id: 'aviation',
    title: 'Aviation',
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    image:
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=800&auto=format&fit=crop&q=80',
    substance: '0.8 - 1.2 mm',
    rawOrigin: 'Lightweight Bovine Hides',
    finishType: 'Flame Retardant Aniline',
    compliance: 'FAR 25.853 (a) Aviation Certified',
    features: [
      'Passes strict 12-second vertical burn tests',
      'Lightweight formulation to minimize payload weight',
      'High abrasion resistance for frequent commercial use',
    ],
  },
  {
    id: 'printed',
    title: 'Printed Leather Goods',
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    substance: '1.2 - 1.8 mm',
    rawOrigin: 'Cow / Buffalo Hides',
    finishType: 'Embossed / Foil Stamped / Printed',
    compliance: 'Fashion Grade Custom Specs',
    features: [
      'Custom embossed textures and animal prints',
      'Deep, consistent plate impression depth',
      'Vibrant color retention across production batches',
    ],
  },
];

export default function Applications() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="applications" className="container-shell py-12 sm:py-16">
      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applicationsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal/30 hover:shadow-md cursor-pointer"
          >
            <div>
              {/* Category Online Image Box */}
              <div className="mb-5 h-12 w-12 overflow-hidden rounded-xl border border-stone-100 bg-stone-100 shadow-inner transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-ink">{item.title}</h3>

              {/* Short Description */}
              <p className="mt-2.5 text-xs leading-5 text-stone-600">
                {item.description}
              </p>
            </div>

            {/* Bottom Button */}
            <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal group-hover:underline">
                View Manufacturer Collection
              </span>
              <CheckCircle2 className="h-4 w-4 text-teal" />
            </div>
          </div>
        ))}
      </div>

      {/* Side-by-Side Modal Popup (Image + Full Info) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-stone-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-stone-600 shadow hover:bg-white hover:text-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Large Product Image */}
              <div className="relative h-64 md:h-full min-h-[320px] bg-stone-100">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                  <span className="rounded-md bg-teal px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">
                    Leather Specification
                  </span>
                </div>
              </div>

              {/* Right Side: Information & Specs */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-ink">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-stone-600">
                    {selectedItem.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="mt-5 grid grid-cols-2 gap-2 border-y border-stone-100 py-4 text-xs">
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-stone-400">
                        Thickness
                      </span>
                      <span className="font-semibold text-stone-800">
                        {selectedItem.substance}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-stone-400">
                        Raw Origin
                      </span>
                      <span className="font-semibold text-stone-800">
                        {selectedItem.rawOrigin}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="block text-[10px] font-bold uppercase text-stone-400">
                        Finish Type
                      </span>
                      <span className="font-semibold text-stone-800">
                        {selectedItem.finishType}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="block text-[10px] font-bold uppercase text-stone-400">
                        Standards
                      </span>
                      <span className="font-semibold text-stone-800">
                        {selectedItem.compliance}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-4">
                    <h4 className="flex items-center text-[11px] font-bold uppercase tracking-wider text-teal">
                      <ShieldCheck className="mr-1.5 h-4 w-4" />
                      Key Product Features
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {selectedItem.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs text-stone-700 leading-normal"
                        >
                          <span className="mr-2 text-teal font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 inline-flex items-center justify-center rounded-xl bg-teal py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 transition-opacity"
                  >
                    Inquire Now
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="rounded-xl border border-stone-200 px-4 py-2.5 text-xs font-bold uppercase text-stone-600 hover:bg-stone-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
