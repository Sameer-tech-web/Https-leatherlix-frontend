import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductDetailSection from '../components/ProductDetailSection';
import CatalogSection from '../components/CatalogSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductDetailSection />
      <CatalogSection />
    </>
  );
}
