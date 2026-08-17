import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

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

  // Related Applications
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

        {/* Right Side: Primary Info */}
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

      {/* Extended Applications Section */}
      {categoryApplications && categoryApplications.length > 0 && (
        <div className="mt-16 border-t border-stone-200 pt-12">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Key Applications & Specifications
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
