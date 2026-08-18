import {
  Armchair,
  Briefcase,
  Car,
  CheckCircle2,
  Footprints,
  Layers,
  Plane,
  Printer,
  ShieldCheck,
} from 'lucide-react';

const applicationsData = [
  {
    id: 'footwear',
    title: 'Footwear',
    description:
      'Dress shoes, casual shoes, work boots, tactical boots, Western boots and other footwear applications.',
    icon: Footprints,
  },
  {
    id: 'bags',
    title: 'Bags & Leather Goods',
    description:
      'Wallets, handbags, backpacks, briefcases, portfolios and design-led leather accessories.',
    icon: Briefcase,
  },
  {
    id: 'belts',
    title: 'Belts',
    description:
      'Heavy-duty River Bison belting leather in single butts, double butts and doze shapes.',
    icon: ShieldCheck,
  },
  {
    id: 'lining',
    title: 'Lining Leather',
    description:
      'Cow and Buffalo lining materials in drum-dyed, semi-aniline and milled finishes.',
    icon: Layers,
  },
  {
    id: 'furniture',
    title: 'Furniture & Upholstery',
    description:
      'Whole-hide upholstery leather for furniture and decorative interiors.',
    icon: Armchair,
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description:
      'Leather for automotive upholstery and interior applications.',
    icon: Car,
  },
  {
    id: 'aviation',
    title: 'Aviation',
    description:
      'Leather for aviation seating with dedicated performance and flame-retardant requirements.',
    icon: Plane,
  },
  {
    id: 'printed',
    title: 'Printed Leather Goods',
    description:
      'Printed leather collections for fashion, footwear, bags and accessories.',
    icon: Printer,
  },
];

export default function Applications() {
  return (
    <section id="applications" className="container-shell py-12 sm:py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applicationsData.map((item) => {
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal/30 hover:shadow-md"
            >
              <div>
                {/* Category Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="h-5 w-5 text-teal" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-ink">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-5 text-stone-600">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Label */}
              <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
                  View Manufacturer Collection
                </span>
                <CheckCircle2 className="h-4 w-4 text-teal" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
