import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const applicationsData = [
  {
    id: 'footwear',
    title: 'Footwear',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    details:
      'High-grade leather tailored for footwear manufacturers. Provides optimal breathability, high tear strength, and flexible finishing suitable for boots and dress shoes.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'bags',
    title: 'Bags & Leather Goods',
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    details:
      'Supple full-grain and top-grain leathers crafted for precision stitching, edge painting, and long-lasting durability across luxury bag lines.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'belts',
    title: 'Belts',
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    details:
      'Heavy substance vegetable-tanned and chrome-free options specifically cut for solid, durable strap and belt production.',
    image:
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'lining',
    title: 'Lining Leather',
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    details:
      'Moisture-absorbent, ultra-soft cow and buffalo lining hides engineered for maximum comfort in shoe and garment interiors.',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'furniture',
    title: 'Furniture & Upholstery',
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    details:
      'Large average hide sizes with superior yield, stain resistance, and luxury hand-feel for high-end seating.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description:
      'Leather for automotive upholstery and interior applications.',
    details:
      'UV-resistant, flame-retardant, and high-abrasion finishes built to meet international automotive specifications.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'aviation',
    title: 'Aviation',
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    details:
      'Lightweight, strict burn-certified aviation upholstery engineered for commercial and private aircraft interiors.',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'printed',
    title: 'Printed Leather Goods',
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    details:
      'Custom embossed patterns, foil prints, and fashion-forward textures tailored to seasonal design briefs.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
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
                View Manufacturer Collection
              </span>
              <CheckCircle2 className="h-4 w-4 text-teal" />
            </div>
          </div>
        ))}
      </div>

      {/* Detail Overlay / Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 rounded-full p-1 text-stone-500 hover:bg-stone-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="h-48 w-full overflow-hidden rounded-xl bg-stone-100 mb-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-ink">{selectedItem.title}</h3>
            <p className="mt-2 text-sm text-stone-600">{selectedItem.description}</p>

            <div className="mt-4 rounded-xl bg-stone-50 p-4 border border-stone-200/60">
              <h4 className="text-xs font-bold uppercase text-teal tracking-wider">Specifications & Info</h4>
              <p className="mt-1 text-xs leading-5 text-stone-700">{selectedItem.details}</p>
            </div>

            <button
              onClick={() => setSelectedItem(null)}
              className="mt-6 w-full rounded-xl bg-teal py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:opacity-90"
            >
              Close Collection
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
