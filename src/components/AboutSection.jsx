import {
  Factory,
  Globe2,
  History,
  RefreshCw,
} from 'lucide-react';

import { history } from '../data/siteData';

const aboutCards = [
  {
    icon: Factory,
    title: 'Manufacturing Heritage',
    text:
      'KTM Leather traces its roots to 1935 and has expanded across multiple leather applications over several generations.',
  },
  {
    icon: Globe2,
    title: 'Global Orientation',
    text:
      'KTM describes an international footprint serving customers and partners across major global regions.',
  },
  {
    icon: RefreshCw,
    title: 'Product Development',
    text:
      'The manufacturer highlights ongoing research and development together with collaboration on new textures, finishes and leather products.',
  },
];

export default function AboutSection() {
  const historyList = history || [];

  return (
    <section
      id="about"
      className="border-y border-stone-200 bg-white/45 py-16 sm:py-24"
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
              About the Manufacturer
            </p>

            <h2 className="display-title mt-2 text-4xl font-extrabold text-ink sm:text-5xl">
              From rawhide trading to a global leather manufacturing platform.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
              KTM Leather describes itself as a long-established Pakistani
              tannery producing Cow and Buffalo leathers from rawhide through
              crust and finished stages for bags, footwear, upholstery, belts,
              accessories and other leather-consuming industries.
            </p>

            <div className="mt-7 rounded-2xl border border-teal/15 bg-teal/5 p-5">
              <div className="flex items-start gap-3">
                <History
                  size={19}
                  className="mt-0.5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-extrabold text-ink">
                    Built over generations
                  </p>

                  <p className="mt-1 text-xs leading-5 text-stone-600 sm:text-sm">
                    The timeline below highlights key manufacturing,
                    development and certification milestones published by KTM
                    Leather.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Cards) */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {aboutCards.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/8 text-teal">
                  <Icon
                    size={20}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-4 text-base font-extrabold text-ink">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Dynamic Vertical Timeline */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
          <h3 className="text-lg font-extrabold text-ink">
            Historical Milestones
          </h3>

          <ol className="mt-6 flex flex-col gap-4 divide-y divide-stone-100">
            {historyList.map((item, index) => (
              <li
                key={`${item.year}-${index}`}
                className="grid grid-cols-[80px_1fr] gap-4 pt-4 first:pt-0 sm:grid-cols-[110px_1fr] sm:gap-6"
              >
                <span className="text-sm font-extrabold text-teal">
                  {item.year}
                </span>

                <span className="text-sm leading-6 text-stone-600">
                  {item.detail}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
