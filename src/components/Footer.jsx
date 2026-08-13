import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import {
  brand,
  navLinks,
  sourceNote,
} from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Defensive fallbacks for data reliability
  const brandData = brand || {
    name: 'Leatherlix',
    supplierLabel: 'Authorized Supplier',
    email: 'info@leatherlix.com',
    phone: '+92 300 0000000',
    manufacturer: 'KTM Leather',
    manufacturerUrl: 'https://ktmleather.com',
  };

  const linksList = navLinks || [];

  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="container-shell py-12 sm:py-14">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* ===================================================
              BRAND COLUMN
          ==================================================== */}
          <div>
            <a
              href="#top"
              className="inline-block text-[30px] font-extrabold tracking-[-0.06em] text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              {brandData.name}
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">
              Premium leather sourcing and supplier presentation for footwear,
              belts, fashion articles, lining, upholstery, printed,
              automotive and aviation applications.
            </p>

            {/* Supplier Badge */}
            <div className="mt-5 inline-flex rounded-full border border-teal/15 bg-teal/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
              {brandData.supplierLabel}
            </div>
          </div>

          {/* ===================================================
              NAVIGATION
          ==================================================== */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
              Navigation
            </h3>

            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {linksList.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm font-semibold text-stone-700 transition-colors duration-200 hover:text-teal focus:outline-none focus-visible:text-teal"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* ===================================================
              CONTACT COLUMN
          ==================================================== */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
              Contact
            </h3>

            <div className="mt-4 space-y-4">
              {/* Email */}
              <a
                href={`mailto:${brandData.email}`}
                aria-label={`Email ${brandData.email}`}
                className="flex items-start gap-3 text-sm text-stone-700 transition-colors duration-200 hover:text-teal"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <span className="break-all">
                  {brandData.email}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${brandData.phone.replace(/\s+/g, '')}`}
                aria-label={`Call ${brandData.phone}`}
                className="flex items-start gap-3 text-sm text-stone-700 transition-colors duration-200 hover:text-teal"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <span>
                  {brandData.phone}
                </span>
              </a>

              {/* Manufacturer */}
              <div className="flex items-start gap-3 text-sm text-stone-700">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-semibold">
                    {brandData.manufacturer}
                  </p>

                  <a
                    href={brandData.manufacturerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-teal hover:text-tealDark"
                  >
                    Visit KTM Leather

                    <ExternalLink
                      size={12}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SOURCE / BRANDING NOTE
        ====================================================== */}
        <div className="mt-10 border-t border-stone-200 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-4xl text-[10px] leading-5 text-stone-400">
              {sourceNote || 'Authorized supplier presentation and sourcing network.'}
            </p>

            <a
              href="#top"
              className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-teal transition-colors duration-200 hover:text-tealDark"
            >
              Back to top

              <ArrowUpRight
                size={13}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}
        <div className="mt-6 flex flex-col gap-2 border-t border-stone-200 pt-5 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {brandData.name}. All rights reserved.
          </p>

          <p>
            Premium Leather Supplier
          </p>
        </div>
      </div>
    </footer>
  );
}
