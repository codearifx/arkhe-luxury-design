import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  Hammer,
  Layers,
  Home as HomeIcon,
  RotateCw,
  Sliders,
  CheckCircle,
} from 'lucide-react';

export default function Services() {
  const { hash } = useLocation();

  // Scroll to hash element if URL contains one (useful for navbar dropdown navigation)
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  const serviceCategories = [
    {
      id: 'construction',
      title: 'Trusted Construction Service',
      desc: 'High-end civil and structural execution of custom architectural masterpieces. We specialize in low-carbon architectural concrete, cantilevered structural steel systems, and extreme-durability foundations designed to last generations.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      icon: Hammer,
      specs: [
        { label: 'Foundations', value: 'Double-reinforced concrete cores' },
        { label: 'Seismic Resilience', value: 'Zone 4 earthquake standard compliance' },
        { label: 'Structural Columns', value: 'High-strength structural steel' },
        { label: 'Concrete Finishes', value: 'Polished micro-cement & fair-faced raw panels' },
      ],
    },
    {
      id: 'design',
      title: 'Modern Design Solutions',
      desc: 'Conceptualizing signature layouts that balance architectural geometry with environmental vectors. We perform detailed daylight projections, wind vector modeling, passive thermal analysis, and deliver premium 3D virtual blueprints.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      icon: Compass,
      specs: [
        { label: 'Layout Customization', value: '100% bespoke spatial tailoring' },
        { label: 'Virtual Blueprinting', value: 'High-fidelity 3D renderings & VR walk-throughs' },
        { label: 'Vector Mapping', value: 'Detailed wind and sun projections' },
        { label: 'Acoustic Glazing', value: 'Sound-isolation thermal engineering' },
      ],
    },
    {
      id: 'materials',
      title: 'High Quality Materials',
      desc: 'Sourcing and preparing the finest, most durable materials on the planet. From hand-selected Carrara marble and sustainable red-cedar boards to corrosion-proof zinc claddings, we secure materials that age beautifully.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      icon: Layers,
      specs: [
        { label: 'Stone Selections', value: 'Carrara Marble, Quartzite, Premium Limestone' },
        { label: 'Timber cladding', value: 'FSC-Certified Redwood & Sustainable Western Cedar' },
        { label: 'Metallic Elements', value: 'Pre-weathered zinc facades & anodized aluminum' },
        { label: 'Eco-Commitment', value: 'Low VOC finishes & recycled mineral composites' },
      ],
    },
    {
      id: 'interiors',
      title: 'Interior Architecture & Curation',
      desc: 'Synthesizing the interior volume with the external geometry. We design architectural lighting systems, custom flush-fitted cabinetry, integrated smart-home fixtures, and curated luxury bathroom suites.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      icon: HomeIcon,
      specs: [
        { label: 'Cabinetry', value: 'Bespoke hand-crafted seamless oak millwork' },
        { label: 'Lighting Systems', value: 'Integrated DALI-dimmable architectural LEDs' },
        { label: 'Bathroom Suites', value: 'Monolithic stone basins & gold-finish hardware' },
        { label: 'Smart Home', value: 'KNX home automation & centralized controls' },
      ],
    },
    {
      id: 'renovation',
      title: 'Luxury Renovation & Upgrades',
      desc: 'Restructuring existing architectural landmarks to meet modern luxury and thermal standards. We reinforce old foundations, open up dark vertical spaces, replace legacy glazing, and install modern mechanical plants.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
      icon: RotateCw,
      specs: [
        { label: 'Structural Reinforcing', value: 'Underpinning & micro-piling systems' },
        { label: 'Glazing Upgrades', value: 'Retrofitting double & triple acoustic thermal frames' },
        { label: 'Mechanical Plants', value: 'High-efficiency heat pumps & heat-recovery ventilation' },
        { label: 'Spatial Opening', value: 'Removal of load-bearing walls with steel beams' },
      ],
    },
    {
      id: 'management',
      title: 'Turnkey Project Management',
      desc: 'Directing the complete project scope from ground-breaking to ribbon-cutting. We maintain strict timeline audits, oversee custom subcontractor bids, secure zoning certifications, and report transparent financial breakdowns weekly.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
      icon: Sliders,
      specs: [
        { label: 'Schedule Tracking', value: 'Proprietary critical-path staging software' },
        { label: 'Audit Systems', value: 'Weekly line-item expense statements & photos' },
        { label: 'Regulatory Handovers', value: 'End-to-end zoning approvals & occupancy certs' },
        { label: 'Client Collaboration', value: 'Dedicated digital communication portal' },
      ],
    },
  ];

  return (
    <div className="bg-white text-zinc-900 font-sans pt-24">
      {/* Services Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block animate-fade-up">
            Our Offerings
          </span>
          <h1 className="text-zinc-950 font-serif italic text-4xl sm:text-6xl tracking-wide mb-6 animate-fade-up">
            Services & Specifications
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light animate-fade-up delay-100">
            ARKHE. provides unified custom planning, precise civil engineering, and hand-selected luxury curation. We handle your high-end project end-to-end with absolute transparency and reliability.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {serviceCategories.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 border-b border-zinc-100 last:border-0 scroll-mt-24 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Block */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="overflow-hidden border border-zinc-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-zinc-950 text-white flex items-center justify-center border border-zinc-900 shadow-md">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
              </div>

              {/* Text Specs Block */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-gold text-[10px] font-semibold tracking-widest uppercase mb-3 block">
                  {`0${index + 1} • SPECIFICATIONS`}
                </span>
                <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-4xl tracking-wide mb-6">
                  {service.title}
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                  {service.desc}
                </p>

                {/* Technical Specs List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="border-b border-zinc-100 pb-3 flex flex-col gap-1">
                      <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs text-zinc-800 font-medium">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Quality Assurance */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
                Quality Assurance
              </span>
              <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-4xl tracking-wide mb-8">
                Strict Quality Standards
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light mb-8">
                Every custom home engineered by ARKHE. undergoes rigorous design reviews, multi-point stress auditing, and continuous third-party concrete core testing. We secure a structural guarantee on every build.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-zinc-800 text-xs font-semibold tracking-wider uppercase">
                    Continuous Civil Oversight (Daily log records)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-zinc-800 text-xs font-semibold tracking-wider uppercase">
                    Raw Material Sourcing Audits with certificate tracking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-zinc-800 text-xs font-semibold tracking-wider uppercase">
                    LEED Green Building certification coordination
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-zinc-800 text-xs font-semibold tracking-wider uppercase">
                    Comprehensive structural guarantee
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[400px] border border-zinc-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury finished architectural detailing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden text-center relative flex items-center justify-center border-t border-zinc-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            Let's Ground Your Vision
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl tracking-wide mb-6">
            Ready to Begin Drafting?
          </h2>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed mb-10 font-light">
            Contact our architectural studio to schedule a detailed blueprints consultation and review structural options.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-gold hover:bg-gold-hover text-zinc-950 font-semibold text-xs tracking-widest uppercase transition-luxury"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
