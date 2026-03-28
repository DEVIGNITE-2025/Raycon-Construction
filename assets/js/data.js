/* ============================================================
   RAYCON DEVVELOPMENTS  -  Site Data
   Edit services and projects here.
   ============================================================ */

/**
 * SERVICE DATA
 * Each service has: id, title, shortDesc, longDesc, icon (inline SVG id)
 */
const SERVICES = [
  {
    id: 'upmarket-homes',
    title: 'Upmarket Homes',
    shortDesc: 'Bespoke luxury residences crafted to reflect your lifestyle, built to the highest standards in Johannesburg\'s most sought-after suburbs.',
    longDesc: 'From contemporary architectural statements to timeless classical designs, our upmarket homes are the result of decades of refined craftsmanship. Every detail  -  from foundation to finishes  -  is executed with meticulous care. We collaborate closely with leading architects and interior designers to bring your vision to life in suburbs like Dainfern, Bryanston, and Waterfall Estate.',
    icon: 'home-luxury'
  },
  {
    id: 'affordable-homes',
    title: 'Affordable Homes',
    shortDesc: 'Quality-built homes designed to be accessible without compromising on structural integrity, comfort, or style.',
    longDesc: 'We believe everyone deserves a well-built home. Our affordable housing solutions deliver excellent value through smart design and efficient construction methods. Each home meets the same rigorous quality standards that define all Raycon projects, ensuring lasting value for homeowners and developers alike.',
    icon: 'home-heart'
  },
  {
    id: 'alterations-additions',
    title: 'Alterations & Additions',
    shortDesc: 'Transform your existing property with expertly planned renovations, extensions, and modernisation projects.',
    longDesc: 'Whether you need an additional bedroom, a reimagined kitchen, or a complete ground-floor extension, our team manages every detail from structural assessment right through to finishing touches. We work sensitively within existing structures, minimising disruption while maximising the potential of your property.',
    icon: 'tools'
  },
  {
    id: 'plans-drawings',
    title: 'Plans, Drawings & Submissions',
    shortDesc: 'Professional architectural plans, council submissions, and all regulatory documentation handled end-to-end.',
    longDesc: 'Navigating municipal approvals and building regulations can be complex. We are here to advise and assist with all aspects of your build, from planning to occupation certificate.',
    icon: 'blueprint'
  },
  {
    id: 'secure-estates',
    title: 'Secure Estate Developments',
    shortDesc: 'Complete residential estate development, from site planning to final handover, in secure gated communities.',
    longDesc: 'Since completing our first secure development in Beverley  -  a 22-home estate called Thornbush Estates in 2007  -  we have continued to deliver exceptional estate developments. We handle every aspect including site infrastructure, individual home construction, landscaping, and common area development, all within secure, controlled environments.',
    icon: 'shield'
  },
  {
    id: 'turnkey-projects',
    title: 'Turn Key Projects',
    shortDesc: 'A complete service from the drawing of your dream plan to occupation certificate  -  we manage every step.',
    longDesc: 'Our turnkey service is the ultimate hands-free building experience. We manage the entire lifecycle of your project: from initial concept and architectural drawings, through council approvals, construction, and finishing, right up to your occupation certificate. You receive a ready-to-move-in home with a single point of contact throughout.',
    icon: 'key'
  }
];

/**
 * PROJECT DATA
 * Each project has: id, title, category, location, year, overview, scope,
 * highlights (array), images (number of gallery placeholders)
 *
 * Categories: New Build | Renovation | Estate Development | Plans & Submissions
 */
