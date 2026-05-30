import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Info, FileText, ArrowRight, Calculator } from 'lucide-react';

export default function Packages() {
  const { hash } = useLocation();

  // Scroll to calculator or package hashes if specified
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

  // Calculator State
  const [projectType, setProjectType] = useState('villa');
  const [sqFt, setSqFt] = useState(4500);
  const [finishLevel, setFinishLevel] = useState('premium');
  const [estimatedCost, setEstimatedCost] = useState({ min: 0, max: 0 });

  // Calculate luxury estimate dynamically
  useEffect(() => {
    let baseRate = 250; // default residential standard base cost per sqft
    if (projectType === 'villa') baseRate = 350;
    if (projectType === 'commercial') baseRate = 450;

    let multiplier = 1.0;
    if (finishLevel === 'premium') multiplier = 1.25;
    if (finishLevel === 'ultra') multiplier = 1.6;

    const rate = baseRate * multiplier;
    const minCost = Math.round(sqFt * rate);
    const maxCost = Math.round(sqFt * rate * 1.15);

    setEstimatedCost({ min: minCost, max: maxCost });
  }, [projectType, sqFt, finishLevel]);

  const archInclusions = [
    'Bespoke architectural layout blueprinting',
    '3D high-fidelity exterior rendering (4 angles)',
    'Detailed structural civil calculations & steel detailing',
    'Acoustic and thermal vector engineering audits',
    'FSC-sustainable materials schedule recommendation',
    '3 structural revision cycles in 30 days',
    'LEED Green building design integration plans',
  ];

  const turnkeyInclusions = [
    'Complete civil and structural execution (foundation to roofing)',
    'Principal architect oversight and weekly audit logs',
    'Procurement of raw custom materials (marble, zinc, cedar)',
    'Turnkey interior architecture, electrical, & lighting setups',
    'Integrated smart-home installations (DALI LEDs & KNX automation)',
    'Zoning, regulatory, and local occupancy certifications',
    'Comprehensive structural lifetime guarantee',
    'Site post-construction structural integrity audits',
  ];

  return (
    <div className="bg-white text-zinc-900 font-sans pt-24">
      {/* Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block animate-fade-up">
            Pricing Models
          </span>
          <h1 className="text-zinc-950 font-serif italic text-4xl sm:text-6xl tracking-wide mb-6 animate-fade-up">
            Bespoke Solutions
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light animate-fade-up delay-100">
            We structure our custom engagements transparently. Review our architectural design package or contract for end-to-end luxury building.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Package 1: Architecture Only */}
            <div id="architecture" className="border border-zinc-100 p-8 sm:p-12 flex flex-col justify-between hover:border-zinc-200 transition-all duration-300 scroll-mt-24">
              <div>
                <span className="text-gold text-[10px] font-semibold tracking-widest uppercase mb-2 block">
                  Design Only
                </span>
                <h2 className="text-zinc-950 font-serif italic text-3xl mb-4">
                  Premium Architecture Package
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light mb-8">
                  Ideal for clients who seek conceptual designs, 3D renderings, and detailed blueprints to submit for local municipal licensing and construct with independent builders.
                </p>

                <div className="border-t border-zinc-100 pt-8 mb-8">
                  <h3 className="text-xs font-semibold tracking-widest text-zinc-950 uppercase mb-6">
                    Inclusions
                  </h3>
                  <ul className="flex flex-col gap-4 list-none p-0 m-0">
                    {archInclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-zinc-600 text-xs leading-relaxed font-light">
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block">
                    Starting Budget
                  </span>
                  <span className="text-zinc-950 font-serif italic text-2xl font-bold">
                    Enquire for Details
                  </span>
                </div>
                <a
                  href="/contact?type=architecture"
                  className="w-full sm:w-auto px-8 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-widest uppercase text-center transition-luxury"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Package 2: Complete Execution */}
            <div id="custom" className="border-2 border-gold p-8 sm:p-12 flex flex-col justify-between bg-zinc-50 relative overflow-hidden scroll-mt-24">
              {/* Popular Badge */}
              <div className="absolute top-6 right-6 bg-gold text-zinc-950 text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                RECOMMENDED
              </div>

              <div>
                <span className="text-gold text-[10px] font-semibold tracking-widest uppercase mb-2 block">
                  Design & Build (Turnkey)
                </span>
                <h2 className="text-zinc-950 font-serif italic text-3xl mb-4">
                  Custom Project Solutions
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light mb-8">
                  ARKHE. handles every single detailing. From breaking soil to final automated lighting configurations, we provide full structural architectural engineering and spatial curation with a lifetime guarantee.
                </p>

                <div className="border-t border-zinc-200 pt-8 mb-8">
                  <h3 className="text-xs font-semibold tracking-widest text-zinc-950 uppercase mb-6">
                    Inclusions
                  </h3>
                  <ul className="flex flex-col gap-4 list-none p-0 m-0">
                    {turnkeyInclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-zinc-600 text-xs leading-relaxed font-light">
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block">
                    Turnkey Budget
                  </span>
                  <span className="text-zinc-950 font-serif italic text-2xl font-bold">
                    Full Phase Quote
                  </span>
                </div>
                <a
                  href="/contact?type=turnkey"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-hover text-zinc-950 font-semibold text-xs tracking-widest uppercase text-center transition-luxury"
                >
                  Request Turnkey Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LUXURY ESTIMATE CALCULATOR */}
      <section id="calculator" className="py-24 bg-zinc-50 border-t border-zinc-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <Calculator className="w-8 h-8 text-gold mx-auto mb-4" />
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-2 block">
              Dynamic Estimator
            </span>
            <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-4xl tracking-wide">
              Luxury Project Budget Estimator
            </h2>
            <p className="text-zinc-500 max-w-sm mx-auto text-xs leading-relaxed mt-3 font-light">
              Tailor your architectural dimensions, finishes, and project scope to receive structured forecast guidance.
            </p>
          </div>

          <div className="bg-white border border-zinc-100 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Left Side Inputs */}
              <div className="flex flex-col gap-6">
                {/* 1. Project Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full border border-zinc-200 p-3 text-xs tracking-wider uppercase font-semibold focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="residential">Luxury Residential Residence</option>
                    <option value="villa">Bespoke Architectural Villa</option>
                    <option value="commercial">Commercial Landmark Building</option>
                  </select>
                </div>

                {/* 2. Square Footage Slider */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                      Total Area (sq. ft.)
                    </label>
                    <span className="text-xs font-bold text-zinc-900">{sqFt.toLocaleString()} sqft</span>
                  </div>
                  <input
                    type="range"
                    min="1500"
                    max="20000"
                    step="500"
                    value={sqFt}
                    onChange={(e) => setSqFt(Number(e.target.value))}
                    className="w-full accent-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>1,500 sqft</span>
                    <span>20,000 sqft</span>
                  </div>
                </div>

                {/* 3. Level of Finishes */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                    Material Finish Curation
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setFinishLevel('standard')}
                      className={`py-3 text-[10px] font-semibold tracking-wider uppercase border transition-all duration-300 ${
                        finishLevel === 'standard'
                          ? 'border-gold bg-gold text-zinc-950'
                          : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      Bespoke Basic
                    </button>
                    <button
                      onClick={() => setFinishLevel('premium')}
                      className={`py-3 text-[10px] font-semibold tracking-wider uppercase border transition-all duration-300 ${
                        finishLevel === 'premium'
                          ? 'border-gold bg-gold text-zinc-950'
                          : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      Luxury Standard
                    </button>
                    <button
                      onClick={() => setFinishLevel('ultra')}
                      className={`py-3 text-[10px] font-semibold tracking-wider uppercase border transition-all duration-300 ${
                        finishLevel === 'ultra'
                          ? 'border-gold bg-gold text-zinc-950'
                          : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      Ultra Custom
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side Outputs */}
              <div className="bg-zinc-50 p-8 border border-zinc-100 flex flex-col justify-between items-center text-center">
                <div className="w-full">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block mb-4">
                    Structured Estimate
                  </span>
                  <div className="text-zinc-950 font-serif italic text-3xl sm:text-4xl font-bold mb-2">
                    ${estimatedCost.min.toLocaleString()} - ${estimatedCost.max.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">
                    Calculated at ${(estimatedCost.min / sqFt).toFixed(0)} - ${(estimatedCost.max / sqFt).toFixed(0)} / sq. foot
                  </span>
                </div>

                <div className="w-full mt-8 border-t border-zinc-200 pt-6">
                  <div className="flex gap-2 items-center justify-center text-zinc-500 text-[10px] mb-6 font-light">
                    <Info className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Includes design + raw elements + turnkey handovers.</span>
                  </div>
                  <a
                    href={`/contact?type=${projectType}&size=${sqFt}&finish=${finishLevel}`}
                    className="w-full block text-center px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-widest uppercase transition-luxury"
                  >
                    Discuss This Estimate
                  </a>
                </div>
              </div>
            </div>

            {/* Downloader block */}
            <div className="border-t border-zinc-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-luxury-beige/50 p-6 -mx-8 -mb-8 sm:-mx-12 sm:-mb-12">
              <div className="flex items-center gap-4 text-left">
                <FileText className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">
                    Download Detailed Budget Specifications PDF
                  </h4>
                  <p className="text-[10px] text-zinc-400 leading-normal font-light">
                    Receive line-by-line pricing breakdowns, concrete thickness reports, and structural schedules.
                  </p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 border border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white font-semibold text-xs tracking-widest uppercase transition-luxury inline-flex items-center gap-2 justify-center">
                Download PDF <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Common Inquiries
          </span>
          <h2 className="text-zinc-950 font-serif italic text-3xl sm:text-4xl tracking-wide mb-16">
            Frequently Asked Pricing Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-xs font-semibold text-zinc-950 uppercase tracking-widest mb-3">
                Does the estimation include interior setup?
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                Yes, our turnkey estimation models incorporate spatial interior layout design, premium micro-cement custom finishes, electrical layouts, and custom oak millwork.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-zinc-950 uppercase tracking-widest mb-3">
                Can I separate the design and civil contracting phases?
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                Absolutely. You can opt for the Premium Architecture Package, receiving full structural blueprints and conceptual renders, and decide on contracting builders later.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-zinc-950 uppercase tracking-widest mb-3">
                What guarantees do you offer on foundations?
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                Our civil engineering delivers standard double-reinforced monolithic base structures backed by a robust structural lifetime guarantee.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-zinc-950 uppercase tracking-widest mb-3">
                How is changes and scheduling handled?
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                Every client is registered in our staging portal. In architectural stages, we provide 3 revision cycles. In building stages, we follow strict timelines with clear completion checks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
