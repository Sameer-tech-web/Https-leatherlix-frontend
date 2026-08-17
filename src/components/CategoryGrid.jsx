import { useParams, Link } from 'react-router-dom';
import { categories, catalogLinks } from '../data/siteData';

export default function CategoryPage() {
  const { id } = useParams();

  // Route param 'id' ko siteData ke id ya slug se match karein
  const category = categories.find(
    (item) => item.id === id || item.slug === id
  );

  if (!category) {
    return (
      <div className="container-shell py-24 text-center">
        <h1 className="text-3xl font-bold text-ink">Category Not Found</h1>
        <p className="mt-2 text-stone-600">The requested category does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-teal px-6 py-3 font-bold text-white hover:bg-tealDark"
        >
          Back to Collections
        </Link>
      </div>
    );
  }

  // Matching catalog links (if available)
  const matchingCatalog = catalogLinks.find((cat) =>
    cat.group.toLowerCase().includes(category.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="container-shell py-16 sm:py-24">
      <Link
        to="/"
        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal hover:underline"
      >
        ← Back to Collections
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-stone-200">
          <img
            src={category.image || '/assets/placeholder-leather.jpg'}
            alt={category.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-coral">
            {category.short}
          </span>
          <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-4 text-stone-600 leading-relaxed">
            {category.description}
          </p>

          {matchingCatalog && (
            <div className="mt-8">
              <h3 className="text-lg font-bold text-ink">Related Catalogues</h3>
              <ul className="mt-3 space-y-2">
                {matchingCatalog.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-teal hover:underline"
                    >
                      {item.title} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-tealDark"
            >
              Request Samples / Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
