import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
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
      <section id="top">
        <Hero />
      </section>

      <section id="collections">
        <CategoryGrid />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <ProductDetailSection />

      <section id="quality">
        <QualitySection />
      </section>

      <section id="sustainability">
        <SustainabilitySection />
      </section>

      <section id="compliance">
        <ComplianceSection />
      </section>

      <CatalogSection />

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
