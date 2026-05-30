import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Building } from 'lucide-react';

export default function BranchLocations() {
  const { t } = useLanguage();

  const branches = [
    {
      id: 'chennai',
      city: 'Chennai',
      nameKey: 'branchChennaiName',
      descKey: 'branchChennaiDesc',
      addrKey: 'branchChennaiAddr',
      phoneKey: 'branchChennaiPhone',
      image: '/images/chennai_branch.png',
    },
    {
      id: 'bengaluru',
      city: 'Bengaluru',
      nameKey: 'branchBengaluruName',
      descKey: 'branchBengaluruDesc',
      addrKey: 'branchBengaluruAddr',
      phoneKey: 'branchBengaluruPhone',
      image: '/images/bengaluru_branch.png',
    },
    {
      id: 'madurai',
      city: 'Madurai',
      nameKey: 'branchMaduraiName',
      descKey: 'branchMaduraiDesc',
      addrKey: 'branchMaduraiAddr',
      phoneKey: 'branchMaduraiPhone',
      image: '/images/madurai_branch.png',
    },
    {
      id: 'pondicherry',
      city: 'Pondicherry',
      nameKey: 'branchPondicherryName',
      descKey: 'branchPondicherryDesc',
      addrKey: 'branchPondicherryAddr',
      phoneKey: 'branchPondicherryPhone',
      image: '/images/pondicherry_branch.png',
    },
    {
      id: 'tirunelveli',
      city: 'Tirunelveli',
      nameKey: 'branchTirunelveliName',
      descKey: 'branchTirunelveliDesc',
      addrKey: 'branchTirunelveliAddr',
      phoneKey: 'branchTirunelveliPhone',
      image: '/images/tirunelveli_branch.png',
    },
  ];

  return (
    <section id="branches" className="py-32 bg-zinc-950 text-white scroll-mt-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full border-t border-b border-dashed border-zinc-700 grid grid-cols-6 grid-rows-6">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-zinc-800/20" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            {t('branchSubtitle')}
          </span>
          <h2 className="font-serif italic text-4xl sm:text-6xl tracking-wide mb-6">
            {t('branchTitle')}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
            {t('branchDesc')}
          </p>
        </div>

        {/* 5 Locations Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group relative w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] min-h-[420px] bg-zinc-900 border border-zinc-900 overflow-hidden flex flex-col justify-end p-8 hover:border-gold/40 hover:shadow-[0_0_35px_rgba(197,168,128,0.25)] hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              {/* Background Office Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${branch.image}')` }}
              />

              {/* Dark Overlays */}
              {/* Default Gradient shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-0" />
              {/* Hover Darken Overlay */}
              <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Foreground Card Content */}
              <div className="relative z-10 flex flex-col gap-4 text-left">
                {/* Header: Map Pin & City */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-zinc-950/80 border border-zinc-800 text-gold flex items-center justify-center shrink-0 rounded-none group-hover:bg-gold group-hover:text-zinc-950 transition-colors duration-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-[9px] tracking-widest font-mono uppercase block">
                      {t('navServices')}
                    </span>
                    <h3 className="text-white font-serif italic text-2xl group-hover:text-gold transition-colors duration-500">
                      {t(branch.nameKey)}
                    </h3>
                  </div>
                </div>

                {/* Always visible tagline/explore indicator */}
                <div className="w-full h-[1px] bg-zinc-800 group-hover:bg-gold/30 transition-colors duration-500 my-2" />

                {/* Animated Reveal Section */}
                <div className="max-h-0 opacity-0 overflow-hidden -translate-y-2 group-hover:max-h-[300px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out flex flex-col gap-4">
                  {/* Description */}
                  <p className="text-zinc-300 text-xs leading-relaxed font-light">
                    {t(branch.descKey)}
                  </p>

                  <div className="flex flex-col gap-2 pt-2 border-t border-zinc-800/50">
                    {/* Address details */}
                    <div className="flex gap-2.5 items-start">
                      <Building className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase tracking-wider block font-semibold">
                          {t('branchAddressLabel')}
                        </span>
                        <span className="text-zinc-300 text-[11px] leading-relaxed">
                          {t(branch.addrKey)}
                        </span>
                      </div>
                    </div>

                    {/* Contact Number */}
                    <div className="flex gap-2.5 items-start mt-1">
                      <Phone className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase tracking-wider block font-semibold">
                          {t('branchPhoneLabel')}
                        </span>
                        <a
                          href={`tel:${t(branch.phoneKey)}`}
                          className="text-zinc-300 text-[11px] font-mono hover:text-gold transition-colors"
                        >
                          {t(branch.phoneKey)}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-3 h-[1px] bg-zinc-800 group-hover:bg-gold/50 transition-colors" />
              <div className="absolute top-0 left-0 w-[1px] h-3 bg-zinc-800 group-hover:bg-gold/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-zinc-800 group-hover:bg-gold/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-zinc-800 group-hover:bg-gold/50 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
