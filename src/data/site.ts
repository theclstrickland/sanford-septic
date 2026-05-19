/**
 * SITE CONFIG — Single source of truth for Sanford Septic Tank.
 * Clone of the Fayetteville model for Lee County, NC.
 */

export const site = {
  // ── Brand ──────────────────────────────────────────────
  name: 'Sanford Septic Tank',
  domain: 'sanfordseptictank.com',
  url: 'https://sanfordseptictank.com',
  phone: '(919) 555-0183',
  phoneTel: '+19195550183',
  tagline: 'Septic Tank Pumping & Repair Services',
  description:
    'Professional septic tank pumping, cleaning, repair, and inspection across the Sanford, NC metro. Serving Lee, Chatham, and Harnett counties. Flat-rate pricing. 24/7 emergency service.',

  // ── Location ───────────────────────────────────────────
  city: 'Sanford',
  state: 'NC',
  stateFullName: 'North Carolina',
  county: 'Lee',
  region: 'Central North Carolina',
  zip: '27330',
  geo: { lat: 35.4799, lng: -79.1803 },

  // ── Hours ──────────────────────────────────────────────
  hours: 'Mon – Sat: 7 AM – 7 PM',
  hoursNote: '24/7 Emergency Service Available',
  hoursSchema: [
    { days: 'Mo,Tu,We,Th,Fr,Sa', opens: '07:00', closes: '19:00' },
  ],

  // ── Pricing ────────────────────────────────────────────
  pricing: [
    { service: 'Septic Tank Pumping (up to 1,000 gal)', price: '$275 – $400' },
    { service: 'Septic Tank Pumping (1,000 – 1,500 gal)', price: '$375 – $550' },
    { service: 'Septic Tank Cleaning', price: '$300 – $600' },
    { service: 'Septic Inspection', price: '$150 – $300' },
    { service: 'Septic Tank Repair', price: '$500 – $2,500+' },
    { service: 'Emergency Pumping', price: '$450 – $800' },
  ],

  // ── Services ───────────────────────────────────────────
  services: [
    {
      name: 'Septic Tank Pumping',
      slug: 'septic-tank-pumping',
      icon: '🚛',
      short: 'Regular septic tank pumping keeps your system healthy and prevents costly backups. We pump tanks of all sizes across Lee County.',
      description: `Septic tank pumping is the most essential maintenance task for any septic system in Sanford, NC. The EPA recommends pumping your septic tank every 3 to 5 years depending on household size and tank capacity.

Our experienced technicians serve residential and commercial properties throughout Sanford, Tramway, Broadway, Lemon Springs, and surrounding communities in Lee County. We handle tanks from 500 to 2,000+ gallons with our modern vacuum trucks.

Signs you need septic pumping include slow-draining fixtures, gurgling sounds in pipes, sewage odors near your drain field, and standing water over your septic tank. Don't wait for a backup — schedule regular pumping to protect your home and your investment.`,
      keywords: ['septic tank pumping Sanford NC', 'septic pumping near me', 'septic tank pumping Lee County', 'septic pump out Sanford'],
    },
    {
      name: 'Septic Tank Cleaning',
      slug: 'septic-tank-cleaning',
      icon: '🧹',
      short: 'Deep cleaning removes built-up sludge, scum, and debris that regular pumping can miss. Extends the life of your system.',
      description: `Septic tank cleaning goes beyond standard pumping to thoroughly remove all accumulated sludge, scum, and debris from your tank. While pumping removes the liquid and floating solids, professional cleaning targets the hardened buildup that settles on the bottom and clings to tank walls.

For Sanford homeowners, we recommend a deep clean every 5 to 7 years or whenever your technician notices excessive buildup during a routine pump-out. Regular cleaning extends the life of your septic system, improves efficiency, and prevents damage to your drain field.

Our cleaning process includes a full pump-out, high-pressure jetting of the tank interior, inspection of baffles and inlet/outlet tees, and a thorough rinse to leave your tank in optimal condition.`,
      keywords: ['septic tank cleaning Sanford NC', 'septic cleaning service', 'septic tank clean out Lee County'],
    },
    {
      name: 'Septic Tank Repair',
      slug: 'septic-tank-repair',
      icon: '🔧',
      short: 'Expert repair for cracked tanks, broken baffles, damaged lids, failing drain fields, and all septic system components.',
      description: `Septic system problems don't fix themselves — and they get more expensive the longer you wait. Whether you're dealing with a cracked tank, broken baffle, damaged inlet or outlet pipe, collapsed distribution box, or a failing drain field, our Sanford repair team has the experience to diagnose and fix it.

Common septic repairs in Lee County include replacing damaged tank lids and risers, repairing or replacing broken baffles, fixing inlet and outlet tee connections, addressing root intrusion, repairing distribution boxes, and drain field restoration.

We serve Sanford, Broadway, Olivia, Tramway, and all of Lee County. All repairs include a comprehensive inspection so we can identify the root cause and prevent future problems.`,
      keywords: ['septic tank repair Sanford NC', 'septic system repair near me', 'septic repair Lee County NC'],
    },
    {
      name: 'Emergency Septic Service',
      slug: 'emergency-septic-service',
      icon: '🚨',
      short: 'Septic emergencies can\'t wait. We provide 24/7 emergency pumping, backup cleanup, and urgent repairs across Lee County.',
      description: `When your septic system fails, every minute counts. Raw sewage backing up into your home is a health hazard that requires immediate professional attention. Our Sanford emergency septic team is available 24 hours a day, 7 days a week.

Common septic emergencies include sewage backup into the home, toilets and drains completely stopped, septic tank overflow, standing sewage in the yard, and foul odors indicating system failure.

We respond quickly to emergencies throughout Sanford, Broadway, Lemon Springs, Tramway, and all of Lee County. Our emergency service includes rapid pump-out, site assessment, temporary solutions to prevent further damage, and recommendations for permanent repair.

Don't wait until Monday morning. Call us now for immediate emergency septic service in the Sanford area.`,
      keywords: ['emergency septic service Sanford NC', '24/7 septic pumping', 'emergency septic pumping Lee County'],
    },
    {
      name: 'Septic Inspection',
      slug: 'septic-inspection',
      icon: '🔍',
      short: 'Comprehensive septic inspections for home sales, routine maintenance, and system evaluations. Detailed written reports included.',
      description: `A professional septic inspection gives you a complete picture of your system's health. Whether you're buying or selling a home in Sanford, NC, or you want to make sure your system is functioning properly, our thorough inspection covers every component.

Our septic inspection includes locating and uncovering the tank, measuring sludge and scum levels, inspecting baffles and structural integrity, checking inlet and outlet pipes, evaluating the drain field condition, testing for proper flow, and providing a detailed written report.

In Lee County, most real estate transactions require a septic inspection. We provide fast turnaround on inspection reports so you can close on time. Our inspectors are experienced with all types of septic systems common in the Sanford area, including conventional, chamber, and low-pressure pipe systems.`,
      keywords: ['septic inspection Sanford NC', 'septic system inspection Lee County', 'home sale septic inspection Sanford'],
    },
  ],

  // ── Locations ──────────────────────────────────────────
  locations: [
    {
      name: 'Sanford',
      slug: 'sanford',
      county: 'Lee',
      description: 'Sanford is the county seat of Lee County and the heart of our service area. With a growing population fueled by the VinFast manufacturing plant and new residential development, demand for reliable septic services has never been higher. Our team provides fast, affordable septic pumping, cleaning, repair, and inspection throughout Sanford and surrounding neighborhoods.',
      keywords: ['septic service Sanford NC', 'septic tank pumping Sanford', 'Sanford NC septic company'],
      zip: '27330',
    },
    {
      name: 'Broadway',
      slug: 'broadway',
      county: 'Lee',
      description: 'Broadway is a small community in southern Lee County where nearly every home relies on a private septic system. We provide regular pumping, emergency service, and inspections to Broadway homeowners. Our trucks are in the area frequently, so we can often provide same-day or next-day service.',
      keywords: ['septic service Broadway NC', 'septic pumping Broadway', 'Broadway NC septic tank'],
      zip: '27505',
    },
    {
      name: 'Pittsboro',
      slug: 'pittsboro',
      county: 'Chatham',
      description: 'Pittsboro, the county seat of Chatham County, is one of the fastest-growing communities in central North Carolina. As new homes are built in developments like Chatham Park, reliable septic service is essential. We serve Pittsboro with full septic pumping, cleaning, repair, and inspection services.',
      keywords: ['septic service Pittsboro NC', 'septic tank pumping Pittsboro', 'Chatham County septic service'],
      zip: '27312',
    },
    {
      name: 'Siler City',
      slug: 'siler-city',
      county: 'Chatham',
      description: 'Siler City and western Chatham County are home to thousands of residential septic systems. We provide affordable septic tank pumping, cleaning, and repair services to Siler City homeowners and businesses. Regular maintenance prevents costly emergencies.',
      keywords: ['septic service Siler City NC', 'septic pumping Siler City', 'Siler City septic tank service'],
      zip: '27344',
    },
    {
      name: 'Lillington',
      slug: 'lillington',
      county: 'Harnett',
      description: 'Lillington is the county seat of Harnett County, just south of Sanford. Many homes in the Lillington area depend on septic systems for wastewater management. We provide complete septic services including pumping, cleaning, repair, and inspection to Lillington and surrounding Harnett County communities.',
      keywords: ['septic service Lillington NC', 'septic tank pumping Lillington', 'Harnett County septic service'],
      zip: '27546',
    },
    {
      name: 'Cameron',
      slug: 'cameron',
      county: 'Moore',
      description: 'Cameron sits at the crossroads of Lee, Moore, and Harnett counties. This rural community relies heavily on septic systems, and our team services the area regularly. We offer pumping, cleaning, emergency service, and inspections to Cameron-area homeowners.',
      keywords: ['septic service Cameron NC', 'septic pumping Cameron', 'Cameron NC septic tank'],
      zip: '28326',
    },
    {
      name: 'Goldston',
      slug: 'goldston',
      county: 'Chatham',
      description: 'Goldston and the Deep River area of Chatham County are rural communities where septic systems are the standard. We provide reliable, affordable septic tank pumping, cleaning, and repair to Goldston homeowners.',
      keywords: ['septic service Goldston NC', 'septic pumping Goldston', 'Goldston NC septic company'],
      zip: '27252',
    },
    {
      name: 'Carthage',
      slug: 'carthage',
      county: 'Moore',
      description: 'Carthage, the county seat of Moore County, is just a short drive from Sanford. We extend our septic services to Carthage and northern Moore County, providing pumping, cleaning, inspections, and emergency service to area homeowners and businesses.',
      keywords: ['septic service Carthage NC', 'septic pumping Carthage', 'Moore County septic service'],
      zip: '28327',
    },
  ],

  // ── FAQs ───────────────────────────────────────────────
  faqs: [
    {
      question: 'How often should I pump my septic tank in Sanford?',
      answer: 'The EPA recommends pumping every 3 to 5 years for a typical household. Larger families or homes with garbage disposals may need more frequent service. We can assess your system and recommend the right schedule for your home.',
    },
    {
      question: 'How much does septic tank pumping cost in Sanford, NC?',
      answer: 'Septic tank pumping in the Sanford area typically costs $275 to $550 depending on tank size and accessibility. We provide upfront, flat-rate pricing with no hidden fees. Call us for a free estimate.',
    },
    {
      question: 'What are the signs my septic tank needs pumping?',
      answer: 'Common warning signs include slow-draining sinks and toilets, gurgling sounds in your plumbing, sewage odors in your yard or home, standing water near your septic tank or drain field, and unusually green grass over the drain field.',
    },
    {
      question: 'Do you offer emergency septic service in Lee County?',
      answer: 'Yes, we provide 24/7 emergency septic service throughout Sanford, Broadway, and all of Lee County. Septic backups are health hazards that require immediate attention. Call us any time, day or night.',
    },
    {
      question: 'Do I need a septic inspection when buying a home in Sanford?',
      answer: 'We strongly recommend a septic inspection for any home purchase in Lee County. Most lenders require one, and it protects you from inheriting a failing system. Our inspections include a detailed written report with photos.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Sanford, Broadway, Pittsboro, Siler City, Lillington, Cameron, Goldston, Carthage, and surrounding communities in Lee, Chatham, Harnett, and Moore counties.',
    },
    {
      question: 'How long does septic tank pumping take?',
      answer: 'A standard septic tank pumping takes 30 to 60 minutes depending on tank size and condition. We work efficiently to minimize disruption to your day.',
    },
    {
      question: 'Can I use a garbage disposal with a septic system?',
      answer: 'While you can use a garbage disposal with a septic system, it significantly increases the amount of solids entering your tank. This means you will need to pump more frequently — typically every 2 to 3 years instead of 3 to 5.',
    },
  ],
};
