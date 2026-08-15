import CategoryGrid from '../components/CategoryGrid';

export default function Collections() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="container-shell py-12 md:py-16">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal">
            Our Collections
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Explore Our Leather Collections
          </h1>

          <p className="mt-5 text-sm leading-7 text-stone-600 sm:text-base">
            Explore our complete range of premium leather collections,
            carefully selected for footwear, boots and other leather
            applications.
          </p>
        </div>

        <CategoryGrid />
      </section>
    </main>
  );
}
