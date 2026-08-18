import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import Applications from '../components/Applications';
import AboutSection from '../components/AboutSection';
import ProductDetailSection from '../components/ProductDetailSection';
import QualitySection from '../components/QualitySection';
import SustainabilitySection from '../components/SustainabilitySection';
import ComplianceSection from '../components/ComplianceSection';
import CatalogSection from '../components/CatalogSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <Applications />
      <AboutSection />
      <ProductDetailSection />
      <QualitySection />
      <SustainabilitySection />
      <ComplianceSection />
      <CatalogSection />
      <ContactSection />
    </>
  );
}
