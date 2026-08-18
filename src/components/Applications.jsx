import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const applicationsData = [
  {
    id: 'footwear',
    title: 'Footwear',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop&q=80',
    link: '/applications/footwear',
  },
  {
    id: 'bags',
    title: 'Bags & Leather Goods',
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80',
    link: '/applications/bags',
  },
  {
    id: 'belts',
    title: 'Belts',
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    image:
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&auto=format&fit=crop&q=80',
    link: '/applications/belts',
  },
  {
    id: 'lining',
    title: 'Lining Leather',
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=80',
    link: '/applications/lining',
  },
  {
    id: 'furniture',
    title: 'Furniture & Upholstery',
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=80',
    link: '/applications/furniture',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description:
      'Leather for automotive upholstery and interior applications.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80',
    link: '/applications/automotive',
  },
  {
    id: 'aviation',
    title: 'Aviation',
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop&q=80',
    link: '/applications/aviation',
  },
  {
    id: 'printed',
    title: 'Printed Leather Goods',
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&auto=format&fit=crop&q=80',
    link: '/applications/printed',
  },
];

export default function Applications() {
  return (
    <section id="applications" className="container-shell py-12 sm:py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applicationsData.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.link}
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
