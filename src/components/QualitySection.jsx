import {
  Beaker,
  CheckCircle2,
  Microscope,
  ShieldCheck,
} from 'lucide-react';

import {
  processSteps,
  qualityTests,
} from '../data/siteData';

const qualityCheckpoints = [
  {
    icon: Microscope,
    title: 'Physical Inspection',
    description:
      'Leather is visually inspected through production stages for grain, surface, trimming and overall consistency.',
  },

  {
    icon: Beaker,
    title: 'Physical & Chemical Testing',
    description:
      'Physical properties and chemical parameters are checked to support product performance and compliance requirements.',
  },

  {
    icon: ShieldCheck,
    title: 'Final Quality Control',
    description:
      'Finished leather is checked against the required specifications before it moves toward dispatch and customer delivery.',
  },
];

export default function QualitySection() {
  const stepsList = processSteps || [];
  const testsList = qualityTests || [];

  return (
    <section
      id="quality"
      className="border-y border-stone-200 bg-white/50 py-16 sm:py-24"
    >
      <div className="container-shell">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
            Quality Control
          </p>

          <h2 className="display-title mt-2 text-4xl font-extrabold text-ink sm:text-5xl">
            Measured from raw hide to final dispatch.
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
            Quality control is built around inspection, physical testing,
            chemical testing and final verification throughout the leather
            manufacturing process.
          </p>
        </div>

        {/* =====================================================
            QUALITY CHECKPOINT CARDS
        ====================================================== */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {qualityCheckpoints.map(
            ({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:shadow-card"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-extrabold text-ink">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>

        {/* =====================================================
            PRODUCTION PROCESS
        ====================================================== */}
        <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-5 shadow-soft sm:p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-500">
                Production Journey
              </p>

              <h3 className="mt-1 text-xl font-extrabold text-ink">
                From raw hide to finished leather
              </h3>
            </div>

            <p className="max-w-md text-xs leading-5 text-stone-500">
              Each stage represents a controlled step in the manufacturing
              journey before the leather reaches final quality control.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {stepsList.map((step, index) => (
              <div
                key={typeof step === 'string' ? step : index}
                className="relative flex items-center gap-3 rounded-xl border border-stone-200 bg-cream px-3 py-3 lg:block lg:text-center"
              >
                {/* Step Number */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-white lg:mx-auto">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Step Name */}
                <span className="text-xs font-bold text-ink lg:mt-3 lg:block">
                  {step}
                </span>

                {/* Desktop Connector */}
                {index < stepsList.length - 1 && (
                  <span
                    className="absolute -right-2 top-1/2 hidden h-px w-2 -translate-y-1/2 bg-stone-300 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            TESTING / INSPECTION LIST
        ====================================================== */}
        <div className="mt-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-coral">
                Testing & Verification
              </p>

              <h3 className="mt-1 text-2xl font-extrabold text-ink">
                Key quality controls
              </h3>
            </div>

            <span className="text-xs font-semibold text-stone-500">
              Production & compliance focused
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {testsList.map((test, index) => (
              <div
                key={typeof test === 'string' ? test : index}
                className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white px-4 py-4 shadow-soft"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-teal"
                  aria-hidden="true"
                />

                <span className="text-xs font-semibold leading-5 text-stone-600">
                  {test}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            QUALITY ASSURANCE NOTE
        ====================================================== */}
        <div className="mt-8 rounded-2xl border border-teal/15 bg-teal/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-teal"
              aria-hidden="true"
            />

            <div>
              <h3 className="text-sm font-extrabold text-ink">
                Quality assurance for sourcing teams
              </h3>

              <p className="mt-1 text-xs leading-5 text-stone-600 sm:text-sm">
                Buyers can use this section as a quick overview of the quality
                path. Exact product specifications, test methods, tolerances
                and certificate documentation should be confirmed for the
                selected article before commercial production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