const PROJECTS = [
  {
    id: 'dainfern-contemporary',
    title: 'Contemporary Residence  -  Dainfern',
    category: 'New Build',
    location: 'Dainfern, Johannesburg',
    year: '2023',
    overview: 'A striking four-bedroom contemporary home designed to maximise natural light and indoor-outdoor living. Set on a 1 200 m2 stand within the prestigious Dainfern Golf Estate, this residence combines clean architectural lines with warm natural materials.',
    scope: 'Full turnkey construction including architectural plans, council approvals, construction, landscaping, and pool installation.',
    highlights: [
      'Open-plan living with 3.2 m ceilings',
      'Floor-to-ceiling glazing facing north',
      'Designer kitchen with imported stone countertops',
      'Underfloor heating throughout',
      'Covered entertainment patio with built-in braai',
      'Solar-ready electrical installation'
    ],
    images: 4
  },
  {
    id: 'bryanston-classic',
    title: 'Classic Family Home  -  Bryanston',
    category: 'New Build',
    location: 'Bryanston, Johannesburg',
    year: '2022',
    overview: 'An elegant five-bedroom family home on a generous 2 000 m2 property. The design draws on classical proportions with a modern sensibility, featuring a double-height entrance foyer and formal reception rooms alongside relaxed family spaces.',
    scope: 'Complete new build from foundation to finishes, including landscaped gardens and a three-car garage.',
    highlights: [
      'Double-height entrance with feature chandelier',
      'Separate guest suite with private entrance',
      'Home office and dedicated study',
      'Heated swimming pool with automatic cover',
      'Landscaped indigenous garden',
      'Full home automation system'
    ],
    images: 4
  },
  {
    id: 'fourways-gardens-renovation',
    title: 'Modern Renovation  -  Fourways Gardens',
    category: 'Renovation',
    location: 'Fourways Gardens, Johannesburg',
    year: '2023',
    overview: 'A comprehensive renovation that transformed a dated 1990s property into a modern family home. The project involved reconfiguring the ground-floor layout, adding a new entertainment wing, and completely refreshing all finishes.',
    scope: 'Full renovation including structural alterations, new roof sections, complete re-plumbing, and electrical upgrade.',
    highlights: [
      'Open-plan kitchen and family room conversion',
      'New entertainment wing with cinema room',
      'Complete bathroom overhaul (4 bathrooms)',
      'New aluminium window and door system',
      'Energy-efficient LED lighting throughout',
      'New boundary walls and electric fencing'
    ],
    images: 4
  },
  {
    id: 'waterfall-estate-luxury',
    title: 'Luxury Villa  -  Waterfall Estate',
    category: 'New Build',
    location: 'Waterfall Estate, Johannesburg',
    year: '2024',
    overview: 'A premium six-bedroom villa in one of Johannesburg\'s most exclusive estates. The design responds to the generous stand with expansive living areas that open onto manicured gardens and a resort-style pool area.',
    scope: 'Turnkey project from architectural concept through to occupation certificate, including all landscaping and pool construction.',
    highlights: [
      'Six bedrooms, all en-suite',
      'Chef\'s kitchen with scullery and pantry',
      'Wine cellar and tasting room',
      'Resort-style pool with sun deck',
      'Staff quarters with separate entrance',
      'Triple garage with epoxy flooring'
    ],
    images: 5
  },
  {
    id: 'thornbush-estates',
    title: 'Thornbush Estates  -  Beverley',
    category: 'Estate Development',
    location: 'Beverley, Johannesburg',
    year: '2007',
    overview: 'Raycon\'s landmark estate development  -  a secure community of 22 quality homes in the Beverley area. This project marked our entry into estate development and demonstrated our capacity to deliver multi-unit residential projects at consistently high standards.',
    scope: 'Complete estate development including infrastructure, 22 individual homes, communal facilities, perimeter security, and landscaping.',
    highlights: [
      '22 individually designed family homes',
      'Secure perimeter with controlled access',
      'Underground services and infrastructure',
      'Communal garden areas and walkways',
      'Completed on schedule and within budget',
      'All units sold before completion'
    ],
    images: 4
  },
  {
    id: 'broadacres-addition',
    title: 'Ground-Floor Extension  -  Broadacres',
    category: 'Renovation',
    location: 'Broadacres, Johannesburg',
    year: '2022',
    overview: 'A substantial ground-floor addition to an existing single-storey home, adding 160 m2 of living space including a new master suite, expanded kitchen, and a covered outdoor entertainment area.',
    scope: 'Structural design, council approvals, demolition of existing walls, new construction, and all finishing.',
    highlights: [
      'Seamless integration with existing structure',
      'New master suite with walk-in wardrobe',
      'Extended kitchen with breakfast nook',
      'Covered patio with stacking glass doors',
      'Upgraded plumbing and electrical systems',
      'Completed in 14 weeks'
    ],
    images: 3
  },
  {
    id: 'dainfern-valley-plan',
    title: 'Architectural Plans  -  Dainfern Valley',
    category: 'Plans & Submissions',
    location: 'Dainfern Valley, Johannesburg',
    year: '2024',
    overview: 'A full set of architectural plans and council submissions for a contemporary four-bedroom family home in Dainfern Valley. The project involved navigating the estate\'s aesthetic guidelines and municipal building requirements.',
    scope: 'Concept design, detailed architectural drawings, structural engineer coordination, and full municipal submission.',
    highlights: [
      'Compliant with estate design guidelines',
      'Approved by homeowners\' association',
      'Full municipal approval obtained in 8 weeks',
      'Structural engineer collaboration',
      'Energy-efficient design specification',
      'Construction-ready documentation package'
    ],
    images: 3
  },
  {
    id: 'lonehill-renovation',
    title: 'Complete Renovation  -  Lonehill',
    category: 'Renovation',
    location: 'Lonehill, Johannesburg',
    year: '2021',
    overview: 'A top-to-bottom renovation of a three-bedroom cluster home in Lonehill. The project modernised every room, replaced the kitchen and bathrooms, added a study, and created a new outdoor living area.',
    scope: 'Interior gut renovation, roof waterproofing, new kitchen and bathrooms, outdoor patio construction.',
    highlights: [
      'Complete interior transformation',
      'Modern open-plan kitchen design',
      'New guest bathroom and en-suite',
      'Dedicated home office space',
      'New timber deck and pergola',
      'Completed within budget'
    ],
    images: 3
  },
  {
    id: 'secure-estate-northriding',
    title: 'Secure Residential Estate  -  Northriding',
    category: 'Estate Development',
    location: 'Northriding, Johannesburg',
    year: '2019',
    overview: 'A gated community of 16 modern townhouses designed for young professionals and small families. The development features contemporary architecture with efficient space planning and shared amenities.',
    scope: 'Full estate development including civil works, 16 townhouse units, communal gardens, and security infrastructure.',
    highlights: [
      '16 two- and three-bedroom townhouses',
      'Secure access with biometric controls',
      'Communal garden and children\'s play area',
      'Visitor parking and covered resident bays',
      'Fibre-ready telecommunications infrastructure',
      'Energy-efficient building envelope'
    ],
    images: 4
  },
  {
    id: 'atholl-estate',
    title: 'Exclusive Residential Estate  -  Atholl',
    category: 'Estate Development',
    location: 'Atholl, Johannesburg',
    year: '2022 - 2025',
    overview: '11 exclusive, freestanding homes in the prestigious suburb of Atholl. This showcases Raycon\'s capability to build high-end residential properties in one of Johannesburg\'s most sought-after addresses.',
    scope: '11 exclusive freestanding homes. Started July 2022  -  Phase 1 completed 2025. Up to 6 houses under construction simultaneously.',
    highlights: [
      '11 exclusive freestanding homes',
      'Prestigious suburb of Atholl',
      'Started July 2022',
      'Phase 1 completed 2025',
      'Up to 6 houses under construction simultaneously',
      'High-end residential finishes throughout'
    ],
    images: 4
  }
];

