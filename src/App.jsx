import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import AboutSection from './components/AboutSection';
import ProductDetailSection from './components/ProductDetailSection';
import QualitySection from './components/QualitySection';
import SustainabilitySection from './components/SustainabilitySection';
import ComplianceSection from './components/ComplianceSection';
import CatalogSection from './components/CatalogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main>
        <Hero />
        <CategoryGrid />
        <AboutSection />
        <ProductDetailSection />
        <QualitySection />
        <SustainabilitySection />
        <ComplianceSection />
        <CatalogSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
