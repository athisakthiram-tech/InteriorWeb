/**
 * ─────────────────────────────────────────────────────────────
 *  ALL EDITABLE CONTENT LIVES IN THIS FILE.
 *  Change the business details, services, projects, reviews and
 *  photos here — no other file needs touching.
 * ─────────────────────────────────────────────────────────────
 */

/* ---------- Photos ----------
 * Placeholder stock photos from Unsplash. To use real project photos:
 *  - either replace the URL with another https://images.unsplash.com/... link,
 *  - or drop a file into /public/projects/ and use "/projects/your-photo.jpg".
 */
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=80`;

export const images = {
  hero: u("1772797583328-f83bc3f94f80"),
  about: u("1631396326838-de37e5f8bcbc"),
  workshop: u("1754146073321-fd3f4aa9ca1a"),

  livingRoom: u("1772797583328-f83bc3f94f80"),
  openPlan: u("1774200981075-a728eaaa3824"),
  lounge: u("1758448755856-01d3add0177b"),
  kitchen: u("1764526624453-db32c24eca55"),
  bedroomPanelled: u("1752407828561-2450ced77979"),
  bedFrame: u("1631048499455-4f9e26f23b9f"),
  wardrobe: u("1643949914877-b20f30792c1e"),
  walkInCloset: u("1672137233327-37b0c1049e77"),
  tvUnit: u("1662454419622-a41092ecd245"),
  sectional: u("1757862351841-c6f7ac0b0201"),

  officeDesk: u("1746021535489-00edc5efb203"),
  conference: u("1431540015161-0bf868a2d407"),
  conferenceGlass: u("1703355685722-2996b01483be"),
  reception: u("1677272272512-d7e7946aafeb"),
  lobby: u("1758448500688-3ababa93fd67"),

  sofa: u("1605774337664-7a846e9cdf17"),
  diningSunlit: u("1773847521422-77ff84e29353"),
  diningDark: u("1722247520100-aa973c9f6d3b"),

  gateGarden: u("1580047750144-2c7790adf461"),
  gateWhite: u("1620860335855-7541c19e1de6"),
  gateHouse: u("1727715252274-983f6e33d254"),
  gateOrnate: u("1755253112764-91226d5386d0"),
  railing: u("1626200319898-ed2f597773e9"),

  panelling: u("1754380629457-b833f6bea68a"),
  pendants: u("1446501356021-84cf6b450d07"),
};

/* ---------- Business details ---------- */
export const site = {
  name: "[Business Name]",
  shortName: "[Business Name]",
  owner: "[Owner Name]",
  city: "Bengaluru",
  serviceArea: "Bengaluru and nearby areas",
  // Shown on the page
  phoneDisplay: "+91 00000 00000",
  // Digits only, with country code — used for tel: and WhatsApp links
  phoneDigits: "910000000000",
  email: "hello@example.com",
  address: "[Street address], Bengaluru, Karnataka [PIN]",
  // Search text used for the "Open in Google Maps" link
  mapsQuery: "[Business Name], Bengaluru",
  hours: "Mon – Sat, 9:30 am – 7:00 pm",
  yearsExperience: "15+",
  projectsCompleted: "500+",
  happyClients: "450+",
  foundedYear: 2010,
  copyrightYear: 2026,
  tagline: "Interiors crafted to last",
  description:
    "End-to-end home and office interiors, custom furniture, and gate and metal works in Bengaluru. Made by our own team, finished with care, priced fairly.",
};

/* ---------- Navigation ---------- */
export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/* ---------- Services ---------- */
export type Service = {
  id: string;
  title: string;
  summary: string;
  includes: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "home",
    title: "Home interiors",
    summary:
      "Complete interiors for apartments and independent houses, planned around how your family actually lives and built to take daily use for years.",
    includes: [
      "Living and dining rooms",
      "Bedrooms",
      "Modular kitchens",
      "Wardrobes",
      "TV units",
      "False ceilings",
      "Pooja units",
    ],
    image: images.openPlan,
    imageAlt: "Open-plan living room and kitchen with warm wood finishes",
  },
  {
    id: "office",
    title: "Office interiors",
    summary:
      "Workspaces that look sharp to clients and work hard for your team, delivered on a schedule that keeps downtime to a minimum.",
    includes: [
      "Workstations",
      "Manager cabins",
      "Reception areas",
      "Conference rooms",
      "Glass and board partitions",
    ],
    image: images.conference,
    imageAlt: "Conference room with an oval wooden table and chairs",
  },
  {
    id: "furniture",
    title: "Custom furniture",
    summary:
      "Furniture made to your measurements in our own workshop, in the wood, fabric and finish you choose.",
    includes: [
      "Beds",
      "Sofas",
      "Dining sets",
      "Office tables",
      "Storage units",
    ],
    image: images.diningDark,
    imageAlt: "Solid wood dining table with black chairs",
  },
  {
    id: "gates",
    title: "Gate and metal works",
    summary:
      "Fabricated gates, grills and railings with clean welds, proper rust treatment and finishes that hold up to Bengaluru monsoons.",
    includes: [
      "Main gates",
      "Window grills",
      "Staircase and balcony railings",
      "MS fabrication",
      "SS fabrication",
    ],
    image: images.gateGarden,
    imageAlt: "Black metal gate set in a garden wall",
  },
  {
    id: "finishes",
    title: "Walls, light and floors",
    summary:
      "The finishing work that pulls a room together, handled by the same team so every detail matches.",
    includes: [
      "Wall panelling",
      "Wallpaper",
      "Painting",
      "Lighting",
      "Flooring",
    ],
    image: images.panelling,
    imageAlt: "Interior with fluted wood wall panelling and plants",
  },
];

/* ---------- Projects ----------
 * category must be one of: "home" | "office" | "furniture" | "gates"
 * featured: true → shown on the home page; all projects show on /gallery
 */
export type ProjectCategory = "home" | "office" | "furniture" | "gates";

export const projectFilters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "home", label: "Home" },
  { value: "office", label: "Office" },
  { value: "furniture", label: "Furniture" },
  { value: "gates", label: "Gates" },
];

export type Project = {
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { title: "3BHK living and dining", location: "Whitefield", category: "home", image: images.livingRoom, alt: "Bright living room with wooden accents", featured: true },
  { title: "Corporate boardroom", location: "Koramangala", category: "office", image: images.conference, alt: "Boardroom with oval wooden table", featured: true },
  { title: "Garden entrance gate", location: "JP Nagar", category: "gates", image: images.gateGarden, alt: "Black metal gate in a garden wall", featured: true },
  { title: "Walnut-finish kitchen", location: "HSR Layout", category: "home", image: images.kitchen, alt: "Kitchen with wooden cabinets and island", featured: true },
  { title: "Solid wood dining set", location: "Jayanagar", category: "furniture", image: images.diningSunlit, alt: "Wooden dining table in a sunlit room", featured: true },
  { title: "Panelled master bedroom", location: "Hebbal", category: "home", image: images.bedroomPanelled, alt: "Bedroom with wood panelled walls", featured: true },
  { title: "Studio reception", location: "Indiranagar", category: "office", image: images.reception, alt: "Wooden reception desk in an office", featured: true },
  { title: "Steel staircase railing", location: "Sarjapur Road", category: "gates", image: images.railing, alt: "Black metal staircase with steel railings", featured: true },
  { title: "Two-seater sofa and table", location: "Malleswaram", category: "furniture", image: images.sofa, alt: "Grey sofa beside a wooden coffee table", featured: true },
  { title: "Villa lounge and ceiling", location: "Devanahalli", category: "home", image: images.lounge, alt: "Lounge with chandeliers and false ceiling" },
  { title: "Wardrobe and dresser wall", location: "Bannerghatta Road", category: "home", image: images.wardrobe, alt: "Room with built-in cupboards and a bench" },
  { title: "Walk-in closet", location: "Yelahanka", category: "home", image: images.walkInCloset, alt: "Walk-in closet with mirror and stool" },
  { title: "TV and display unit", location: "Electronic City", category: "home", image: images.tvUnit, alt: "Room with TV unit and open shelves" },
  { title: "Family room sectional", location: "Banashankari", category: "furniture", image: images.sectional, alt: "Living room with grey sectional sofa" },
  { title: "Platform bed", location: "Rajajinagar", category: "furniture", image: images.bedFrame, alt: "Wooden bed frame in a bedroom" },
  { title: "Founder's workspace", location: "MG Road", category: "office", image: images.officeDesk, alt: "Office desk with dual monitors" },
  { title: "Glass-front meeting room", location: "Bellandur", category: "office", image: images.conferenceGlass, alt: "Conference room with street-facing glass" },
  { title: "Office lobby", location: "Outer Ring Road", category: "office", image: images.lobby, alt: "Lobby with stone floors and greenery" },
  { title: "Twin-leaf main gate", location: "Basavanagudi", category: "gates", image: images.gateWhite, alt: "White and black metal gate" },
  { title: "Independent house gate", location: "Vijayanagar", category: "gates", image: images.gateHouse, alt: "White house with a black metal gate" },
  { title: "Wrought iron detail gate", location: "Frazer Town", category: "gates", image: images.gateOrnate, alt: "Ornate wrought iron gate" },
];

/* ---------- Process ---------- */
export const processSteps = [
  {
    title: "Site visit and measurement",
    text: "We visit your home or office, listen to what you need, and take exact measurements. The first visit is free.",
  },
  {
    title: "Design and quotation",
    text: "You get layouts, material and finish options, and an itemised quote. Nothing starts until you approve it.",
  },
  {
    title: "Manufacturing and execution",
    text: "Our team builds in our workshop and installs on site, with a supervisor checking every stage against the drawings.",
  },
  {
    title: "Handover and support",
    text: "We walk through the finished work with you, fix any snags, and stay on call for service under warranty.",
  },
];

/* ---------- Why choose us ---------- */
export const reasons = [
  {
    title: "Quality materials",
    text: "BWP plywood, branded hardware and laminates, and properly treated steel. You see the material list before we start.",
  },
  {
    title: "Our own skilled team",
    text: "Carpenters, fabricators, painters and electricians on our payroll, not passed between subcontractors.",
  },
  {
    title: "On-time delivery",
    text: "A written timeline with your quote, and regular updates so you always know where the work stands.",
  },
  {
    title: "Transparent pricing",
    text: "Itemised quotes with no hidden extras. If something changes on site, you approve the cost first.",
  },
  {
    title: "Warranty you can use",
    text: "Written warranty on workmanship and hardware, and a team that answers the phone after handover.",
  },
];

/* ---------- Testimonials (sample — replace with real reviews) ---------- */
export const testimonials = [
  {
    quote:
      "They did our full 3BHK, kitchen to wardrobes, and finished a week before our griha pravesha. The finish on the shutters is still perfect two years on.",
    name: "Sample Client A",
    detail: "Home interiors, Whitefield",
  },
  {
    quote:
      "Our office was ready in five weeks with the work done mostly at night, so we never had to shut down. Clean site, clear updates.",
    name: "Sample Client B",
    detail: "Office interiors, Koramangala",
  },
  {
    quote:
      "The main gate and balcony railings are solid and the paint has held up through two monsoons. The quote matched the final bill exactly.",
    name: "Sample Client C",
    detail: "Gate and railings, JP Nagar",
  },
];

/* ---------- About ---------- */
export const about = {
  heading: "A workshop first, a design studio second",
  paragraphs: [
    `${site.owner} started ${site.name} in ${site.foundedYear} as a small carpentry workshop in Bengaluru. Word spread through families and offices who wanted interiors that looked good on the day of handover and still looked good years later.`,
    "Today the company handles everything from a single wardrobe to complete homes, offices, furniture and metal works. The approach has not changed: our own team, honest material choices, and a price that is fair for the quality.",
  ],
  signoff: `${site.owner}, Founder`,
};

/* ---------- Contact form ---------- */
export const enquiryServices = [
  "Home interiors",
  "Office interiors",
  "Custom furniture",
  "Gate and metal works",
  "Wall panelling, painting or flooring",
  "Something else",
];

/* ---------- Helpers ---------- */
export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.phoneDigits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