/**
 * FAQ DATA for Services page
 */
const FAQS = [
  {
    question: 'How long does it typically take to build a new home?',
    answer: 'The timeline varies depending on the size and complexity of the project. A standard three- to four-bedroom home generally takes 8 to 12 months from breaking ground to handover. Larger or more complex homes may take 12 to 18 months. We provide a detailed construction programme before work begins so you always know what to expect.'
  },
  {
    question: 'Do you handle the architectural plans and council approvals?',
    answer: 'Yes. Our Plans, Drawings and Submissions service covers the full process  -  from initial concept sketches and detailed architectural drawings to structural engineer coordination and municipal submission. We work with the relevant local authorities to secure all necessary approvals before construction begins.'
  },
  {
    question: 'What areas do you operate in?',
    answer: 'We primarily serve the northern suburbs of Johannesburg, including Dainfern, Dainfern Valley, Fourways Gardens, Broadacres, Waterfall Estate, Bryanston, Lonehill, and surrounding areas. If your project falls outside these areas, please contact us  -  we\'re happy to discuss your requirements.'
  },
  {
    question: 'Can I live in my home during a renovation?',
    answer: 'In many cases, yes. For smaller alterations and additions, we plan the work in phases to minimise disruption. For major renovations that involve structural changes or work in kitchens and bathrooms, temporary relocation may be advisable. We\'ll advise you during the consultation phase on the best approach for your specific project.'
  },
  {
    question: 'What is a turnkey project?',
    answer: 'A turnkey project is our most comprehensive service. We manage every aspect of your build  -  from drawing your dream plan, obtaining all approvals, managing the full construction process, right through to issuing your occupation certificate. You receive a complete, move-in-ready home with one dedicated point of contact throughout the journey.'
  },
  {
    question: 'How do I get started with a project?',
    answer: 'The best first step is to contact us for an initial consultation. During this meeting, we\'ll discuss your vision, review your site (if applicable), and outline the process, timeline, and indicative budget range. There\'s no obligation  -  it\'s an opportunity for us to understand your needs and for you to get a feel for how we work.'
  }
];

