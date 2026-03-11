/* ============================================================
   RAYCON DEVELOPMENTS — Site Data
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
    longDesc: 'From contemporary architectural statements to timeless classical designs, our upmarket homes are the result of decades of refined craftsmanship. Every detail — from foundation to finishes — is executed with meticulous care. We collaborate closely with leading architects to bring your vision to life in suburbs like Dainfern, Bryanston, Waterfall Estate, and Atholl.',
    icon: 'home-luxury'
  },
  {
    id: 'alterations-additions',
    title: 'Alterations & Additions',
    shortDesc: 'Transform your existing property with expertly planned renovations, extensions, and modernisation projects.',
    longDesc: 'Whether you need an additional bedroom, a reimagined kitchen, or a complete ground-floor extension, our team manages every detail from structural assessment right through to finishing touches. We work sensitively within existing structures, minimising disruption while maximising the potential of your property. Raycon has been specialising in alterations and additions since 1982.',
    icon: 'tools'
  },
  {
    id: 'plans-submissions',
    title: 'Plans & Submissions',
    shortDesc: 'Professional architectural plans, council submissions, and all regulatory documentation handled end-to-end.',
    longDesc: 'Navigating municipal approvals and building regulations can be complex. Our experienced team prepares full sets of architectural plans, structural drawings, and handles all submissions to local authorities. We streamline the approval process so you can move from concept to construction with confidence.',
    icon: 'blueprint'
  },
  {
    id: 'secure-estates',
    title: 'Secure Estate Developments',
    shortDesc: 'Complete residential estate development, from site planning to final handover, in secure gated communities.',
    longDesc: 'We have a proven track record delivering exceptional estate developments. From Thornbush Estate (22 units) and Bramble Bush Estate (40 units) to Cowley Row (6 units) and The Wahlberg (23 homes), we handle every aspect including site infrastructure, individual home construction, landscaping, and common area development.',
    icon: 'shield'
  },
  {
    id: 'turnkey-projects',
    title: 'Turn Key Projects',
    shortDesc: 'A complete service from the drawing of your dream home to occupation certificate — we manage every step.',
    longDesc: 'Our turnkey service is the ultimate hands-free building experience. We manage the entire lifecycle of your project: from initial concept and architectural drawings, through council approvals, construction, and finishing, right up to your occupation certificate. You receive a ready-to-move-in home with a single point of contact throughout.',
    icon: 'key'
  }
];

/**
 * PROJECT DATA
 * Each project has: id, title, category, location, year, overview, scope,
 * highlights (array), images (number of gallery placeholders)
 *
 * Categories: New Build | Renovation | Estate Development | Alterations & Additions
 */
