import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { categories, catalogLinks } from '../data/siteData';

export default function CategoryDetail() {
  const { id } = useParams();

  // Flexible lookup: ID, Slug ya lowercase Name match check
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

  // Related Catalogs Matching Logic
  const matchingCatalog = catalogLinks?.find((cat) =>
    cat.group?.toLowerCase().includes(category.name?.toLowerCase().split(' ')[0])
  );

  return (
    <div className="container-shell py-12 sm:py-20">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal transition-colors hover:text-tealDark"
      >
        <ArrowLeft size={14} />
        Back to Collections
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Category Image */}
        <div className="overflow-hidden rounded-[25px] border border-stone-200 bg-warm shadow-soft">
          <img
            src={category.image || '/assets/placeholder-leather.jpg'}
            alt={category.name}
            className="h-[350px] w-full object-cover sm:h-[450px]"
          />
        </div>

        {/* Category Info */}
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

          {/* Catalogues Section */}
          {matchingCatalog && matchingCatalog.items?.length > 0 && (
            <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
                Available Catalogues ({matchingCatalog.group})
              </h3>
              <div className="mt-4 space-y-3">
                {matchingCatalog.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-warm p-3.5 text-xs font-bold text-teal transition-colors hover:bg-teal/10"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
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
    </div>
  );
}
