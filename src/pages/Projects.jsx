import { useState } from 'react';
import { X, ArrowRight, MapPin, Calendar, Compass, Layers, Minimize } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      title: 'Aura Vista Villa',
      category: 'villa',
      categoryLabel: 'Villa Architecture',
      location: 'Beverly Hills, CA',
      year: '2024',
      area: '8,500 sq. ft.',
      architect: 'Arthur Vance',
      materials: 'Fair-faced concrete, pre-weathered zinc, cedar cladding',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
      desc: 'Seamless indoor-outdoor flows with a dramatic cantilevered pool structure. High-ceiling spatial layouts are engineered to frame mountain vistas while utilizing passive cooling air-draft pathways.',
    },
    {
      title: 'Monolith House',
      category: 'villa',
      categoryLabel: 'Villa Architecture',
      location: 'Austin, TX',
      year: '2023',
      area: '6,200 sq. ft.',
      architect: 'Arthur Vance',
      materials: 'Reinforced architectural concrete, native limestone masonry',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      desc: 'Raw architectural concrete structured with custom-fabricated timber finishes. The structure is integrated directly into a native limestone slope, using thermal mass properties for interior warmth.',
    },
    {
      title: 'The Zenith Terraces',
      category: 'interior',
      categoryLabel: 'Bespoke Interiors',
      location: 'Miami, FL',
      year: '2024',
      area: '4,500 sq. ft.',
      architect: 'Marcus Thorne',
      materials: 'Carrara marble, customized brass profiles, smoked oak parquet',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      desc: 'Bespoke triple-glazed facades showcasing panoramic oceanic vistas. The interior volumes organize spatial narratives centered around monolithic stone basins and warm, indirect ambient lighting layouts.',
    },
    {
      title: 'Solitude Retreat',
      category: 'villa',
      categoryLabel: 'Villa Architecture',
      location: 'Aspen, CO',
      year: '2022',
      area: '7,800 sq. ft.',
      architect: 'Clara Dupont',
      materials: 'Local basalt rock, triple-layer thermal glazing, steel frame',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      desc: 'A fusion of local stone masonry and dynamic floor-to-ceiling glass architecture. Passive solar windows absorb maximum radiant heat during sub-zero mountain seasons, reducing standard HVAC loading.',
    },
    {
      title: 'Zinc & Glass Atelier',
      category: 'interior',
      categoryLabel: 'Bespoke Interiors',
      location: 'Portland, OR',
      year: '2023',
      area: '3,200 sq. ft.',
      architect: 'Marcus Thorne',
      materials: 'Pre-weathered dark zinc siding, industrial metal frame, concrete floors',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      desc: 'Industrial workspace featuring exposed structural columns and dynamic natural lighting. Designed with acoustic micro-perforated wood panels to limit internal echoing while framing cedar forest views.',
    },
    {
      title: 'Minimalist Dunes Pavillion',
      category: 'villa',
      categoryLabel: 'Villa Architecture',
      location: 'Palm Springs, CA',
      year: '2023',
      area: '5,500 sq. ft.',
      architect: 'Arthur Vance',
      materials: 'Stucco, heat-reflective glazing, light-gray travertine',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      desc: 'Desert estate centered around an elegant open-sky inner courtyard pool. Utilizes a low horizontal silhouette and heat-reflective glazing systems to establish cooling shade vectors naturally.',
    },
    {
      title: 'Aero Heights Tower',
      category: 'commercial',
      categoryLabel: 'Commercial Landmarks',
      location: 'San Diego, CA',
      year: '2024',
      area: '85,000 sq. ft.',
      architect: 'Helena Sterling',
      materials: 'Low-E structural glass, anodized aluminum, carbon-fiber columns',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      desc: 'High-tech modern steel and luxury glass commercial workspace with hanging gardens. Structural carbon-fiber columns facilitate sweeping open-floor plans with maximum glazing exposure and zero interior obstructions.',
    },
    {
      title: 'Starlight Residence',
      category: 'villa',
      categoryLabel: 'Villa Architecture',
      location: 'Santa Barbara, CA',
      year: '2022',
      area: '9,200 sq. ft.',
      architect: 'Arthur Vance',
      materials: 'Sanded limestone, micro-reinforced concrete frames, oak ceilings',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
      desc: 'Stunning structural masonry showcasing horizontal geometry and zero-edge styling. Features floor-level pocketing glass systems that slide seamlessly into structural concrete cavity walls.',
    },
    {
      title: 'The Linear Oasis',
      category: 'villa',
      categoryLabel: 'Villa Architecture',
      location: 'Scottsdale, AZ',
      year: '2021',
      area: '6,900 sq. ft.',
      architect: 'Clara Dupont',
      materials: 'Earth-sheltered concrete wall systems, copper cladding elements',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      desc: 'Luxurious low-profile structural design built to withstand extreme desert heat. Utilizes thick earth-sheltered concrete structures and deep overhang shades to block thermal radiation entirely.',
    },
    {
      title: 'Cedar Creek Lodge',
      category: 'villa',
      categoryLabel: 'Villa Architecture',
      location: 'Seattle, WA',
      year: '2023',
      area: '4,800 sq. ft.',
      architect: 'Helena Sterling',
      materials: 'Reclaimed cedar boards, triple-layer structural glazing, steel beams',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
      desc: 'Organic cedar cladding with high-efficiency structural geothermal systems. Glazing systems frame mountain forest vistas, utilizing high-efficiency heat-recovery ventilators to capture warm exhaust currents.',
    },
    {
      title: 'The Zenith Workspace',
      category: 'commercial',
      categoryLabel: 'Commercial Landmarks',
      location: 'San Jose, CA',
      year: '2024',
      area: '42,000 sq. ft.',
      architect: 'Helena Sterling',
      materials: 'Micro-cement exterior slabs, solar panels, triple-glazed glass',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      desc: 'Net-zero carbon corporate headquarters. Integrating passive solar roof design, automated light sensors, structural concrete cores, and highly effective solar panels generating surplus grid electricity.',
    },
    {
      title: 'Bespoke Loft Curation',
      category: 'interior',
      categoryLabel: 'Bespoke Interiors',
      location: 'San Francisco, CA',
      year: '2023',
      area: '2,800 sq. ft.',
      architect: 'Marcus Thorne',
      materials: 'Polished concrete screed, blackened structural steel, red-oak panels',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
      desc: 'Industrial warehouse loft converted into a luxury private residence. Blackened structural steel elements separate double-height living areas from private suites, using warm timber acoustics.',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white text-zinc-900 font-sans pt-24 min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block animate-fade-up">
            Our Work
          </span>
          <h1 className="text-zinc-950 font-serif italic text-4xl sm:text-6xl tracking-wide mb-6 animate-fade-up">
            Architectural Masterpieces
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light animate-fade-up delay-100">
            Explore our curated portfolio of bespoke custom villas, commercial landmarks, and high-end spatial interior narratives engineered to perfection.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-12 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-3 sm:gap-6">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2.5 text-[10px] font-semibold tracking-widest uppercase border transition-all duration-300 ${
              activeFilter === 'all'
                ? 'border-zinc-900 bg-zinc-900 text-white'
                : 'border-zinc-100 text-zinc-600 hover:border-zinc-300'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setActiveFilter('villa')}
            className={`px-6 py-2.5 text-[10px] font-semibold tracking-widest uppercase border transition-all duration-300 ${
              activeFilter === 'villa'
                ? 'border-zinc-900 bg-zinc-900 text-white'
                : 'border-zinc-100 text-zinc-600 hover:border-zinc-300'
            }`}
          >
            Villa Architecture
          </button>
          <button
            onClick={() => setActiveFilter('commercial')}
            className={`px-6 py-2.5 text-[10px] font-semibold tracking-widest uppercase border transition-all duration-300 ${
              activeFilter === 'commercial'
                ? 'border-zinc-900 bg-zinc-900 text-white'
                : 'border-zinc-100 text-zinc-600 hover:border-zinc-300'
            }`}
          >
            Commercial Landmarks
          </button>
          <button
            onClick={() => setActiveFilter('interior')}
            className={`px-6 py-2.5 text-[10px] font-semibold tracking-widest uppercase border transition-all duration-300 ${
              activeFilter === 'interior'
                ? 'border-zinc-900 bg-zinc-900 text-white'
                : 'border-zinc-100 text-zinc-600 hover:border-zinc-300'
            }`}
          >
            Bespoke Interiors
          </button>
        </div>
      </section>

      {/* Projects Grid Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-zinc-100 overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div className="overflow-hidden relative h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-zinc-950/90 text-white text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 border border-zinc-800">
                    {project.categoryLabel}
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-gold text-[10px] uppercase tracking-widest font-semibold block mb-1">
                    {project.location} • {project.year}
                  </span>
                  <h3 className="text-zinc-950 text-sm font-semibold tracking-widest uppercase mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light mb-6 line-clamp-2">
                    {project.desc}
                  </p>
                  <button className="text-[10px] font-bold tracking-widest uppercase text-zinc-950 inline-flex items-center gap-2 group-hover:text-gold transition-colors">
                    Explore Renders & Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROJECT OVERLAY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
          <div className="bg-white border border-zinc-200 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 bg-zinc-950 text-white p-2.5 border border-zinc-900 hover:bg-gold hover:text-zinc-950 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Block */}
              <div className="h-[300px] lg:h-auto overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Specs Block */}
              <div className="p-8 sm:p-12">
                <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-3 block">
                  {selectedProject.categoryLabel}
                </span>
                <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-4xl tracking-wide mb-6">
                  {selectedProject.title}
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                  {selectedProject.desc}
                </p>

                {/* Specs List */}
                <div className="border-t border-zinc-100 pt-8 flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                    <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold" /> Location
                    </span>
                    <span className="text-xs font-semibold text-zinc-900">{selectedProject.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                    <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold" /> Handover Year
                    </span>
                    <span className="text-xs font-semibold text-zinc-900">{selectedProject.year}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                    <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-gold" /> Architect
                    </span>
                    <span className="text-xs font-semibold text-zinc-900">{selectedProject.architect}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                    <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                      <Minimize className="w-3.5 h-3.5 text-gold" /> Spatial Area
                    </span>
                    <span className="text-xs font-semibold text-zinc-900">{selectedProject.area}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-zinc-100 pb-3">
                    <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-gold" /> Materials Used
                    </span>
                    <span className="text-xs font-semibold text-zinc-800 leading-relaxed font-light">
                      {selectedProject.materials}
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-widest uppercase transition-luxury"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic CTA */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden text-center relative flex items-center justify-center border-t border-zinc-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            Custom Commissions
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl tracking-wide mb-6">
            Ready to Build Your Masterpiece?
          </h2>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed mb-10 font-light">
            Coordinate with Arthur Vance and Helena Sterling to evaluate spatial options, structural calculations, and custom interior finishes.
          </p>
          <a
            href="/contact"
            className="px-10 py-4 bg-gold hover:bg-gold-hover text-zinc-950 font-semibold text-xs tracking-widest uppercase transition-luxury"
          >
            Start Project Proposal
          </a>
        </div>
      </section>
    </div>
  );
}