const PROJECTS = [
  {
    id: 'the-wahlberg',
    title: 'The Wahlberg — Atholl',
    category: 'Estate Development',
    location: 'Atholl, Johannesburg',
    year: '2022–Present',
    featured: true,
    overview: '23 exclusive, free-standing cluster homes in the prestigious Atholl suburb. This ongoing development showcases Raycon\'s capability to deliver large-scale, high-end residential estates. Designed by Darryl Croome Architects.',
    scope: 'Full estate development of 23 free-standing cluster homes, from site infrastructure through to individual home construction and finishes.',
    highlights: [
      '23 exclusive free-standing cluster homes',
      'Designed by Darryl Croome Architects',
      'Premium Atholl location',
      'Started July 2022, ongoing',
      'Up to 11 houses under construction simultaneously'
    ],
    images: 4
  },
  {
    id: 'cowley-row',
    title: 'Cowley Row',
    category: 'Estate Development',
    location: 'Johannesburg',
    year: '2022',
    featured: true,
    overview: 'A secure 6-unit residential estate completed in April 2022. This boutique development demonstrates Raycon\'s expertise in delivering intimate, secure residential communities to the highest standards.',
    scope: 'Complete construction of a secure 6-unit residential estate including all infrastructure, security, and finishes.',
    highlights: [
      'Secure 6-unit residential estate',
      'Architect: Venui Architects',
      'Completed April 2022',
      'Delivered on schedule'
    ],
    images: 3
  },
  {
    id: 'porchester-lane',
    title: 'Porchester Lane',
    category: 'New Build',
    location: 'Johannesburg',
    year: '2022',
    featured: true,
    overview: 'A development of 6 residential units completed in November 2022. This project highlights Raycon\'s ability to deliver multi-unit residential developments efficiently and to a high standard.',
    scope: 'Full construction of 6 residential units from foundation to completion.',
    highlights: [
      '6 residential units',
      'Completed November 2022',
      'Quality construction throughout'
    ],
    images: 3
  },
  {
    id: '156-on-mount',
    title: '156 On Mount',
    category: 'New Build',
    location: 'Johannesburg',
    year: '2023',
    featured: true,
    overview: 'A development of 4 residential units completed in August 2023. This project showcases Raycon\'s consistent delivery of quality residential construction.',
    scope: 'Complete construction of 4 residential units including all finishes.',
    highlights: [
      '4 residential units',
      'Completed August 2023',
      'Premium finishes'
    ],
    images: 3
  },
  {
    id: 'kingfisher-offices',
    title: 'Kingfisher Offices',
    category: 'Alterations & Additions',
    location: 'Johannesburg',
    year: 'Recent',
    overview: 'Additions and alterations to an existing office/home, adding 140 m² of functional space. This project demonstrates Raycon\'s expertise in sensitive alterations that enhance existing properties.',
    scope: 'Additions and alterations to existing office/home — 140 m² of new and refurbished space.',
    highlights: [
      '140 m² additions and alterations',
      'Office/home conversion',
      'Seamless integration with existing structure'
    ],
    images: 3
  },
  {
    id: 'thornbush-estate',
    title: 'Thornbush Estate',
    category: 'Estate Development',
    location: 'Johannesburg',
    year: '2009',
    overview: 'Raycon completed the construction of 22 residential units in this estate development. A landmark project that demonstrated our capacity to deliver multi-unit residential developments at consistently high standards.',
    scope: 'Complete construction of 22 residential units including infrastructure and estate facilities.',
    highlights: [
      '22 residential units',
      'Architect: Down To Earth Architects & Interiors',
      'Completed 2009',
      'Secure residential estate'
    ],
    images: 4
  },
  {
    id: 'bramble-bush-estate',
    title: 'Bramble Bush Estate — Broadacres',
    category: 'Estate Development',
    location: 'Broadacres, Johannesburg',
    year: 'Completed',
    overview: 'Raycon built 40 units in this Broadacres development. One of our largest estate projects, demonstrating our capacity to manage and deliver substantial residential developments.',
    scope: 'Full construction of 40 residential units within the Bramble Bush Estate development.',
    highlights: [
      '40 residential units',
      'Broadacres location',
      'Architect: Down To Earth Architects & Interiors',
      'Large-scale estate development'
    ],
    images: 4
  },
  {
    id: 'waterfall-estate',
    title: 'Waterfall Estate',
    category: 'New Build',
    location: 'Waterfall Estate, Johannesburg',
    year: 'Completed',
    overview: 'Raycon built 18 houses in the prestigious Waterfall Estate, one of Johannesburg\'s premier residential addresses. Each home was constructed to the estate\'s exacting standards.',
    scope: 'Construction of 18 individual homes within Waterfall Estate.',
    highlights: [
      '18 houses built',
      'Premium Waterfall Estate location',
      'Constructed to estate standards'
    ],
    images: 4
  },
  {
    id: 'fourways-gardens',
    title: 'Fourways Gardens',
    category: 'New Build',
    location: 'Fourways Gardens, Johannesburg',
    year: 'Completed',
    overview: 'Raycon constructed 7 homes and completed various alterations in Fourways Gardens, a sought-after residential suburb in Johannesburg\'s northern corridor.',
    scope: 'Construction of 7 new homes and various alterations and additions.',
    highlights: [
      '7 homes constructed',
      'Various alterations completed',
      'Architect: Down To Earth Architects & Interiors',
      'Fourways Gardens location'
    ],
    images: 3
  },
  {
    id: 'benmore-gardens',
    title: 'Benmore Gardens',
    category: 'New Build',
    location: 'Benmore Gardens, Johannesburg',
    year: 'Completed',
    overview: 'Raycon constructed bespoke homes in Benmore Gardens, delivering individually designed residences to discerning homeowners in this established suburb.',
    scope: 'Construction of bespoke, individually designed homes.',
    highlights: [
      'Bespoke home construction',
      'Architect: Arthur Quinton Darryl Croome Architects',
      'Benmore Gardens location'
    ],
    images: 3
  },
  {
    id: 'saddle-brook',
    title: 'Saddle Brook',
    category: 'New Build',
    location: 'Saddle Brook, Johannesburg',
    year: 'Completed',
    overview: 'Raycon completed 3 luxury homes in the exclusive Saddle Brook estate. Each home was individually crafted to the highest specifications.',
    scope: 'Construction of 3 luxury residential homes.',
    highlights: [
      '3 luxury homes',
      'Exclusive Saddle Brook location',
      'Premium finishes throughout'
    ],
    images: 3
  },
  {
    id: 'kyalami-residence',
    title: 'Kyalami Residence',
    category: 'Alterations & Additions',
    location: 'Kyalami, Johannesburg',
    year: 'Completed',
    overview: 'A 60 m² addition to an existing home, creating a flatlet joined to the main house. This project showcases Raycon\'s ability to extend properties with seamless integration.',
    scope: '60 m² addition to existing home — flatlet joined to house.',
    highlights: [
      '60 m² addition',
      'Flatlet joined to main house',
      'Seamless integration with existing structure'
    ],
    images: 3
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
    answer: 'Yes. Our Plans & Submissions service covers the full process — from initial concept sketches and detailed architectural drawings to structural engineer coordination and municipal submission. We work with the relevant local authorities to secure all necessary approvals before construction begins.'
  },
  {
    question: 'What areas do you operate in?',
    answer: 'We primarily serve the northern suburbs of Johannesburg, including Dainfern, Dainfern Valley, Fourways Gardens, Broadacres, Waterfall Estate, Bryanston, and surrounding areas. We are also currently active in Atholl with The Wahlberg development. If your project falls outside these areas, please contact us — we\'re happy to discuss your requirements.'
  },
  {
    question: 'Can I live in my home during a renovation?',
    answer: 'In many cases, yes. For smaller alterations and additions, we plan the work in phases to minimise disruption. For major renovations that involve structural changes or work in kitchens and bathrooms, temporary relocation may be advisable. We\'ll advise you during the consultation phase on the best approach for your specific project.'
  },
  {
    question: 'What is a turnkey project?',
    answer: 'A turnkey project is our most comprehensive service. We manage every aspect of your build — from drawing your dream home, obtaining all approvals, managing the full construction process, right through to issuing your occupation certificate. You receive a complete, move-in-ready home with one dedicated point of contact throughout the journey.'
  },
  {
    question: 'How many projects can you manage at once?',
    answer: 'Our project capacity is between 10 to 12 projects simultaneously, depending on the complexity of the work. Our experienced team structure — led by Stephen Rayner as Project Manager with dedicated Site Managers — allows us to maintain quality across all active builds.'
  },
  {
    question: 'How do I get started with a project?',
    answer: 'The best first step is to contact us for an initial consultation. Call us on 011 465 4547 or 083 601 1594, or email raycon.dev@outlook.com. During this meeting, we\'ll discuss your vision, review your site (if applicable), and outline the process, timeline, and indicative budget range.'
  }
];

/**
 * TESTIMONIALS
 * References can be provided upon request.
 */
const TESTIMONIALS = [];

/**
 * TEAM
 */
const TEAM = [
  {
    name: 'Stephen Rayner',
    role: 'Director & Project Manager',
    initials: 'SR',
    bio: 'Stephen leads Raycon Developments as Director and Project Manager, overseeing all projects from inception to completion. His hands-on approach and decades of experience in residential construction ensure every project meets Raycon\'s exacting standards.'
  }
];
