import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  Users,
  Compass,
  Hammer,
  Briefcase,
  Layers,
  ArrowUpRight,
  MessageSquare,
  Award,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BranchLocations from '../components/BranchLocations';


// Counter Helper Component for Statistics
function AnimatedCounter({ endValue, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    if (incrementTime < 10) incrementTime = 10;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={elementRef} className="font-serif italic font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrollIndicatorOpacity(0);
      } else {
        setScrollIndicatorOpacity(1 - offset / 150);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topServices = [
    {
      title: 'Architectural Planning',
      desc: 'Formulating blueprints for signature residences and commercial spaces that prioritize lighting, structural form, and spatial efficiency.',
      icon: Compass,
      id: 'planning',
    },
    {
      title: 'Bespoke Construction',
      desc: 'Execution of luxury structural work with high-durability modern concrete, zinc columns, and custom steel frames with zero compromise.',
      icon: Hammer,
      id: 'construction',
    },
    {
      title: 'Interior Masterpieces',
      desc: 'Directing the narrative of interior volume using tailored lighting layouts, luxury stone slabs, sustainable oak, and custom metal fixtures.',
      icon: Layers,
      id: 'interiors',
    },
  ];

  const featuredProjects = [
    {
      title: 'Aura Vista Villa',
      location: 'Beverly Hills, CA',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      desc: 'Seamless indoor-outdoor flows with a dramatic cantilevered pool structure.',
    },
    {
      title: 'Monolith House',
      location: 'Austin, TX',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      desc: 'Raw architectural concrete structured with custom-fabricated timber finishes.',
    },
    {
      title: 'The Zenith Terraces',
      location: 'Miami, FL',
      category: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      desc: 'Bespoke triple-glazed facades showcasing panoramic oceanic vistas.',
    },
    {
      title: 'Solitude Retreat',
      location: 'Aspen, CO',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      desc: 'A fusion of local stone masonry and dynamic floor-to-ceiling glass architecture.',
    },
    {
      title: 'Zinc & Glass Atelier',
      location: 'Portland, OR',
      category: 'Studio',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      desc: 'Industrial workspace featuring exposed structural columns and dynamic natural lighting.',
    },
    {
      title: 'Minimalist Dunes Pavillion',
      location: 'Palm Springs, CA',
      category: 'Bespoke Villa',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      desc: 'Desert estate centered around an elegant open-sky inner courtyard pool.',
    },
    {
      title: 'Starlight Residence',
      location: 'Santa Barbara, CA',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      desc: 'Stunning structural masonry showcasing horizontal geometry and zero-edge styling.',
    },
    {
      title: 'The Linear Oasis',
      location: 'Scottsdale, AZ',
      category: 'Villa',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      desc: 'Luxurious low-profile structural design built to withstand extreme desert heat.',
    },
    {
      title: 'Aero Heights Tower',
      location: 'San Diego, CA',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      desc: 'High-tech modern steel and luxury glass commercial workspace with hanging gardens.',
    },
    {
      title: 'Cedar Creek Lodge',
      location: 'Seattle, WA',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      desc: 'Organic cedar cladding with high-efficiency structural geothermal systems.',
    },
  ];

  return (
    <div className="bg-white text-zinc-900 font-sans">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
        {/* Fullscreen Background with Zoom Pan */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none scale-105 animate-slow-pan"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(9,9,11,0.65), rgba(9,9,11,0.85)), url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <span className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-up block">
            {t('heroSubtitle')}
          </span>

          <h1 className="text-white font-sans font-semibold text-3xl sm:text-5xl md:text-7xl uppercase tracking-[0.08em] leading-tight max-w-4xl select-none animate-fade-up">
            {t('heroTitleLine1')}
          </h1>
          <h2 className="text-gold font-serif italic text-5xl sm:text-7xl md:text-8xl mt-4 tracking-wide select-none animate-fade-up delay-100">
            {t('heroTitleLine2')}
          </h2>

          <p className="text-zinc-300 max-w-xl text-sm sm:text-base md:text-lg font-light tracking-wide mt-8 mb-12 leading-relaxed animate-fade-up delay-200">
            {t('heroDesc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full animate-fade-up delay-300">
            <Link
              to="/packages"
              className="w-56 text-center px-8 py-4 bg-gold hover:bg-gold-hover text-zinc-950 font-semibold text-xs tracking-widest uppercase transition-luxury shadow-lg shadow-gold/15"
            >
              {t('heroBtnPackages')}
            </Link>
            <Link
              to="/contact"
              className="w-56 text-center px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-zinc-950 text-white font-semibold text-xs tracking-widest uppercase transition-luxury"
            >
              {t('heroBtnContact')}
            </Link>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-300 z-10"
          onClick={() => {
            document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-white/40 tracking-[0.4em] text-[9px] font-semibold uppercase hover:text-white/70 transition-colors">
            {t('heroScroll')}
          </span>
          <ChevronDown className="w-4 h-4 text-gold animate-scroll-bounce" />
        </div>

        {/* HERO STATISTICS FLOATING CARDS */}
        <div className="hidden lg:grid grid-cols-4 gap-6 absolute bottom-12 left-6 right-6 max-w-6xl mx-auto z-20">
          <div className="glass-panel-dark p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1">
            <Award className="w-8 h-8 text-gold shrink-0" />
            <div>
              <div className="text-white text-lg font-bold">25+</div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest mt-0.5">Years Experience</div>
            </div>
          </div>
          <div className="glass-panel-dark p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1">
            <Briefcase className="w-8 h-8 text-gold shrink-0" />
            <div>
              <div className="text-white text-lg font-bold">250+</div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest mt-0.5">Projects Delivered</div>
            </div>
          </div>
          <div className="glass-panel-dark p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1">
            <Users className="w-8 h-8 text-gold shrink-0" />
            <div>
              <div className="text-white text-lg font-bold">500+</div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest mt-0.5">Happy Clients</div>
            </div>
          </div>
          <div className="glass-panel-dark p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1">
            <Sparkles className="w-8 h-8 text-gold shrink-0" />
            <div>
              <div className="text-white text-lg font-bold">12+</div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest mt-0.5">Ongoing Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION PREVIEW */}
      <section id="intro-section" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Intro text */}
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
                {t('introSubtitle')}
              </span>
              <h2 className="text-zinc-950 font-serif italic text-4xl sm:text-5xl md:text-6xl tracking-wide mb-8">
                {t('introTitle')}
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
                {t('introDesc1')}
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-12 font-light">
                {t('introDesc2')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase border-b-2 border-zinc-950 pb-2 hover:text-gold hover:border-gold transition-colors group"
              >
                {t('introLearnMore')} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right side: Large image */}
            <div className="relative group">
              <div className="overflow-hidden border border-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Luxury villa with large pool"
                  className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-zinc-950 text-white p-8 hidden sm:block border border-zinc-900">
                <span className="font-serif italic text-3xl font-semibold text-gold block">
                  {t('introBespokePercent')}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 block mt-1">
                  {t('introBespokeLabel')}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Feature Mini Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            <div className="border border-zinc-100 hover:border-zinc-200 p-8 transition-colors duration-300">
              <Sparkles className="w-6 h-6 text-gold mb-5" />
              <h3 className="text-sm font-semibold tracking-wider text-zinc-950 mb-3 uppercase">
                {t('featMaterialsTitle')}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                {t('featMaterialsDesc')}
              </p>
            </div>
            <div className="border border-zinc-100 hover:border-zinc-200 p-8 transition-colors duration-300">
              <Users className="w-6 h-6 text-gold mb-5" />
              <h3 className="text-sm font-semibold tracking-wider text-zinc-950 mb-3 uppercase">
                {t('featEngineersTitle')}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                {t('featEngineersDesc')}
              </p>
            </div>
            <div className="border border-zinc-100 hover:border-zinc-200 p-8 transition-colors duration-300">
              <Shield className="w-6 h-6 text-gold mb-5" />
              <h3 className="text-sm font-semibold tracking-wider text-zinc-950 mb-3 uppercase">
                {t('featSustainableTitle')}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                {t('featSustainableDesc')}
              </p>
            </div>
            <div className="border border-zinc-100 hover:border-zinc-200 p-8 transition-colors duration-300">
              <Clock className="w-6 h-6 text-gold mb-5" />
              <h3 className="text-sm font-semibold tracking-wider text-zinc-950 mb-3 uppercase">
                {t('featDeliveryTitle')}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                {t('featDeliveryDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES PREVIEW */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-zinc-950 font-serif italic text-4xl sm:text-5xl md:text-6xl tracking-wide mb-6">
            Bespoke Architecture Services
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm leading-relaxed mb-20 font-light">
            We provide comprehensive architecture, high-end construction engineering, and luxury interior layout curation.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 text-left">
            {topServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-zinc-100 p-10 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-zinc-200/50 group"
              >
                <div className="w-12 h-12 bg-luxury-beige flex items-center justify-center mb-8 border border-zinc-100 transition-colors duration-300 group-hover:bg-zinc-950 group-hover:text-white">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-sm font-semibold tracking-widest text-zinc-950 mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-light mb-8">
                  {service.desc}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-zinc-950 border-b border-transparent group-hover:border-zinc-900 group-hover:text-gold transition-all duration-300"
                >
                  Explore Details
                </Link>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-block px-10 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-widest uppercase transition-luxury"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US PREVIEW */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Image of site */}
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Architect reviewing plans on construction site"
                className="w-full h-[500px] object-cover border border-zinc-100 shadow-lg shadow-zinc-100"
              />
            </div>

            {/* Right side: Benefits lists */}
            <div className="order-1 lg:order-2">
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
                Why Choose us
              </span>
              <h2 className="text-zinc-950 font-serif italic text-4xl sm:text-5xl tracking-wide mb-12">
                Uncompromising Quality. Reliable Timelines.
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-none border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="text-gold text-xs font-bold font-serif">01</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-zinc-950 uppercase mb-2">
                      Modern Design
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      Curated floor plans that honor natural wind flow and optimize thermal dynamics using sleek luxury elements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-none border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="text-gold text-xs font-bold font-serif">02</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-zinc-950 uppercase mb-2">
                      Trusted Team
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      A network of premier custom engineers, site audits, and interior craftspeople working under one vision.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-none border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="text-gold text-xs font-bold font-serif">03</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-zinc-950 uppercase mb-2">
                      Quality Construction
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      Double-reinforced foundations, superior water proofing, and eco-certified luxurious limestone finishes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-none border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="text-gold text-xs font-bold font-serif">04</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-zinc-950 uppercase mb-2">
                      On-Time Delivery
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      Proprietary staging software reports precise schedules, ensuring seamless key handover on the exact day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS PREVIEW */}
      <section className="py-32 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
                Portfolio Preview
              </span>
              <h2 className="text-zinc-950 font-serif italic text-4xl sm:text-5xl md:text-6xl tracking-wide">
                Signature Architectures
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-6 md:mt-0 px-8 py-3.5 border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white text-xs font-semibold tracking-widest uppercase transition-luxury"
            >
              Explore All Projects
            </Link>
          </div>

          {/* Masonry-style Grid showing 10 Premium Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 9).map((project, index) => (
              <div
                key={project.title}
                className={`bg-white border border-zinc-100 overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 ${
                  index % 3 === 1 ? 'lg:translate-y-6' : ''
                }`}
              >
                <div className="overflow-hidden relative h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-zinc-950 text-white text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 border border-zinc-800">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-gold text-[10px] uppercase tracking-widest font-semibold block mb-1">
                    {project.location}
                  </span>
                  <h3 className="text-zinc-950 text-sm font-semibold tracking-widest uppercase mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light mb-6">
                    {project.desc}
                  </p>
                  <Link
                    to="/projects"
                    className="text-[9px] font-bold tracking-widest uppercase text-zinc-900 inline-flex items-center gap-1.5 hover:text-gold transition-colors"
                  >
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATISTICS SECTION (DARK LUXURY) */}
      <section className="py-36 bg-zinc-950 text-white border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-gold text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif">
                <AnimatedCounter endValue="150" suffix="+" />
              </div>
              <div className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-light mt-2">
                Luxury Projects
              </div>
            </div>
            <div>
              <div className="text-gold text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif">
                <AnimatedCounter endValue="100" suffix="%" />
              </div>
              <div className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-light mt-2">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-gold text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif">
                <AnimatedCounter endValue="10" suffix="+" />
              </div>
              <div className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-light mt-2">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-gold text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif">
                <AnimatedCounter endValue="50" suffix="+" />
              </div>
              <div className="text-zinc-400 text-xs uppercase tracking-[0.25em] font-light mt-2">
                Expert Engineers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              Client Testimonials
            </span>
            <h2 className="text-zinc-950 font-serif italic text-4xl sm:text-5xl tracking-wide">
              Shared Luxury Experiences
            </h2>
            <p className="text-zinc-500 max-w-md mx-auto text-sm leading-relaxed mt-4 font-light">
              Don't take our word for it. Read honest reflections of high-end home and project handovers from our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-panel-light p-10 border border-zinc-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-zinc-100 hover:-translate-y-1">
              <div>
                <MessageSquare className="w-8 h-8 text-gold/30 mb-6" />
                <p className="text-zinc-700 text-xs sm:text-sm italic leading-relaxed font-light mb-8">
                  "Working with ARKHE. was a masterclass in modern luxury. Their architectural team designed a cantilevered masterpiece that captured beach winds perfectly. The concrete and timber finishes are absolutely flawless. Truly an outstanding custom villa."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Julian Henderson Client Profile"
                  className="w-12 h-12 rounded-none object-cover grayscale"
                />
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-zinc-950 uppercase">
                    Julian Henderson
                  </h4>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-light">
                    Oceanic Villa Owner
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel-light p-10 border border-zinc-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-zinc-100 hover:-translate-y-1">
              <div>
                <MessageSquare className="w-8 h-8 text-gold/30 mb-6" />
                <p className="text-zinc-700 text-xs sm:text-sm italic leading-relaxed font-light mb-8">
                  "The turnkey project management structure removed all typical construction anxieties. We received meticulous budget and staging metrics weekly. From foundation drilling to final hand-blown lighting installations, they delivered unmatched luxury and precision."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Elizabeth Vance Client Profile"
                  className="w-12 h-12 rounded-none object-cover grayscale"
                />
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-zinc-950 uppercase">
                    Elizabeth Vance
                  </h4>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-light">
                    Apex Holdings VP
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel-light p-10 border border-zinc-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-zinc-100 hover:-translate-y-1">
              <div>
                <MessageSquare className="w-8 h-8 text-gold/30 mb-6" />
                <p className="text-zinc-700 text-xs sm:text-sm italic leading-relaxed font-light mb-8">
                  "ARKHE. successfully restructured our commercial design studio. They balanced exposed steel columns with warm red-cedar partitions. The architectural layout facilitates dynamic flow while minimizing heat transmission. Absolutely brilliant."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Marcus Thorne Client Profile"
                  className="w-12 h-12 rounded-none object-cover grayscale"
                />
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-zinc-950 uppercase">
                    Marcus Thorne
                  </h4>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-light">
                    Atelier Director
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW BRANCH LOCATIONS SECTION */}
      <BranchLocations />

      {/* 8. CALL TO ACTION (CTA) SECTION */}
      <section className="relative py-36 bg-zinc-950 text-white overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            Let's Collaborate
          </span>
          <h2 className="font-serif italic text-4xl sm:text-6xl tracking-wide mb-6 leading-tight max-w-2xl">
            Let’s Build Something Extraordinary.
          </h2>
          <p className="text-zinc-400 max-w-lg text-sm leading-relaxed mb-12 font-light">
            Contact us today to arrange a private blueprint screening. Explore custom spatial layouts, material scheduling, and high-end construction timelines with our experts.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4.5 bg-gold hover:bg-gold-hover text-zinc-950 font-semibold text-xs tracking-widest uppercase transition-luxury shadow-lg shadow-gold/20"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
