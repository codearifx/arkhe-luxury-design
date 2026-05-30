import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Info } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'villa',
    areaSize: '5000',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Recover saved draft from sessionStorage on load
  useEffect(() => {
    const savedDraft = sessionStorage.getItem('arkhe_contact_draft');
    if (savedDraft) {
      try {
        setFormData(JSON.parse(savedDraft));
      } catch (e) {
        // ignore parsing errors
      }
    }
  }, []);

  // Save draft locally on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    sessionStorage.setItem('arkhe_contact_draft', JSON.stringify(updated));

    // Clear specific error if user is fixing it
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please provide a detailed description of your vision.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      sessionStorage.removeItem('arkhe_contact_draft');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'villa',
        areaSize: '5000',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-white text-zinc-900 font-sans pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 block animate-fade-up">
            Get in Touch
          </span>
          <h1 className="text-zinc-950 font-serif italic text-4xl sm:text-6xl tracking-wide mb-6 animate-fade-up">
            Begin Your Masterpiece
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light animate-fade-up delay-100">
            Share your structural aspirations with our engineers and principal architects. Every consultation is an opportunity to structure timeless elegance.
          </p>
        </div>
      </section>

      {/* Main split contact layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left side: Premium form */}
            <div className="lg:col-span-7">
              {submitSuccess ? (
                <div className="border-2 border-gold bg-zinc-50 p-10 text-center animate-fade-up">
                  <CheckCircle className="w-12 h-12 text-gold mx-auto mb-6" />
                  <h3 className="text-zinc-950 font-serif italic text-3xl mb-4">
                    Proposal Submitted Successfully
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">
                    Your luxury structural inquiry has been received. Our chief architectural auditor, Arthur Vance, will review your dimensions and coordinate with our structural engineers. Expect a private call within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-8 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-widest uppercase transition-luxury"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sterling Henderson"
                      className={`w-full border p-3.5 text-xs tracking-wide focus:outline-none transition-colors rounded-none ${
                        formErrors.name ? 'border-red-500' : 'border-zinc-200 focus:border-gold'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@luxuryestate.com"
                        className={`w-full border p-3.5 text-xs tracking-wide focus:outline-none transition-colors rounded-none ${
                          formErrors.email ? 'border-red-500' : 'border-zinc-200 focus:border-gold'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider">
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 990-2754"
                        className="w-full border border-zinc-200 p-3.5 text-xs tracking-wide focus:outline-none focus:border-gold transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  {/* Project type & Size grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="projectType" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full border border-zinc-200 p-3.5 text-xs tracking-wide uppercase font-semibold focus:outline-none focus:border-gold transition-colors rounded-none"
                      >
                        <option value="villa">Bespoke Architectural Villa</option>
                        <option value="residential">Luxury Residential Home</option>
                        <option value="commercial">Commercial Landmark</option>
                        <option value="renovation">Luxury Renovation</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="areaSize" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                        Estimated Area Size (sq. ft.)
                      </label>
                      <input
                        type="number"
                        id="areaSize"
                        name="areaSize"
                        value={formData.areaSize}
                        onChange={handleChange}
                        placeholder="e.g. 5000"
                        className="w-full border border-zinc-200 p-3.5 text-xs tracking-wide focus:outline-none focus:border-gold transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                      Your Architectural Vision *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your structural layout ideas, landscape requirements, timeline boundaries, and materials preferences..."
                      className={`w-full border p-3.5 text-xs tracking-wide focus:outline-none transition-colors rounded-none ${
                        formErrors.message ? 'border-red-500' : 'border-zinc-200 focus:border-gold'
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider">
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-light">
                      <Info className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>* Mandatory fields before proposal audit.</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-widest uppercase transition-luxury inline-flex items-center justify-center gap-2 rounded-none disabled:bg-zinc-700"
                    >
                      {isSubmitting ? (
                        'Auditing Proposal...'
                      ) : (
                        <>
                          Request Audit <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right side: Studio details & designed Map vector */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              {/* Studio Info Panel */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-zinc-950 uppercase mb-8">
                  Studio Headquarters
                </h3>

                <ul className="flex flex-col gap-6 list-none p-0 m-0 text-sm font-light text-zinc-600">
                  <li className="flex gap-4 items-start">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-widest block mb-1">
                        Physical Location
                      </span>
                      <span className="text-zinc-800 font-medium">1200 Luxury Villa Road</span>
                      <span className="block text-zinc-500">Beverly Hills, CA 90210</span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-widest block mb-1">
                        Inquiries & Booking
                      </span>
                      <span className="text-zinc-800 font-medium">+1 (888) 998-ARKH</span>
                      <span className="block text-zinc-500">studio@arkhe-luxury.com</span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-widest block mb-1">
                        Operating Hours
                      </span>
                      <span className="text-zinc-800 font-medium">Monday - Friday: 09:00 - 18:00</span>
                      <span className="block text-zinc-500">Saturday: 10:00 - 15:00 (Private Screenings)</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* DESIGNED MAP VECTOR VISUAL BLOCK */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-zinc-950 uppercase mb-6">
                  Studio Coordinates
                </h3>

                {/* Highly premium dark Vector map representation */}
                <div className="bg-zinc-950 border border-zinc-900 p-8 h-[240px] flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative background grid and coordinates lines */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <div className="w-full h-full border-t border-b border-l border-r border-dashed border-zinc-700 grid grid-cols-4 grid-rows-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="border border-zinc-800/30" />
                      ))}
                    </div>
                  </div>

                  {/* Dynamic layout detailing custom vector elements */}
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <span className="text-gold text-[9px] uppercase tracking-widest font-semibold block">
                        Beverly Hills HQ
                      </span>
                      <span className="text-white text-[10px] font-mono block mt-1">
                        GPS: 34.0736° N, 118.4004° W
                      </span>
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-gold animate-ping shrink-0" />
                  </div>

                  <div className="relative z-10 flex flex-col gap-1 items-start text-left">
                    <span className="text-zinc-500 text-[8px] uppercase tracking-widest font-mono">
                      Visual Map Grid
                    </span>
                    <span className="text-zinc-300 text-xs leading-normal font-light max-w-xs">
                      Our private blueprint screening studio is situated off Sunset Boulevard. Contact us for private parking coordinates.
                    </span>
                  </div>

                  {/* Overlay shadow */}
                  <div className="absolute bottom-4 right-4 text-white/5 font-bold font-serif text-8xl select-none leading-none pointer-events-none">
                    ARKHE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
