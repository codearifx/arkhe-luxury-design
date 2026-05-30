import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Users,
  Timer,
  Layers,
  Leaf,
  CheckCircle,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

export default function About() {
  const timelineEvents = [
    {
      year: '2016',
      title: 'Studio Foundation',
      desc: 'ARKHE. was established in Los Angeles by a group of architects and civil engineers who wanted to translate high-end minimal philosophy into absolute, long-lasting residential reality.',
    },
    {
      year: '2018',
      title: 'Signature Villa Award',
      desc: 'Our Aura Vista design won the Prestige Architectural Review, securing our reputation for cantilevered concrete structures and zero-boundary indoor-outdoor flow.',
    },
    {
      year: '2021',
      title: 'Sustainable LEED Milestone',
      desc: 'Fully committed to low-carbon passive homes. We completed three net-zero luxury desert estates that optimize wind vectors and solar storage with zero structural compromises.',
    },
    {
      year: '2024',
      title: 'Global High-Rise Handover',
      desc: 'Successfully delivered the Aero Heights commercial milestone in San Diego. It features dynamic steel geometry and horizontal hanging terraces with vertical gardens.',
    },
  ];

  const expertises = [
    {
      title: 'Experienced Engineers',
      desc: 'Our civil and structural engineers perform multi-point load auditing and stress assessments for mathematically sound architectural shapes.',
      icon: ShieldCheck,
    },
    {
      title: 'Premium Materials',
      desc: 'We curate materials individually for every site: premium Carrara marble, custom-rolled zinc siding, thermal triple-glazed glass, and local red cedar.',
      icon: Layers,
    },
    {
      title: 'Modern Designs',
      desc: 'We reject generic boxes. Every layout is customized around specific sun pathways, wind directions, and the landscape\'s horizontal contour.',
      icon: Award,
    },
    {
      title: 'On-Time Delivery',
      desc: 'Through our dedicated staging portal, clients receive real-time scheduling metrics, securing handovers on the exact week contracted.',
      icon: Timer,
    },
    {
      title: 'Safety Standards',
      desc: 'We maintain zero-incident structural ratings. Every foundation, structural beam, and retaining wall is engineered to withstand double the legal seismic tolerance.',
      icon: Leaf,
    },
  ];

  const team = [
    {
      name: 'Arthur Vance',
      role: 'Principal Architect & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Swiss Federal Institute of Technology alumnus. Arthur synthesizes concrete geometries with natural light.',
    },
    {
      name: 'Helena Sterling',
      role: 'Chief Structural Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'MIT graduate specializing in high-load cantilevered steel and micro-reinforced concrete systems.',
    },
    {
      name: 'Marcus Thorne',
      role: 'Director of Interiors',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Expert curator of raw textures, custom lighting layouts, and organic wood panel integrations.',
    },
    {
      name: 'Clara Dupont',
      role: 'Lead Sustainable Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'LEED AP specialist focusing on active solar systems, greywater treatment, and passive heating structures.',
    },
  ];

  return (
    <div className="bg-white text-zinc-900 font-sans pt-24">
      {/* 1. INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Who We Are
          </span>
          <h1 className="text-zinc-950 font-serif italic text-4xl sm:text-6xl tracking-wide max-w-4xl mb-12">
            We Craft Architectural Definitions of Modern Luxury.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
                ARKHE. was founded on a simple structural premise: architecture should be both a visual wonder and a mathematical masterpiece. We reject typical designs in favor of elegant geometries, organic materials, and long-lasting engineering.
              </p>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Our team represents a cohesive network of principal architects, custom engineers, sustainable design auditors, and handpicked master craftspeople. Together, we manage projects end-to-end, from the initial wind-vector simulations to custom interior marble installations.
              </p>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                We believe that premium homes must honor their natural environment. By incorporating geothermal heat exchangers, passive ventilation systems, and triple-layer acoustic glazing, our villas offer unmatched luxury comfort while respecting resources.
              </p>
            </div>
            <div>
              <div className="border-l-4 border-gold pl-8">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                  Our Core Philosophy
                </span>
                <p className="text-zinc-800 font-serif italic text-lg sm:text-xl leading-relaxed font-light">
                  "Architecture is not merely about erecting enclosures. It is the art of structuring daylight, channeling horizontal flows, and framing the natural environment in concrete and steel."
                </p>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block mt-4">
                  — Arthur Vance, Founder
                </span>
              </div>
            </div>
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="h-[300px] border border-zinc-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Architecture view 1"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="h-[300px] border border-zinc-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Architecture view 2"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="h-[300px] border border-zinc-100 overflow-hidden sm:col-span-2 lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Architecture pool view"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY (TIMELINE LAYOUT) */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-5xl tracking-wide">
              The Evolution of ARKHE.
            </h2>
            <p className="text-zinc-500 max-w-sm mx-auto text-xs leading-relaxed mt-4 font-light">
              How a small design atelier transformed into an international luxury building milestone.
            </p>
          </div>

          <div className="relative border-l border-zinc-200 max-w-4xl mx-auto pl-8 sm:pl-12 py-4">
            {timelineEvents.map((event) => (
              <div key={event.year} className="mb-16 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 bg-zinc-950 border-4 border-white rounded-none flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gold" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="font-serif italic font-bold text-2xl sm:text-3xl text-gold shrink-0">
                    {event.year}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest text-zinc-950 uppercase mb-3">
                      {event.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (SPLIT CARDS) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="border border-zinc-100 p-10 hover:shadow-xl hover:shadow-zinc-50 transition-all duration-300">
              <h3 className="text-gold font-serif italic text-2xl mb-4">Innovation</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                We combine thermal vector design with solar glass cells and premium concrete composites. By constant testing, we pioneer engineering structural form elements that push building limits.
              </p>
            </div>
            <div className="border border-zinc-100 p-10 hover:shadow-xl hover:shadow-zinc-50 transition-all duration-300">
              <h3 className="text-gold font-serif italic text-2xl mb-4">Customer Satisfaction</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                We deliver a premium custom building portal. Weekly schedule updates, financial statements, and material receipts are transparently documented for a seamless premium handover.
              </p>
            </div>
            <div className="border border-zinc-100 p-10 hover:shadow-xl hover:shadow-zinc-50 transition-all duration-300">
              <h3 className="text-gold font-serif italic text-2xl mb-4">Quality Construction</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                No shortcutting. We implement reinforced foundation bases, micro-cement luxury screeds, custom steel structures, and premium natural stones rated for double-strength lifetime durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (FEATURE CARDS WITH ICONS) */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              Our Value Proposition
            </span>
            <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-5xl tracking-wide">
              Engineering Expertise
            </h2>
            <p className="text-zinc-500 max-w-sm mx-auto text-xs leading-relaxed mt-4 font-light">
              Meticulous details that distinguish our luxury construction from average builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {expertises.map((exp, index) => (
              <div
                key={exp.title}
                className="bg-white border border-zinc-100 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-100/50"
              >
                <div>
                  <div className="w-10 h-10 bg-luxury-beige flex items-center justify-center border border-zinc-100 mb-6">
                    <exp.icon className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="text-xs font-semibold tracking-widest text-zinc-950 mb-4 uppercase">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-500 text-[11px] leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </div>
                <div className="text-zinc-300 font-serif italic text-2xl text-right mt-6">
                  {`0${index + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              The Minds of ARKHE.
            </span>
            <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-5xl tracking-wide">
              Architects & Custom Engineers
            </h2>
            <p className="text-zinc-500 max-w-sm mx-auto text-xs leading-relaxed mt-4 font-light">
              Our principal team bringing together structural calculations and premium layout art.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-zinc-50 border border-zinc-100 overflow-hidden group hover:bg-white hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100/50 transition-all duration-500"
              >
                <div className="overflow-hidden h-80 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-xs font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold tracking-widest text-zinc-950 uppercase mb-1">
                    {member.name}
                  </h3>
                  <span className="text-[10px] text-gold uppercase tracking-widest font-semibold">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS */}
      <section className="py-20 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-gold text-4xl sm:text-5xl font-bold font-serif italic mb-2">
                150+
              </div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest font-light">
                Luxury Projects
              </div>
            </div>
            <div>
              <div className="text-gold text-4xl sm:text-5xl font-bold font-serif italic mb-2">
                100+
              </div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest font-light">
                Custom Clients
              </div>
            </div>
            <div>
              <div className="text-gold text-4xl sm:text-5xl font-bold font-serif italic mb-2">
                10+
              </div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest font-light">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-gold text-4xl sm:text-5xl font-bold font-serif italic mb-2">
                50+
              </div>
              <div className="text-zinc-400 text-[10px] uppercase tracking-widest font-light">
                Expert Engineers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Endorsements
          </span>
          <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-4xl tracking-wide mb-12">
            A Legacy of Customer Satisfaction
          </h2>

          <div className="glass-panel-light p-10 sm:p-12 border border-zinc-100 mb-8 relative">
            <p className="text-zinc-700 text-sm sm:text-base italic leading-relaxed font-light mb-8">
              "We commissioned ARKHE. to build our luxury coastal home. Throughout the process, the engineering calculations, architectural coordination, and custom structural glazing was managed perfectly. The end result is a masterpiece of light and form."
            </p>
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold tracking-widest text-zinc-950 uppercase block">
                Lawrence & Sophia K.
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-light mt-1 animate-fade-in">
                Malibu Estate Owners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden text-center relative flex items-center justify-center border-t border-zinc-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            Join Our Clients
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl tracking-wide mb-6">
            Build Your Future With Us.
          </h2>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed mb-10 font-light">
            Whether you hold detailed layouts or seek conceptual design solutions, collaborate with our engineers and architects.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-gold hover:bg-gold-hover text-zinc-950 font-semibold text-xs tracking-widest uppercase transition-luxury"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
