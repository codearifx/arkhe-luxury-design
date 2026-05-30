import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="flex flex-col items-start leading-none mb-6 group">
              <span className="text-xl font-bold tracking-[0.25em] uppercase text-white group-hover:text-gold transition-colors duration-300">
                ARKHE<span className="text-gold">.</span>
              </span>
              <span className="text-[8px] tracking-[0.32em] uppercase text-zinc-400 mt-1">
                {t('footerSlogan')}
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
              {t('footerPitch')}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 hover:border-gold hover:bg-gold hover:text-black rounded-none flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 hover:border-gold hover:bg-gold hover:text-black rounded-none flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 hover:border-gold hover:bg-gold hover:text-black rounded-none flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-zinc-800 hover:border-gold hover:bg-gold hover:text-black rounded-none flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter/X"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-white mb-6">
              {t('footerQuickLinks')}
            </h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              <li>
                <Link
                  to="/"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navHome')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navAbout')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navServices')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navProjects')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navContact')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-white mb-6">
              {t('navServices')}
            </h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              <li>
                <Link
                  to="/services"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navService1')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-20 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navService2')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-20 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-zinc-400 hover:text-gold text-sm tracking-wide transition-colors duration-300 relative group"
                >
                  {t('navService3')}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-gold group-hover:w-20 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-white mb-6">
              {t('footerOffice')}
            </h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0 text-sm font-light text-zinc-400">
              <li className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">
                  {t('branchAddressText')}
                </span>
                <span>1200 Luxury Villa Road</span>
                <span>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">
                  {t('branchPhoneText')}
                </span>
                <span className="text-zinc-300 font-normal">studio@arkhe-luxury.com</span>
                <span className="text-zinc-300 font-normal">+1 (888) 998-ARKH</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright / policy bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-500 text-xs font-light text-center md:text-left">
            {t('footerRights')}
          </div>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-gold transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors font-light">
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-zinc-900 hover:bg-gold hover:text-black transition-colors rounded-none flex items-center justify-center cursor-pointer"
              aria-label="Scroll to top"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
