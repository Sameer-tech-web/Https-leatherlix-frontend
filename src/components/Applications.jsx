import { useState } from 'react';
import { CheckCircle2, X, Shield, Award, Sliders, ArrowRight } from 'lucide-react';

const applicationsData = [
  {
    id: 'footwear',
    title: 'Footwear',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '1.2 - 2.0 mm',
      origin: 'Cow / Buffalo',
      finish: 'Aniline / Semi-Aniline',
      standards: 'LWG Certified, REACH Compliant',
    },
    features: [
      'High tensile and tear strength',
      'Breathable and moisture absorbent',
      'Excellent buffing and polishing qualities',
    ],
  },
  {
    id: 'bags',
    title: 'Bags & Leather Goods',
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '1.1 - 1.6 mm',
      origin: 'Cow Calf / Buffalo',
      finish: 'Nappa / Pull-Up / Embossed',
      standards: 'LWG Silver / Gold Rated',
    },
    features: [
      'Supple and smooth temper',
      'Ideal for edge-painting and precise stitching',
      'Rich natural grain retention',
    ],
  },
  {
    id: 'belts',
    title: 'Belts',
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    image:
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '3.2 - 4.0 mm',
      origin: 'Buffalo / Heavy Cow Single Butts',
      finish: 'Veg-Tanned / Drum Dyed',
      standards: 'Heavy Duty Industrial Spec',
    },
    features: [
      'Zero stretch under heavy load',
      'Clean burnishing capabilities',
      'Solid and uniform thickness across the hide',
    ],
  },
  {
    id: 'lining',
    title: 'Lining Leather',
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '0.7 - 1.1 mm',
      origin: 'Cow / Goat / Buffalo',
      finish: 'Drum Dyed / Milled',
      standards: 'Sweat Resistant ISO 11641',
    },
    features: [
      'Ultra-soft touch and high flexibility',
      'Superior sweat absorption and breathability',
      'Colorfast finish to prevent dye bleed',
    ],
  },
  {
    id: 'furniture',
    title: 'Furniture & Upholstery',
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '0.9 - 1.4 mm',
      origin: 'European / South American Cow',
      finish: 'Pigmented / Semi-Aniline',
      standards: 'BS 5852 Fire Retardant',
    },
    features: [
      'Large hide yield averaging 45-55 sq.ft.',
      'High resistance to abrasion and sunlight fade',
      'Easy to maintain and clean',
    ],
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description:
      'Leather for automotive upholstery and interior applications.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '1.1 - 1.4 mm',
      origin: 'Selected Bovine Hides',
      finish: 'UV-Protected / Low Fogging',
      standards: 'ISO 105-B02 / OEM Specs',
    },
    features: [
      'Extreme thermal and cold-crack resistance',
      'Low VOC emissions for cabin safety',
      'Scuff-resistant coating',
    ],
  },
  {
    id: 'aviation',
    title: 'Aviation',
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    image:
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '0.8 - 1.2 mm',
      origin: 'Lightweight Bovine',
      finish: 'Flame Retardant Aniline',
      standards: 'FAR 25.853 (a) Aviation Certified',
    },
    features: [
      'Passes 12-second vertical burn testing',
      'Lightweight formulation to minimize aircraft payload',
      'High durability under frequent commercial usage',
    ],
  },
  {
    id: 'printed',
    title: 'Printed Leather Goods',
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    specs: {
      substance: '1.2 - 1.8 mm',
      origin: 'Cow / Buffalo Hides',
      finish: 'Embossed / Foil Stamped',
      standards: 'Fashion Grade Custom Specs',
    },
    features: [
      'Custom repeat patterns and animal textures',
      'Consistent plate impression depth',
      'Vibrant color retention',
    ],
  },
];

export default function Applications() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="applications" className="container-shell py-12 sm:py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applicationsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal/30 hover:shadow-md cursor-pointer"
          >
            <div>
              {/* Category Image Box */}
              <div className="mb-5 h-12 w-12 overflow-hidden rounded-xl border border-stone-100 bg-stone-100 shadow-inner transition-transform duration-300 group-hover:scale-110">
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

            {/* Bottom Action Label */}
            <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal group-hover:underline">
                View Collection Details
              </span>
              <CheckCircle2 className="h-4 w-4 text-teal" />
            </div>
          </div>
        ))}
      </div>

      {/* Professional B2B Modal Popup */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header with Cover Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-xl bg-stone-100 mb-6">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="rounded-md bg-teal px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  B2B Wholesale Specifications
                </span>
              </div>
            </div>

            {/* Title & Overview */}
            <h3 className="text-2xl font-bold text-ink">{selectedItem.title}</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              {selectedItem.description}
            </p>

            {/* Technical Specifications Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-3 text-center">
                <Sliders className="mx-auto h-4 w-4 text-teal mb-1" />
                <span className="block text-[10px] font-bold uppercase text-stone-400">Thickness</span>
                <span className="text-xs font-bold text-ink">{selectedItem.specs.substance}</span>
              </div>
              <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-3 text-center">
                <Shield className="mx-auto h-4 w-4 text-teal mb-1" />
                <span className="block text-[10px] font-bold uppercase text-stone-400">Raw Origin</span>
                <span className="text-xs font-bold text-ink">{selectedItem.specs.origin}</span>
              </div>
              <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-3 text-center">
                <Award className="mx-auto h-4 w-4 text-teal mb-1" />
                <span className="block text-[10px] font-bold uppercase text-stone-400">Finish</span>
                <span className="text-xs font-bold text-ink">{selectedItem.specs.finish}</span>
              </div>
              <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-3 text-center">
                <CheckCircle2 className="mx-auto h-4 w-4 text-teal mb-1" />
                <span className="block text-[10px] font-bold uppercase text-stone-400">Standards</span>
                <span className="text-xs font-bold text-ink">{selectedItem.specs.standards}</span>
              </div>
            </div>

            {/* Key Features List */}
            <div className="mt-6 rounded-xl border border-stone-200/80 bg-stone-50/30 p-4">
              <h4 className="text-xs font-bold uppercase text-teal tracking-wider mb-2">
                Key Performance Characteristics
              </h4>
              <ul className="space-y-2">
                {selectedItem.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-stone-700">
                    <CheckCircle2 className="mr-2 h-3.5 w-3.5 text-teal shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                onClick={() => setSelectedItem(null)}
                className="flex-1 flex items-center justify-center rounded-xl bg-teal py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:opacity-90 transition-opacity"
              >
                Request Custom Sample / Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <button
                onClick={() => setSelectedItem(null)}
                className="rounded-xl border border-stone-200 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone-600 hover:bg-stone-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
