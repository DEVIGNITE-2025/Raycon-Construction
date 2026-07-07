/* ============================================================
   RAYCON DEVELOPMENTS - Site Data
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
    longDesc: 'From contemporary architectural statements to timeless classical designs, our upmarket homes are the result of decades of refined craftsmanship. Every detail - from foundation to finishes - is executed with meticulous care. We collaborate closely with leading architects to bring your vision to life in suburbs like Dainfern, Bryanston, Waterfall Estate, and Atholl.',
    icon: 'home-luxury',
    imagePath: 'assets/img/service-upmarket-homes.jpg'
  },
  {
    id: 'alterations-additions',
    title: 'Alterations & Additions',
    shortDesc: 'Transform your existing property with expertly planned renovations, extensions, and modernisation projects.',
    longDesc: 'Whether you need an additional bedroom, a reimagined kitchen, or a complete ground-floor extension, our team manages every detail from structural assessment right through to finishing touches. We work sensitively within existing structures, minimising disruption while maximising the potential of your property. Raycon has been specialising in alterations and additions since 1982.',
    icon: 'tools',
    imagePath: 'assets/img/renovation.jpeg'
  },
  {
    id: 'plans-submissions',
    title: 'Plans & Submissions',
    shortDesc: 'Professional architectural plans, council submissions, and all regulatory documentation handled end-to-end.',
    longDesc: 'Navigating municipal approvals and building regulations can be complex. We are here to advise and assist with all aspects of your build, from planning to occupation certificate.',
    icon: 'blueprint',
    imagePath: 'Projects/cambridge-road-site-plan.webp',
    imageFit: 'contain'
  },
  {
    id: 'secure-estates',
    title: 'Secure Estate Developments',
    shortDesc: 'Complete residential estate development, from site planning to final handover, in secure gated communities.',
    longDesc: 'We have a proven track record delivering exceptional estate developments. From Thornbush Estate (22 units) and Bramble Bush Estate (40 units) to Cowley Row (6 units) and The Wahlberg (11 homes), we handle every aspect including site infrastructure, individual home construction, landscaping, and common area development.',
    icon: 'shield',
    imagePath: 'Projects/THORN-BUSH-ESTATE.jpg'
  },
  {
    id: 'turnkey-projects',
    title: 'Turn Key Projects',
    shortDesc: 'A complete service from the drawing of your dream home to occupation certificate - we manage every step.',
    longDesc: 'Our turnkey service is the ultimate hands-free building experience. We manage the entire lifecycle of your project: from initial concept and architectural drawings, through council approvals, construction, and finishing, right up to your occupation certificate. You receive a ready-to-move-in home with a single point of contact throughout.',
    icon: 'key',
    imagePath: 'assets/img/service-turnkey.jpg'
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
    title: 'The Wahlberg - Atholl',
    category: 'Estate Development',
    location: 'Atholl, Johannesburg',
    year: '2022 - 2025',
    featured: true,
    overview: '11 of the freestanding homes in this upmarket secure development of 22 houses in Atholl were built by Raycon. This showcases Raycon\'s capability to build high-end residential estates. Designed by Darryl Croome Architects.',
    scope: '11 homes within a secure development of 22 houses. Started July 2022 - completed Phase 1 in 2025. Up to 6 houses under construction simultaneously.',
    highlights: [
      '11 of 22 freestanding homes built by Raycon',
      'Designed by Darryl Croome Architects',
      'Premium Atholl location',
      'Started July 2022 - completed Phase 1 in 2025',
      'Up to 6 houses under construction simultaneously'
    ],
    images: 2,
    imagePaths: ['Projects/Wahlberg.jpg', 'Projects/Atholl.jpg']
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
    images: 1,
    imagePaths: ['Projects/CowleyRow.jpg']
  },
  {
    id: 'porchester-lane',
    title: 'Porchester Lane',
    category: 'New Build',
    hideCategoryLabel: true,
    location: 'Bryanston',
    year: '2022',
    featured: true,
    overview: 'A development of 5 residential units completed in November 2022. This project highlights Raycon\'s ability to deliver multi-unit residential developments efficiently and to a high standard.',
    scope: 'Full construction of 5 residential units from foundation to completion.',
    highlights: [
      '5 residential units',
      'Completed November 2022',
      'Quality construction throughout'
    ],
    images: 2,
    imagePaths: ['Projects/Porchester.jpg', 'Projects/Porchester1.jpg']
  },
  {
    id: '156-on-mount',
    title: '156 On Mount',
    category: 'New Build',
    hideCategoryLabel: true,
    location: 'Bryanston',
    year: '2023',
    featured: true,
    overview: '4 units of 8 were built by Raycon Developments in this secure estate.',
    scope: 'Construction of 4 units within an 8-unit secure estate, including all finishes.',
    highlights: [
      '4 residential units',
      'Completed August 2023',
      'Premium finishes'
    ],
    images: 1,
    imagePaths: ['Projects/156Mount.jpg']
  },
  {
    id: 'thornbush-estate',
    title: 'Thornbush Estate',
    category: 'Estate Development',
    location: 'Beverley',
    year: '2009',
    overview: 'Raycon completed the construction of 22 residential units in this estate development. A landmark project that demonstrated our capacity to deliver multi-unit residential developments at consistently high standards.',
    scope: 'Complete construction of 22 residential units including infrastructure and estate facilities.',
    highlights: [
      '22 residential units',
      'Architect: Down To Earth Architects & Interiors',
      'Completed 2009',
      'Secure residential estate'
    ],
    images: 1,
    imagePaths: ['Projects/THORN-BUSH-ESTATE.jpg']
  },
  {
    id: 'bramble-bush-estate',
    title: 'Bramble Bush Estate - Broadacres',
    category: 'Estate Development',
    location: 'Broadacres',
    year: 'Completed',
    overview: 'Raycon built 40 units in this Broadacres development. One of our largest estate projects, demonstrating our capacity to manage and deliver substantial residential developments.',
    scope: 'Full construction of 40 residential units within the Bramble Bush Estate development.',
    highlights: [
      '40 residential units',
      'Broadacres location',
      'Architect: Down To Earth Architects & Interiors',
      'Large-scale estate development'
    ],
    images: 1,
    imagePaths: ['Projects/BRAMBLE-BUSH.jpg']
  },
  {
    id: 'blue-hills-equestrian-estate',
    title: 'Blue Hills Equestrian Estate',
    category: 'Estate Development',
    location: 'Blue Hills, Johannesburg',
    year: 'In Progress',
    overview: 'A Raycon residential estate project in Blue Hills. Further project details are available on request.',
    scope: 'Residential estate construction works within Blue Hills Equestrian Estate.',
    highlights: [
      'Blue Hills location',
      'Residential estate project',
      'Further details available on request'
    ],
    images: 4,
    imagePaths: ['Projects/BlueHills.jpeg', 'Projects/BlueHills_2.jpeg', 'Projects/BlueHills_3.jpeg', 'Projects/BlueHills_4.jpg']
  },
  {
    id: 'waterfall-estate',
    title: 'Waterfall Estate',
    category: 'New Build',
    hideCategoryLabel: true,
    location: 'Waterfall Estate, Johannesburg',
    year: 'Completed',
    overview: 'Raycon built 18 houses in the prestigious Waterfall Estate, one of Johannesburg\'s premier residential addresses. Each home was constructed to the estate\'s exacting standards.',
    scope: 'Construction of 18 individual homes within Waterfall Estate.',
    highlights: [
      '18 houses built',
      'Premium Waterfall Estate location',
      'Constructed to estate standards'
    ],
    images: 3,
    imagePaths: ['Projects/waterfall1.JPG', 'Projects/waterfall2.JPG', 'Projects/waterfall3.JPG'],
    galleryHeading: null
  },
  {
    id: 'fourways-gardens',
    title: 'Fourways Gardens',
    category: 'New Build',
    hideCategoryLabel: true,
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
    images: 2,
    imagePaths: ['Projects/fourwaysgardens1.jpg', 'Projects/fourwaysgardens2.jpg']
  },
  {
    id: 'saddle-brook',
    title: 'Saddlebrook Estate',
    category: 'New Build',
    hideCategoryLabel: true,
    location: 'Midrand',
    year: 'Completed',
    overview: 'Raycon completed 3 luxury homes in the exclusive Saddlebrook Estate. Each home was individually crafted to the highest specifications.',
    scope: 'Construction of 3 luxury residential homes.',
    highlights: [
      '3 luxury homes',
      'Exclusive Saddlebrook Estate location',
      'Premium finishes throughout'
    ],
    images: 1,
    imagePaths: ['Projects/SADDLEBROOK-ESTATE.jpg'],
    galleryHeading: null
  },
  {
    id: 'kyalami-residence',
    title: 'Linksfield Residence - Johannesburg',
    category: 'Renovation/Revamp',
    location: 'Linksfield, Johannesburg',
    year: 'Completed',
    overview: 'A complete interior renovation of an old unit in a secure sectional title development.',
    scope: 'Renovate and modernise the entire unit without changing the uniform look on the outside.',
    highlights: [
      'Complete interior renovation',
      'Secure sectional title development',
      'Modernised without changing the outside uniform look'
    ],
    images: 3,
    galleryHeading: 'Updated entire Unit',
    beforeAfterPairs: [
      { before: 'Projects/kyalami1-before.jpg', after: 'Projects/kyalami1-after.JPG' },
      { before: 'Projects/kyalami2-before.JPG', after: 'Projects/kyalami2-after.JPG' },
      { before: 'Projects/kyalami3-before.jpg', after: 'Projects/kyalami3-after.JPG' }
    ]
  },
  {
    id: 'inanda-stand-alone-house',
    title: 'Stand Alone House - Inanda',
    category: 'New Project',
    location: 'Inanda',
    year: 'New Project',
    featured: true,
    overview: 'A new stand-alone residential house in Inanda.',
    scope: 'Stand-alone residential home construction.',
    highlights: [
      'Stand-alone house',
      'Inanda location',
      'New residential project'
    ],
    images: 1,
    imagePaths: ['assets/img/111230.png'],
    galleryHeading: null
  },
  {
    id: 'melrose-apartment-renovation',
    title: 'Melrose Apartment Renovation',
    category: 'Renovation/Revamp',
    location: 'Melrose',
    year: 'New Project',
    featured: true,
    overview: 'A full interior renovation of an apartment in Melrose.',
    scope: 'Full interior apartment renovation.',
    highlights: [
      'Full interior renovation',
      'Apartment project',
      'Melrose location'
    ],
    images: 0,
    galleryHeading: null
  },
  {
    id: 'cambridge-road-bryanston',
    title: 'Cambridge Road Secure Estate',
    category: 'Estate Development',
    location: 'Cambridge Road, Bryanston',
    year: 'To be launched soon',
    featured: true,
    overview: 'A new secure estate of 10 houses in Cambridge Road, Bryanston. To be launched soon.',
    scope: 'Secure estate development of 10 houses, with site planning and launch documentation in progress.',
    highlights: [
      '10-house secure estate',
      'Cambridge Road, Bryanston',
      'To be launched soon'
    ],
    images: 1,
    imagePaths: ['Projects/cambridge-road-site-plan.webp'],
    sitePlan: {
      image: 'Projects/cambridge-road-site-plan.webp',
      title: 'Cambridge Road Site Plan'
    },
    galleryHeading: 'Site Plan'
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
    answer: 'Yes. Our Plans & Submissions service covers the full process - from initial concept sketches and detailed architectural drawings to structural engineer coordination and municipal submission. We work with the relevant local authorities to secure all necessary approvals before construction begins.'
  },
  {
    question: 'What areas do you operate in?',
    answer: 'We primarily serve the northern suburbs of Johannesburg, including Dainfern, Dainfern Valley, Fourways Gardens, Broadacres, Waterfall Estate, Bryanston, Craighall, Blue Hills, and surrounding areas. If your project falls outside these areas, please contact us - we\'re happy to discuss your requirements.'
  },
  {
    question: 'Can I live in my home during a renovation?',
    answer: 'In many cases, yes. For smaller alterations and additions, we plan the work in phases to minimise disruption. For major renovations that involve structural changes or work in kitchens and bathrooms, temporary relocation may be advisable. We\'ll advise you during the consultation phase on the best approach for your specific project.'
  },
  {
    question: 'What is a turnkey project?',
    answer: 'A turnkey project is our most comprehensive service. We manage every aspect of your build - from drawing your dream home, obtaining all approvals, managing the full construction process, right through to issuing your occupation certificate. You receive a complete, move-in-ready home with one dedicated point of contact throughout the journey.'
  },
  {
    question: 'How many projects can you manage at once?',
    answer: 'Our project capacity is between 5 and 7 projects depending on the size and complexity of each build. This allows us to maintain quality and dedicated attention across all active projects.'
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

