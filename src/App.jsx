import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutSection from './components/AboutSection';
import QualitySection from './components/QualitySection';
import SustainabilitySection from './components/SustainabilitySection';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';

// Page change hone par scroll top par le jane ke liye helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink antialiased">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-teal focus:p-4 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Main Navigation */}
      <Navbar />

      {/* Page Content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Separate Pages */}
          <Route path="/about" element={<AboutSection />} />
          <Route path="/quality" element={<QualitySection />} />
          <Route path="/sustainability" element={<SustainabilitySection />} />
          <Route path="/compliance" element={<ComplianceSection />} />
          <Route path="/contact" element={<ContactSection />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
