import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export default function Navbar() {
  const { language, switchLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPackagesDropdownOpen(false);
  }, [location]);

  // Determine if navbar should be dark/white themed based on scroll and current path
  const isHomePage = location.pathname === '/';
  const useDarkTheme = isHomePage && !scrolled;

  const activeStyle = ({ isActive }) =>
    isActive
      ? `text-gold font-semibold tracking-widest uppercase text-xs transition-luxury relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1.5px] after:bg-gold`
      : `${
          useDarkTheme ? 'text-white/80 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
        } font-medium tracking-widest uppercase text-xs transition-luxury relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold hover:after:w-full after:transition-all after:duration-300`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100/80 py-4 shadow-sm'
          : isHomePage
          ? 'bg-transparent py-6 border-b border-white/10'
          : 'bg-white/90 backdrop-blur-sm py-5 border-b border-zinc-100 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link to="/" className="flex flex-col items-start leading-none group">
          <span
            className={`text-xl font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
              useDarkTheme ? 'text-white group-hover:text-gold' : 'text-zinc-900 group-hover:text-gold'
            }`}
          >
            ARKHE<span className="text-gold">.</span>
          </span>
          <span
            className={`text-[8px] tracking-[0.32em] uppercase mt-0.5 font-medium transition-colors duration-300 ${
              useDarkTheme ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-zinc-500 group-hover:text-zinc-700'
            }`}
          >
            {t('footerSlogan')}
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Home */}
          <NavLink to="/" className={activeStyle}>
            {t('navHome')}
          </NavLink>

          {/* About */}
          <NavLink to="/about" className={activeStyle}>
            {t('navAbout')}
          </NavLink>

          {/* Services with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <NavLink to="/services" className={activeStyle}>
              <span className="inline-flex items-center gap-1">
                {t('navServices')} <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </NavLink>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-3 w-64 bg-white border border-zinc-100 rounded-none shadow-xl py-3 z-50 animate-fade-in origin-top-left transition-all duration-300">
                <Link
                  to="/services"
                  className="block px-5 py-3 text-xs font-semibold tracking-wider text-zinc-800 hover:bg-luxury-beige hover:text-gold border-l-2 border-transparent hover:border-gold transition-colors uppercase text-left"
                >
                  {t('navService1')}
                </Link>
                <Link
                  to="/services"
                  className="block px-5 py-3 text-xs font-semibold tracking-wider text-zinc-800 hover:bg-luxury-beige hover:text-gold border-l-2 border-transparent hover:border-gold transition-colors uppercase text-left"
                >
                  {t('navService2')}
                </Link>
                <Link
                  to="/services"
                  className="block px-5 py-3 text-xs font-semibold tracking-wider text-zinc-800 hover:bg-luxury-beige hover:text-gold border-l-2 border-transparent hover:border-gold transition-colors uppercase text-left"
                >
                  {t('navService3')}
                </Link>
              </div>
            )}
          </div>

          {/* Packages with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPackagesDropdownOpen(true)}
            onMouseLeave={() => setPackagesDropdownOpen(false)}
          >
            <NavLink to="/packages" className={activeStyle}>
              <span className="inline-flex items-center gap-1">
                {t('navPackages')} <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </NavLink>

            {/* Dropdown Menu */}
            {packagesDropdownOpen && (
              <div className="absolute left-0 mt-3 w-64 bg-white border border-zinc-100 rounded-none shadow-xl py-3 z-50 animate-fade-in origin-top-left transition-all duration-300">
                <Link
                  to="/packages"
                  className="block px-5 py-3 text-xs font-semibold tracking-wider text-zinc-800 hover:bg-luxury-beige hover:text-gold border-l-2 border-transparent hover:border-gold transition-colors uppercase text-left"
                >
                  {t('navPackage1')}
                </Link>
                <Link
                  to="/packages"
                  className="block px-5 py-3 text-xs font-semibold tracking-wider text-zinc-800 hover:bg-luxury-beige hover:text-gold border-l-2 border-transparent hover:border-gold transition-colors uppercase text-left"
                >
                  {t('navPackage2')}
                </Link>
              </div>
            )}
          </div>

          {/* Projects */}
          <NavLink to="/projects" className={activeStyle}>
            {t('navProjects')}
          </NavLink>

          {/* Contact */}
          <NavLink to="/contact" className={activeStyle}>
            {t('navContact')}
          </NavLink>
        </div>

        {/* Right Side: Language Switcher, Sign In & Mobile Toggle */}
        <div className="flex items-center gap-4 relative">
          {/* Language Switcher Dropdown (Desktop) */}
          <div
            className="relative hidden sm:block"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button
              className={`p-2.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
                useDarkTheme ? 'text-white hover:text-gold' : 'text-zinc-700 hover:text-gold'
              }`}
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>{language === 'en' ? 'EN' : 'தமிழ்'}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {/* Dropdown Box */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-white border border-zinc-100 shadow-xl py-2 z-50 animate-fade-in origin-top-right transition-all">
                <button
                  onClick={() => {
                    switchLanguage('en');
                    setLangDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2 text-[10px] font-bold tracking-widest text-zinc-800 hover:bg-luxury-beige hover:text-gold transition-colors uppercase text-left cursor-pointer"
                >
                  <span>English</span>
                  {language === 'en' && <Check className="w-3.5 h-3.5 text-gold shrink-0" />}
                </button>
                <button
                  onClick={() => {
                    switchLanguage('ta');
                    setLangDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2 text-[10px] font-bold tracking-widest text-zinc-800 hover:bg-luxury-beige hover:text-gold transition-colors text-left cursor-pointer"
                >
                  <span>தமிழ்</span>
                  {language === 'ta' && <Check className="w-3.5 h-3.5 text-gold shrink-0" />}
                </button>
              </div>
            )}
          </div>

          <button
            className={`hidden sm:inline-block px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-luxury border rounded-none cursor-pointer ${
              useDarkTheme
                ? 'border-white text-white hover:bg-white hover:text-zinc-950'
                : 'border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white'
            }`}
          >
            {t('navSignIn')}
          </button>

          {/* Hamburger Menu button */}
          <button
            type="button"
            className={`lg:hidden p-1 transition-colors ${
              useDarkTheme ? 'text-white hover:text-gold' : 'text-zinc-900 hover:text-gold'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 lg:hidden flex flex-col justify-between border-t border-zinc-100 animate-fade-in shadow-xl">
          <div className="flex flex-col py-6 px-6 overflow-y-auto max-h-[calc(100vh-160px)]">
            <ul className="flex flex-col gap-6 list-none p-0 m-0">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-900 hover:text-gold text-sm font-semibold tracking-widest uppercase block transition-colors duration-300 text-left"
                >
                  {t('navHome')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-900 hover:text-gold text-sm font-semibold tracking-widest uppercase block transition-colors duration-300 text-left"
                >
                  {t('navAbout')}
                </Link>
              </li>

              {/* Services Mobile Accordion */}
              <li>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full flex items-center justify-between text-zinc-900 hover:text-gold text-sm font-semibold tracking-widest uppercase text-left transition-colors duration-300"
                >
                  <span>{t('navServices')}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="mt-3 pl-4 border-l border-zinc-100 flex flex-col gap-3">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs tracking-wider text-zinc-600 hover:text-gold font-medium py-1 uppercase text-left"
                    >
                      {t('navService1')}
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs tracking-wider text-zinc-600 hover:text-gold font-medium py-1 uppercase text-left"
                    >
                      {t('navService2')}
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs tracking-wider text-zinc-600 hover:text-gold font-medium py-1 uppercase text-left"
                    >
                      {t('navService3')}
                    </Link>
                  </div>
                )}
              </li>

              {/* Packages Mobile Accordion */}
              <li>
                <button
                  onClick={() => setPackagesDropdownOpen(!packagesDropdownOpen)}
                  className="w-full flex items-center justify-between text-zinc-900 hover:text-gold text-sm font-semibold tracking-widest uppercase text-left transition-colors duration-300"
                >
                  <span>{t('navPackages')}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      packagesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {packagesDropdownOpen && (
                  <div className="mt-3 pl-4 border-l border-zinc-100 flex flex-col gap-3">
                    <Link
                      to="/packages"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs tracking-wider text-zinc-600 hover:text-gold font-medium py-1 uppercase text-left"
                    >
                      {t('navPackage1')}
                    </Link>
                    <Link
                      to="/packages"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs tracking-wider text-zinc-600 hover:text-gold font-medium py-1 uppercase text-left"
                    >
                      {t('navPackage2')}
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-900 hover:text-gold text-sm font-semibold tracking-widest uppercase block transition-colors duration-300 text-left"
                >
                  {t('navProjects')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-900 hover:text-gold text-sm font-semibold tracking-widest uppercase block transition-colors duration-300 text-left"
                >
                  {t('navContact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex flex-col gap-4">
            {/* Language Selector (Mobile layout toggle grid) */}
            <div className="flex items-center justify-between py-2 border-b border-zinc-200/50 mb-2">
              <span className="text-[9px] text-zinc-400 font-semibold uppercase tracking-widest flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-gold shrink-0" /> Language / மொழி
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                    language === 'en'
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage('ta')}
                  className={`px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                    language === 'ta'
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 border border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 text-xs font-semibold tracking-widest uppercase transition-luxury cursor-pointer"
            >
              {t('navSignIn')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
