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
    <div className="flex min-h-screen flex-col bg-cream text-ink antialiased">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-teal focus:text-white"
      >
        Skip to main content
      </a>

      {/* Main Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {/* Hero / Landing */}
        <Hero />

        {/* Complete Product Portfolio */}
        <CategoryGrid />

        {/* Manufacturer / Company Information */}
        <AboutSection />

        {/* Product Applications */}
        <ProductDetailSection />

        {/* Quality Control */}
        <QualitySection />

        {/* Sustainability */}
        <SustainabilitySection />

        {/* Certifications / Compliance / Memberships */}
        <ComplianceSection />

        {/* Product Catalogue Links */}
        <CatalogSection />

        {/* B2B Contact / Inquiry */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
