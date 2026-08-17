import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Layers, Wrench } from 'lucide-react';

import { categories, applications } from '../data/siteData';

export default function CategoryDetail() {
  const { id } = useParams();

  // Find category from siteData
  const category = categories.find(
    (item) =>
      item.id?.toLowerCase() === id?.toLowerCase() ||
      item.slug?.toLowerCase() === id?.toLowerCase() ||
      item.page?.endsWith(`/${id}`)
  );

  if (!category) {
    return (
      <div className="container-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">
          Category Not Found
        </h1>
        <p className="mt-2 text-stone-600">
          The requested leather category could not be found.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-tealDark"
        >
          <ArrowLeft size={16} />
          Back to Collections
        </Link>
      </div>
    );
  }

  // Related Applications from global list
  const categoryApplications = applications?.filter(
    (app) => app.category === category.id
  );

  return (
    <div className="container-shell py-12 sm:py-20">
      {/* Navigation Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal transition-colors hover:text-tealDark"
      >
        <ArrowLeft size={14} />
        Back to Collections
      </Link>

      {/* Main Grid */}
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left Side: Category Image */}
        <div className="overflow-hidden rounded-[25px] border border-stone-200 bg-warm shadow-soft">
          <img
            src={category.image || '/assets/placeholder-leather.jpg'}
            alt={category.name}
            className="h-[380px] w-full object-cover sm:h-[480px]"
          />
        </div>

        {/* Right Side: Primary Info & Technical Specifications */}
        <div>
          {category.short && (
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
              {category.short}
            </span>
          )}

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {category.name}
          </h1>

          <p className="mt-4 leading-7 text-stone-600 sm:text-base">
            {category.description}
          </p>

          {/* Technical Specifications Table */}
          {category.specifications && category.specifications.length > 0 && (
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                <Layers size={16} className="text-teal" /> Technical Specifications
              </h3>
              <dl className="mt-4 divide-y divide-stone-100 text-xs">
                {category.specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-2.5">
                    <dt className="font-semibold text-stone-500">{spec.label}</dt>
                    <dd className="font-bold text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-teal px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-soft transition-colors hover:bg-tealDark"
            >
              Request Samples / Inquire
            </a>
          </div>
        </div>
      </div>

      {/* Characteristics & Recommended End Uses */}
      <div className="mt-16 grid gap-8 border-t border-stone-200 pt-12 md:grid-cols-2">
        {/* Key Features */}
        {category.features && category.features.length > 0 && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
              <ShieldCheck className="text-teal" size={20} /> Key Characteristics
            </h2>
            <ul className="mt-4 space-y-3">
              {category.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs leading-5 text-stone-600">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommended End Uses */}
        {category.applicationsList && category.applicationsList.length > 0 && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
              <Wrench className="text-teal" size={20} /> Recommended End Uses
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {category.applicationsList.map((app, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-warm px-3.5 py-2.5 text-xs font-bold text-ink"
                >
                  {app}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Extended Applications Section (From Global Data) */}
      {categoryApplications && categoryApplications.length > 0 && (
        <div className="mt-12 border-t border-stone-200 pt-12">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Related Applications & Use Cases
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryApplications.map((app) => (
              <div
                key={app.id}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft"
              >
                <div className="flex items-center gap-2 text-teal">
                  <CheckCircle2 size={18} />
                  <h3 className="font-bold text-ink">{app.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-stone-600">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
