export const site = {
  name: "OneLink Delivery Service",
  legalName: "ONELINK DELIVERY L.L.C-FZ",
  url: "https://onelinkdeliveryservices.com",
  location: "Dubai, UAE",
  phoneDisplay: "+971 56 269 2878",
  phoneTel: "+971562692878",
  whatsapp: "https://wa.me/971562692878",
  email: "info@onelinkdeliveryservices.com",
  tagline: "The gold standard, door to door.",
  hours: "Monday to Saturday, 9:00 AM – 6:00 PM",
  address: [
    "Meydan Grandstand, 6th floor",
    "Meydan Road, Nad Al Sheba, Dubai",
  ],
} as const;

export type NavItem = { href: string; label: string };

export type NavMenu = {
  id: string;
  label: string;
  items: NavItem[];
};

export const menus: NavMenu[] = [
  {
    id: "services",
    label: "Services",
    items: [
      { href: "/services/dash", label: "OneLink Dash" },
      { href: "/services/haul", label: "OneLink Haul" },
      { href: "/services/bizz", label: "OneLink Bizz" },
      { href: "/services/moveo", label: "OneLink Moveo" },
      { href: "/services/plus", label: "OneLink Plus" },
      { href: "/services/domestic", label: "Domestic" },
      { href: "/services/international", label: "International" },
    ],
  },
  {
    id: "industries",
    label: "Industry Solutions",
    items: [
      { href: "/industries/businesses", label: "For Businesses" },
      { href: "/industries/customers", label: "For Customers" },
      { href: "/industries/online-brands", label: "Online brands" },
      { href: "/industries/retail", label: "Retail" },
      { href: "/industries/grocery", label: "Grocery" },
    ],
  },
  {
    id: "discover",
    label: "Discover",
    items: [
      { href: "/discover/technology", label: "Our Technology" },
      { href: "/discover/press", label: "Press and Mentions" },
      { href: "/discover/responsibility", label: "Corporate Social Responsibility" },
      { href: "/discover/investors", label: "Investor Relations" },
    ],
  },
  {
    id: "opportunities",
    label: "Opportunities",
    items: [
      { href: "/opportunities/careers", label: "Careers" },
      { href: "/opportunities/become-a-rider", label: "Become a Rider" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    items: [
      { href: "/resources/knowledge-hub", label: "Knowledge Hub" },
      { href: "/resources/blogs", label: "Blogs" },
      { href: "/resources/faqs", label: "FAQs" },
    ],
  },
];

export const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
] as const;

export const bookingServices = [
  "Express - 60-120 min in Dubai",
  "Same day",
  "Next day",
  "Weekend",
] as const;

export type BookingService = (typeof bookingServices)[number];
