import React from 'react';
import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  Leaf,
  ShieldCheck,
} from 'lucide-react';

import { brand } from '../data/siteData';

// Certificate Descriptions & Preview Data
const certDetails = {
  'ISO 9001:2015': {
    subtitle: 'Quality Management System',
    description: 'Ensures international standards in leather manufacturing processes and quality control.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=80',
  },
  'ISO 45001:2018': {
    subtitle: 'Occupational Health & Safety',
    description: 'Guarantees a safe, risk-free, and healthy working environment for all tannery workforce.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=80',
  },
  'LWG Environmental Audit': {
    subtitle: 'Stewardship Protocol — Gold Rated',
    description: 'Highest distinction for sustainable water usage, energy consumption, and waste management.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=80',
  },
  'ISO 14001:2015': {
    subtitle: 'Environmental Management System',
    description: 'Framework to reduce environmental footprint, emissions, and resource consumption.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80',
  },
  'Higg Index FEM': {
    subtitle: 'Facility Environmental Module',
    description: 'Standardized assessment evaluating environmental impact across the entire production facility.',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=400&auto=format&fit=crop&q=80',
  },
  'BSCI': {
    subtitle: 'Business Social Compliance Initiative',
    description: 'Audits fair working conditions, fair remuneration, and prohibition of forced labor.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&auto=format&fit=crop&q=80',
  },
  'SA 8000': {
    subtitle: 'Social Accountability Standard',
    description: 'International benchmark for ethical workplace practices, human rights, and worker welfare.',
    image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=400&auto=format&fit=crop&q=80',
  },
  'Inditex Social': {
    subtitle: 'Social Compliance Standard',
    description: 'Meets strict code of conduct requirements for global fashion retail manufacturing.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80',
  },
  'Inditex GTW': {
    subtitle: 'Green to Wear Standard',
    description: 'Compliance with sustainable chemical management and eco-friendly leather processing.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&auto=format&fit=crop&q=80',
  },
  'ZDHC': {
    subtitle: 'Zero Discharge of Hazardous Chemicals',
    description: 'Ensures zero release of toxic chemicals into wastewater streams and environment.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400&auto=format&fit=crop&q=80',
  },
  'Leather Naturally': {
    subtitle: 'Global Leather Industry Member',
    description: 'Promoting sustainable, biodegradable, and transparent natural leather manufacturing.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=80',
  },
  'SATRA': {
    subtitle: 'Technology Centre & Testing',
    description: 'Partnered with SATRA for rigorous physical testing and product quality validation.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80',
  },
};

const complianceGroups = [
  {
    title: 'Management Certifications',
    icon: ShieldCheck,
    accent: 'teal',
    items: ['ISO 9001:2015', 'ISO 45001:2018'],
  },
  {
    title: 'Environmental Certifications',
    icon: Leaf,
    accent: 'green',
    items: ['LWG Environmental Audit', 'ISO 14001:2015', 'Higg Index FEM'],
  },
  {
    title: 'Social Certifications',
    icon: BadgeCheck,
    accent: 'blue',
    items: ['BSCI', 'SA 8000', 'Inditex Social'],
  },
  {
    title: 'Customer Standards & Guidelines',
    icon: BookOpenCheck,
    accent: 'coral',
    items: ['Inditex GTW', 'ZDHC'],
  },
  {
    title: 'Memberships',
    icon: Award,
    accent: 'gold',
    items: ['Leather Naturally', 'SATRA'],
  },
];

const accentClasses = {
  teal: { icon: 'bg-teal/10 text-teal', badge: 'bg-teal/90' },
  green: { icon: 'bg-emerald-500/10 text-emerald-600', badge: 'bg-emerald-600' },
  blue: { icon: 'bg-sky-500/10 text-sky-600', badge: 'bg-sky-600' },
  coral: { icon: 'bg-coral/10 text-coral', badge: 'bg-coral' },
  gold: { icon: 'bg-amber-500/10 text-amber-600', badge: 'bg-amber-600' },
};

export default function ComplianceSection() {
  const brandName = brand?.name || 'Leatherlix';

  return (
    <section id="compliance" className="container-shell py-16 sm:py-24">
      {/* SECTION HEADER */}
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
            Certifications &amp; Memberships
          </p>

          <h2 className="display-title mt-2 text-4xl font-extrabold text-ink sm:text-5xl">
            {brandName}&rsquo;s published compliance framework.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            Explore the management, environmental, social, and customer compliance standards associated with our production facilities.
          </p>
        </div>

        {/* Attribution Note */}
        <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
          <div className="flex items-start gap-3">
            <ShieldCheck size={19} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
            <p className="text-xs leading-5 text-stone-500">
              These credentials are presented as{' '}
              <strong className="font-semibold text-stone-700">
                {brandName}&rsquo;s published certifications and standards
              </strong>
              . They reflect verified standards maintained across production.
            </p>
          </div>
        </div>
      </div>

      {/* COMPLIANCE GROUPS WITH CERTIFICATE CARDS */}
      <div className="mt-10 space-y-10">
        {complianceGroups.map(({ title, items = [], icon: Icon, accent }) => {
          const colors = accentClasses[accent] || accentClasses.teal;

          return (
            <article key={title} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-soft">
              {/* Group Header */}
              <div className="flex items-center gap-3 border-b border-stone-100 pb-5 mb-6">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-ink sm:text-xl">{title}</h3>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-stone-400">
                    Verified Quality Standard
                  </p>
                </div>
              </div>

              {/* Certificate Cards Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => {
                  const cert = certDetails[item] || {
                    subtitle: 'Quality Standard',
                    description: 'Complies with verified manufacturing guidelines and auditing standards.',
                    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=80',
                  };

                  return (
                    <div
                      key={item}
                      className="group relative overflow-hidden rounded-xl border border-stone-200 bg-stone-50/50 transition-all duration-300 hover:border-teal/30 hover:bg-white hover:shadow-card"
                    >
                      {/* Certificate Preview Image */}
                      <div className="h-36 w-full overflow-hidden bg-stone-200 relative">
                        <img
                          src={cert.image}
                          alt={item}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className={`absolute bottom-2 left-3 rounded ${colors.badge} px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white`}>
                          Verified Audit
                        </span>
                      </div>

                      {/* Certificate Details & Explanation */}
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-ink">{item}</h4>
                        <p className="text-[11px] font-semibold text-teal mt-0.5">{cert.subtitle}</p>

                        <p className="mt-2.5 text-xs leading-relaxed text-stone-600 border-t border-stone-100 pt-2.5">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      {/* TRUST CTA */}
      <div className="mt-10 rounded-2xl border border-teal/15 bg-teal/5 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <BadgeCheck size={20} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-extrabold text-ink">Need certification documentation?</h3>
              <p className="mt-1 text-xs leading-5 text-stone-600 sm:text-sm">
                Ask for the relevant certificate or test documentation for the exact leather article before placing a commercial order.
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
