import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navPackages: "Packages",
    navProjects: "Projects",
    navContact: "Contact",
    navSignIn: "Sign In",
    
    // Dropdown options
    navService1: "Trusted Construction Service",
    navService2: "Modern Design Solutions",
    navService3: "High Quality Materials",
    navPackage1: "Premium Architecture Package",
    navPackage2: "Custom Project Solutions",

    // Hero Section
    heroSubtitle: "Craftsmanship • Innovation • Geometry",
    heroTitleLine1: "Building Definitions of",
    heroTitleLine2: "Modern Luxury",
    heroDesc: "ARKHE. designs and constructs breathtaking luxury villas, residences, and commercial milestones. We translate bold minimalist philosophy into concrete, glass, and zinc reality.",
    heroBtnPackages: "View Our Packages",
    heroBtnContact: "Contact Us",
    heroScroll: "Scroll To Explore",

    // Stats Floating Cards
    statExpVal: "25+",
    statExpLabel: "Years Experience",
    statProjectsVal: "250+",
    statProjectsLabel: "Projects Delivered",
    statClientsVal: "500+",
    statClientsLabel: "Happy Clients",
    statActiveVal: "12+",
    statActiveLabel: "Ongoing Projects",

    // Introduction Preview
    introSubtitle: "Vision & Craftsmanship",
    introTitle: "Timeless Structures built with Absolute Precision.",
    introDesc1: "At ARKHE., we define contemporary spaces through clean horizontal geometries, passive ventilation systems, and premium materiality. We collaborate with forward-thinking visionaries to construct architecture that dissolves boundaries.",
    introDesc2: "Our building process is highly audited, utilizing luxury materials like micro-cement, zinc panels, thermal triple-glazed windows, and sustainable cedar cladding. We integrate architectural layouts with high-end interior solutions for a complete luxury handover.",
    introLearnMore: "Learn More About Us",
    introBespokePercent: "100%",
    introBespokeLabel: "Bespoke Design Customization",

    // Feature Cards
    featMaterialsTitle: "Premium Materials",
    featMaterialsDesc: "We select and build using premium marble, custom zinc panels, and low-carbon architectural concrete.",
    featEngineersTitle: "Expert Engineers",
    featEngineersDesc: "Our in-house architects and civil engineers maintain extreme oversight across every phase of structural work.",
    featSustainableTitle: "Sustainable Build",
    featSustainableDesc: "Integrating energy-efficient design, solar cells, and highly thermal passive cooling systems.",
    featDeliveryTitle: "Timely Delivery",
    featDeliveryDesc: "Strict timeline tracking guarantees flawless execution and handovers within the specified budget.",

    // Branch Locations Section
    branchSubtitle: "Regional Presence",
    branchTitle: "Our Branch Locations",
    branchDesc: "Explore our state-of-the-art regional design studios and structural engineering headquarters.",
    branchAddressLabel: "Office Address",
    branchPhoneLabel: "Inquiries",
    branchAddressText: "Address",
    branchPhoneText: "Phone",
    
    // Branches Content
    branchChennaiName: "Chennai Studio",
    branchChennaiDesc: "Our flagship coastal design workspace, specializing in high-rise glass structures and cantilever designs.",
    branchChennaiAddr: "45 Marine Drive, Chennai, TN 600001",
    branchChennaiPhone: "+91 44 4920 1200",

    branchBengaluruName: "Bengaluru Pavilion",
    branchBengaluruDesc: "High-tech workspace focusing on wooden facades, ecological integrations, and smart-home automation systems.",
    branchBengaluruAddr: "82 Tech Park Blvd, Bengaluru, KA 560001",
    branchBengaluruPhone: "+91 80 4390 2700",

    branchMaduraiName: "Madurai Atelier",
    branchMaduraiDesc: "Elegant stone masonry and custom basalt architecture, bridging traditional heritage with minimalist styles.",
    branchMaduraiAddr: "10 Temple View St, Madurai, TN 625001",
    branchMaduraiPhone: "+91 452 4890 3100",

    branchPondicherryName: "Pondicherry Pavilion",
    branchPondicherryDesc: "Coastal minimalist pavilion integrating French-colonial open-courtyard arches with structural steel framing.",
    branchPondicherryAddr: "3 Promenade Way, Pondicherry 605001",
    branchPondicherryPhone: "+91 413 4900 4500",

    branchTirunelveliName: "Tirunelveli Eco-Studio",
    branchTirunelveliDesc: "Monolithic structures engineered with sustainable timber roof gardens and high-efficiency geothermal cooling.",
    branchTirunelveliAddr: "18 River Breeze Road, Tirunelveli, TN 627001",
    branchTirunelveliPhone: "+91 462 4920 8800",

    // Footer
    footerSlogan: "Luxury Construction",
    footerPitch: "Creating architectural milestones characterized by geometric purity and structural integrity.",
    footerOffice: "Studio Headquarters",
    footerQuickLinks: "Quick Navigation",
    footerLegal: "Privacy & Terms",
    footerRights: "© 2026 ARKHE. All rights reserved. Designed to endure."
  },
  ta: {
    // Navbar
    navHome: "முகப்பு",
    navAbout: "எங்களைப் பற்றி",
    navServices: "சேவைகள்",
    navPackages: "தொகுப்புகள்",
    navProjects: "திட்டங்கள்",
    navContact: "தொடர்பு",
    navSignIn: "உள்நுழைக",
    
    // Dropdown options
    navService1: "நம்பகமான கட்டுமான சேவை",
    navService2: "நவீன வடிவமைப்பு தீர்வுகள்",
    navService3: "உயர்தர பொருட்கள்",
    navPackage1: "பிரீமியம் கட்டிடக்கலை தொகுப்பு",
    navPackage2: "தனிப்பயன் திட்ட தீர்வுகள்",

    // Hero Section
    heroSubtitle: "கைவினைத்திறன் • புதுமை • வடிவியல்",
    heroTitleLine1: "கட்டிடக்கலையின் புதிய வரைவிலக்கணம்",
    heroTitleLine2: "நவீன சொகுசு",
    heroDesc: "ARKHE. அதிநவீன சொகுசு வில்லாக்கள், இல்லங்கள் மற்றும் வணிகக் குறியீடுகளை வடிவமைத்துக் கட்டுகிறது. நாம் எளிய வடிவியல் தத்துவங்களை கான்கிரீட், கண்ணாடி மற்றும் துத்தநாக வடிவில் நிஜமாக்குகிறோம்.",
    heroBtnPackages: "எங்கள் தொகுப்புகள்",
    heroBtnContact: "தொடர்பு கொள்ள",
    heroScroll: "ஆராய கீழே உருட்டவும்",

    // Stats Floating Cards
    statExpVal: "25+",
    statExpLabel: "ஆண்டுகள் அனுபவம்",
    statProjectsVal: "250+",
    statProjectsLabel: "நிறைவேற்றப்பட்ட திட்டங்கள்",
    statClientsVal: "500+",
    statClientsLabel: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    statActiveVal: "12+",
    statActiveLabel: "செயலில் உள்ள திட்டங்கள்",

    // Introduction Preview
    introSubtitle: "தொலைநோக்கு & கைவினைத்திறன்",
    introTitle: "முழுமையான துல்லியத்துடன் கட்டப்பட்ட காலமற்ற கட்டமைப்புகள்.",
    introDesc1: "ARKHE.-ல், தூய்மையான வடிவியல் கோடுகள், இயற்கையான காற்றோட்ட அமைப்புகள் மற்றும் பிரீமியம் பொருட்களின் மூலம் தற்கால இடங்களை நாங்கள் வரையறுக்கிறோம். எல்லைகளைக் கடக்கும் கட்டிடக்கலையை உருவாக்க புதுமையான சிந்தனையாளர்களுடன் நாங்கள் இணைகிறோம்.",
    introDesc2: "எங்கள் கட்டுமான செயல்முறை மிகவும் தணிக்கை செய்யப்படுகிறது, மைக்ரோ-சிமெண்ட், துத்தநாக பேனல்கள், இரட்டை வெப்ப காப்பு கண்ணாடி ஜன்னல்கள் மற்றும் நிலையான சிடார் மரங்களை நாங்கள் பயன்படுத்துகிறோம். முழுமையான சொகுசு ஒப்படைப்பிற்காக உள்வடிவமைப்பு தீர்வுகளுடன் கட்டிடக் கலை அமைப்புகளை ஒருங்கிணைக்கிறோம்.",
    introLearnMore: "எங்களைப் பற்றி மேலும் அறிய",
    introBespokePercent: "100%",
    introBespokeLabel: "முழுமையான தனிப்பயன் வடிவமைப்பு",

    // Feature Cards
    featMaterialsTitle: "பிரீமியம் பொருட்கள்",
    featMaterialsDesc: "உயர்தர பளிங்கு, தனிப்பயன் துத்தநாக பேனல்கள் மற்றும் குறைந்த கார்பன் கான்கிரீட் ஆகியவற்றைத் தேர்ந்தெடுத்து நாங்கள் உருவாக்குகிறோம்.",
    featEngineersTitle: "நிபுணத்துவ பொறியாளர்கள்",
    featEngineersDesc: "எங்கள் கட்டிடக் கலைஞர்கள் மற்றும் சிவில் பொறியாளர்கள் ஒவ்வொரு கட்டத்திலும் தீவிர மேற்பார்வையைப் பராமரிக்கின்றனர்.",
    featSustainableTitle: "நிலையான கட்டுமானம்",
    featSustainableDesc: "ஆற்றல் திறன் கொண்ட வடிவமைப்பு, சூரிய மின்கலங்கள் மற்றும் இயற்கையான குளிரூட்டும் அமைப்புகளை ஒருங்கிணைத்தல்.",
    featDeliveryTitle: "சரியான நேர விநியோகம்",
    featDeliveryDesc: "துல்லியமான கால அட்டவணை கண்காணிப்பு, குறிப்பிட்ட பட்ஜெட்டிற்குள் குறைபாடற்ற ஒப்படைப்பை உறுதி செய்கிறது.",

    // Branch Locations Section
    branchSubtitle: "பிராந்திய இருப்பு",
    branchTitle: "எங்கள் கிளை அலுவலகங்கள்",
    branchDesc: "எங்களது அதிநவீன பிராந்திய வடிவமைப்பு ஸ்டுடியோக்கள் மற்றும் கட்டமைப்பு பொறியியல் தலைமையகங்களை ஆராயுங்கள்.",
    branchAddressLabel: "அலுவலக முகவரி",
    branchPhoneLabel: "விசாரணைகள்",
    branchAddressText: "முகவரி",
    branchPhoneText: "தொலைபேசி",
    
    // Branches Content
    branchChennaiName: "சென்னை ஸ்டுடியோ",
    branchChennaiDesc: "எங்கள் முதன்மை கடற்கரை வடிவமைப்பு தளம், உயரமான கண்ணாடி கட்டமைப்புகள் மற்றும் தொங்கு கூரை வடிவமைப்புகளில் நிபுணத்துவம் பெற்றது.",
    branchChennaiAddr: "45 மரைன் டிரைவ், சென்னை, தமிழ்நாடு 600001",
    branchChennaiPhone: "+91 44 4920 1200",

    branchBengaluruName: "பெங்களூரு பெவிலியன்",
    branchBengaluruDesc: "மர முகப்புகள், சுற்றுச்சூழல் ஒருங்கிணைப்புகள் மற்றும் ஸ்மார்ட்-ஹோம் ஆட்டோமேஷன் அமைப்புகளில் கவனம் செலுத்தும் அதிநவீன பணியிடம்.",
    branchBengaluruAddr: "82 டெக் பார்க் பிளவ்ட், பெங்களூரு, கர்நாடகா 560001",
    branchBengaluruPhone: "+91 80 4390 2700",

    branchMaduraiName: "மதுரை அட்லியர்",
    branchMaduraiDesc: "பாரம்பரிய கட்டிடக்கலையை நவீன குறைந்தபட்ச பாணிகளுடன் இணைக்கும் நேர்த்தியான கல் கட்டுமானம் மற்றும் தனிப்பயன் பசால்ட் கட்டமைப்பு.",
    branchMaduraiAddr: "10 டெம்பிள் வியூ தெரு, மதுரை, தமிழ்நாடு 625001",
    branchMaduraiPhone: "+91 452 4890 3100",

    branchPondicherryName: "புதுச்சேரி பெவிலியன்",
    branchPondicherryDesc: "பிரெஞ்சு-காலனித்துவ திறந்த-முற்ற வளைவுகளை நவீன எஃகு கட்டமைப்புடன் இணைக்கும் கடற்கரை எளிய பெவிலியன்.",
    branchPondicherryAddr: "3 புரோமனேட் வே, புதுச்சேரி 605001",
    branchPondicherryPhone: "+91 413 4900 4500",

    branchTirunelveliName: "திருநெல்வேலி ஈகோ-ஸ்டுடியோ",
    branchTirunelveliDesc: "நிலையான மர கூரை தோட்டங்கள் மற்றும் அதிக திறன் கொண்ட புவிவெப்ப குளிரூட்டலுடன் வடிவமைக்கப்பட்ட ஒற்றைக்கல் கட்டமைப்பு.",
    branchTirunelveliAddr: "18 ரிவர் பிரீஸ் ரோடு, திருநெல்வேலி, தமிழ்நாடு 627001",
    branchTirunelveliPhone: "+91 462 4920 8800",

    // Footer
    footerSlogan: "சொகுசு கட்டுமானம்",
    footerPitch: "வடிவியல் தூய்மை மற்றும் கட்டமைப்பு ஒருமைப்பாட்டால் வகைப்படுத்தப்படும் கட்டிடக்கலை மைல்கற்களை உருவாக்குதல்.",
    footerOffice: "தலைமையகம்",
    footerQuickLinks: "விரைவான வழிசெலுத்தல்",
    footerLegal: "தனியுரிமை & விதிமுறைகள்",
    footerRights: "© 2026 ARKHE. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. நிலைத்து நிற்க வடிவமைக்கப்பட்டது."
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  // Load language preference from local storage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('arkhe_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ta')) {
      setLanguage(savedLang);
    }
  }, []);

  const switchLanguage = (lang) => {
    if (lang === 'en' || lang === 'ta') {
      setLanguage(lang);
      localStorage.setItem('arkhe_lang', lang);
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
