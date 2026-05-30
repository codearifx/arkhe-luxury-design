import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Packages from './pages/Packages.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

// Scroll To Top Helper Component (crucial for React Router page changes)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col justify-between selection:bg-gold selection:text-zinc-950">
      {/* Scroll Auditor */}
      <ScrollToTop />

      {/* Floating Sticky Navigation Bar */}
      <Navbar />

      {/* Primary Route Wrapper */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Premium Dark Footer */}
      <Footer />
    </div>
  );
}
