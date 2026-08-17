import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  Leaf,
  ShieldCheck,
} from 'lucide-react';

import {
  brand,
  customerStandards,
  environmentalCertifications,
  managementCertifications,
  memberships,
  socialCertifications,
} from '../data/siteData';

const complianceGroups = [
  {
    title: 'Management Certifications',
    items: managementCertifications || [],
    icon: ShieldCheck,
    accent: 'teal',
  },
  {
    title: 'Environmental Certifications',
    items: environmentalCertifications || [],
    icon: Leaf,
    accent: 'green',
  },
  {
    title: 'Social Certifications',
    items: socialCertifications || [],
    icon: BadgeCheck,
    accent: 'blue',
  },
  {
    title: 'Customer Standards & Guidelines',
    items: customerStandards || [],
    icon: BookOpenCheck,
    accent: 'coral',
  },
  {
    title: 'Memberships',
    items: memberships || [],
    icon: Award,
    accent: 'gold',
  },
];

const accentClasses = {
  teal: {
    icon: 'bg-teal/8 text-teal',
    dot: 'bg-teal',
  },
  green: {
    icon: 'bg-emerald-500/8 text-emerald-600',
    dot: 'bg-emerald-600',
  },
  blue: {
    icon: 'bg-sky-500/8 text-sky-600',
    dot: 'bg-sky-600',
  },
  coral: {
    icon: 'bg-coral/8 text-coral',
    dot: 'bg-coral',
  },
  gold: {
    icon: 'bg-amber-500/8 text-amber-600',
    dot: 'bg-amber-600',
  },
};

export default function ComplianceSection() {
  const brandName = brand?.name || 'Leatherlix';

  return (
    <section
      id="compliance"
      className="container-shell py-16 sm:py-24"
    >
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
            Certifications &amp; Memberships
          </p>

          <h2 className="display-title mt-2 text-4xl font-extrabold text-ink sm:text-5xl">
            {brandName}&rsquo;s published compliance framework.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            Explore the management, environmental, social and customer
            compliance standards associated with our production standards.
          </p>
        </div>

        {/* Attribution Note */}
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
          <div className="flex items-start gap-3">
            <ShieldCheck
              size={19}
              className="mt-0.5 shrink-0 text-teal"
              aria-hidden="true"
            />

            <p className="text-xs leading-5 text-stone-500">
              These credentials are presented as{' '}
              <strong className="font-semibold text-stone-700">
                {brandName}&rsquo;s published certifications, standards and
                memberships
              </strong>
              . They reflect verified standards maintained across production and sourcing.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          COMPLIANCE GROUPS
      ====================================================== */}
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {complianceGroups.map(
          ({ title, items = [], icon: Icon, accent }) => {
            const colors = accentClasses[accent] || accentClasses.teal;

            return (
              <article
                key={title}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/20 hover:shadow-card"
              >
                {/* Group Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-ink sm:text-lg">
                      {title}
                    </h3>

                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-stone-400">
                      Quality Standard
                    </p>
                  </div>
                </div>

                {/* Items */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {items.map((item, itemIndex) => {
                    const itemText = typeof item === 'string' ? item : item?.title || '';
                    return (
                      <div
                        key={itemText || itemIndex}
                        className="rounded-xl border border-stone-200 bg-cream p-4 transition-colors duration-200 hover:border-teal/20"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.dot} text-[9px] font-bold text-white`}
                            aria-hidden="true"
                          >
                            ✓
                          </span>

                          <span className="text-xs font-semibold leading-5 text-stone-700">
                            {itemText}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          }
        )}
      </div>

      {/* =====================================================
          CERTIFICATE LOGO AREA
      ====================================================== */}
      <div className="mt-10 overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-soft">
        <div className="border-b border-stone-200 bg-cream px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Award
              size={18}
              className="text-teal"
              aria-hidden="true"
            />

            <div>
              <h3 className="text-sm font-extrabold text-ink">
                Certificate &amp; Logo Display
              </h3>

              <p className="mt-0.5 text-[10px] text-stone-500">
                Approved artwork can be placed here.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
          {[
            'ISO 9001:2015',
            'ISO 45001:2018',
            'LWG Gold',
            'ISO 14001:2015',
            'Higg Index FEM',
            'BSCI',
            'SA 8000',
            'ZDHC',
          ].map((certificate) => (
            <div
              key={certificate}
              className="flex min-h-[90px] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-cream px-4 py-5 text-center"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.08em] text-stone-500">
                {certificate}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-200 px-5 py-4 sm:px-6">
          <p className="text-[11px] leading-5 text-stone-500">
            Use only official certification marks supplied or approved by the
            certificate holder. The placeholders above prevent the site from
            displaying unofficial or fabricated certificate artwork.
          </p>
        </div>
      </div>

      {/* =====================================================
          TRUST CTA
      ====================================================== */}
      <div className="mt-8 rounded-2xl border border-teal/15 bg-teal/5 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <BadgeCheck
              size={20}
              className="mt-0.5 shrink-0 text-teal"
              aria-hidden="true"
            />

            <div>
              <h3 className="text-sm font-extrabold text-ink">
                Need certification documentation?
              </h3>

              <p className="mt-1 text-xs leading-5 text-stone-600 sm:text-sm">
                Ask for the relevant certificate or test documentation for the
                exact leather article before placing a commercial order.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-teal px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-soft transition-colors duration-200 hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
          >
            Request Documents
          </a>
        </div>
      </div>
    </section>
  );
}