/**
 * TESTIMONIALS (placeholder)
 */
const TESTIMONIALS = [
  {
    quote: 'Raycon delivered our dream home in Dainfern with incredible attention to detail. From the first meeting to the day we moved in, the process was smooth and professional. We couldn\'t be happier with the result.',
    name: 'James & Sarah M.',
    role: 'Homeowner, Dainfern',
    initials: 'JM'
  },
  {
    quote: 'The renovation of our Fourways Gardens home exceeded all expectations. The team was respectful of our space, communicated every step clearly, and delivered on time. It feels like a brand-new house.',
    name: 'Priya Naidoo',
    role: 'Homeowner, Fourways Gardens',
    initials: 'PN'
  },
  {
    quote: 'As a developer, I need a builder I can trust to deliver consistent quality across multiple units. Raycon has been that partner for over a decade. Their estate work in Beverley set the standard.',
    name: 'David van Rensburg',
    role: 'Property Developer',
    initials: 'DV'
  },
  {
    quote: 'From architectural plans through to the occupation certificate, the turnkey service was seamless. One point of contact, no surprises, and a beautiful home at the end. Highly recommended.',
    name: 'Linda & Mark Thompson',
    role: 'Homeowner, Waterfall Estate',
    initials: 'LT'
  },
  {
    quote: 'The alterations to our Bryanston property were handled with real craftsmanship. The team integrated the extension so well that guests can\'t tell where the original house ends and the new work begins.',
    name: 'Michael Joubert',
    role: 'Homeowner, Bryanston',
    initials: 'MJ'
  }
];

/**
 * TEAM members (placeholder)
 */
const TEAM = [
  {
    name: 'Ray Sobel',
    role: 'Founder & Managing Director',
    initials: 'RS',
    bio: 'With decades of experience in residential construction, Ray founded Raycon Devvelopments in 1982. His commitment to quality and hands-on approach have shaped the company\'s reputation for excellence in Johannesburg\'s northern suburbs.'
  },
  {
    name: 'Andrew Mitchell',
    role: 'Construction Manager',
    initials: 'AM',
    bio: 'Andrew oversees all on-site operations, ensuring every project meets Raycon\'s exacting standards. With a background in structural engineering, he brings deep technical knowledge to every build.'
  },
  {
    name: 'Samantha Pretorius',
    role: 'Administration',
    initials: 'SP',
    bio: 'Samantha manages client communications and project timelines, ensuring every detail is coordinated smoothly. Her organisational skills keep projects on track from consultation through to handover.'
  },
  {
    name: 'David Khumalo',
    role: 'Site Foreman',
    initials: 'DK',
    bio: 'David leads our construction teams on the ground. His two decades of experience in residential building and his dedication to precision ensure consistently high-quality workmanship on every project.'
  }
];

