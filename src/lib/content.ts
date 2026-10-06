export type PageDoc = {
  group: "services" | "industries" | "discover" | "opportunities" | "resources";
  groupLabel: string;
  slug: string;
  title: string;
  lede: string;
  paragraphs: string[];
  image?: "bike" | "car";
};

export const pages: PageDoc[] = [
  {
    group: "services",
    groupLabel: "Services",
    slug: "dash",
    title: "OneLink Dash",
    lede: "The rider bike for fast city hops. Express inside Dubai, booked from the same desk.",
    image: "bike",
    paragraphs: [
      "Dash is the same-city bike lane. A rider collects the parcel and takes it door to door, usually inside a 60–120 minute window when the booking is confirmed during desk hours.",
      "It suits documents, small boxes, and anything that rides safely on a bike. The desk confirms the fare and the slot before anyone is sent, and you keep the OL number for the status.",
    ],
  },
  {
    group: "services",
    groupLabel: "Services",
    slug: "haul",
    title: "OneLink Haul",
    lede: "Road freight for the bigger loads. Air and ocean lanes when the shipment has to leave the city.",
    image: "car",
    paragraphs: [
      "Haul is for freight that will not fit the bike lane: larger boxes, multi-piece shipments, and loads that need a closed vehicle or a scheduled road movement.",
      "When the shipment has to leave Dubai, the desk books the onward air or ocean lane and keeps the tracking on the same OL number. The fare is confirmed before pickup.",
    ],
  },
  {
    group: "services",
    groupLabel: "Services",
    slug: "bizz",
    title: "OneLink Bizz",
    lede: "Supply chain, warehousing, and daily pickups so your team can stay on the work that grows the shop.",
    image: "car",
    paragraphs: [
      "Bizz is the business desk: repeating pickups, a named lane, and a person who already knows the shop’s hours.",
      "Warehousing and scheduled routes are arranged with the desk. You are not passed between call centres. One number, one OL trail, one email.",
    ],
  },
  {
    group: "services",
    groupLabel: "Services",
    slug: "moveo",
    title: "OneLink Moveo",
    lede: "Careful door-to-door moves for the boxes a home or office cannot send on a bike.",
    image: "bike",
    paragraphs: [
      "Moveo is the careful lane: fragile pieces, a few boxes from a home, or an office that is shifting desks rather than running a daily route.",
      "Tell the desk what is inside and who should receive it. A car is used when the load will not ride safely on a bike.",
    ],
  },
  {
    group: "services",
    groupLabel: "Services",
    slug: "plus",
    title: "OneLink Plus",
    lede: "Executive cars for the parcels that need a closed cabin.",
    image: "car",
    paragraphs: [
      "Plus is the car lane. Garments, larger cartons, and anything that should stay in a closed cabin ride with the black-and-gold fleet.",
      "The desk confirms whether the job is a bike or a car before dispatch. You do not have to guess the vehicle.",
    ],
  },
  {
    group: "services",
    groupLabel: "Services",
    slug: "domestic",
    title: "Domestic",
    lede: "Same-day, next-day, and weekend drops across Dubai and the emirates.",
    image: "car",
    paragraphs: [
      "Domestic covers Dubai and the other emirates from the Meydan desk. Express is confirmed inside Dubai. Same-day bookings are taken before 11:00 AM. Next-day bookings across the emirates close at 2:00 PM.",
      "Weekend drops are booked the same way. The desk confirms the fare on the phone before a rider or car is sent.",
    ],
  },
  {
    group: "services",
    groupLabel: "Services",
    slug: "international",
    title: "OneLink International",
    lede: "Cross-border express with tracking and careful cargo handling, booked through the same desk.",
    image: "bike",
    paragraphs: [
      "International shipments start at the same desk as a city hop. The team arranges the export lane, the documents the carrier needs, and a tracking trail you can follow.",
      "Call or book with the destination and the contents. The desk confirms what can move, and the fare, before collection.",
    ],
  },
  {
    group: "industries",
    groupLabel: "Industry Solutions",
    slug: "businesses",
    title: "For Businesses",
    lede: "A named lane for shops and offices that ship every day, not a one-off favour.",
    paragraphs: [
      "Businesses get a repeating pickup, a desk that already knows the counter, and proof of delivery on the shipment.",
      "Bike or car is chosen from the size of the load. Cash on delivery can be collected at the door when you ask for it in the notes.",
    ],
  },
  {
    group: "industries",
    groupLabel: "Industry Solutions",
    slug: "customers",
    title: "For Customers",
    lede: "Send a parcel across Dubai without calling around for a rider.",
    paragraphs: [
      "Customers book two doors, a bike or a car, and a service. The desk confirms the fare before anyone is dispatched, and you keep the OL number.",
      "Track the status on WhatsApp or by phone. The desk is open Monday to Saturday, 9:00 AM to 6:00 PM.",
    ],
  },
  {
    group: "industries",
    groupLabel: "Industry Solutions",
    slug: "online-brands",
    title: "Online brands",
    lede: "Marketplace and web orders leave the same day, with proof of delivery on the shipment.",
    paragraphs: [
      "Online brands use Dash for the small parcels and Plus when the order needs a car. Pickup windows sit around your packing time.",
      "Share the order reference in the notes. The rider collects from the shelf you name and the receiver gets a status without a second call.",
    ],
  },
  {
    group: "industries",
    groupLabel: "Industry Solutions",
    slug: "retail",
    title: "Retail",
    lede: "Counter to door, including the hours your shop actually closes.",
    paragraphs: [
      "Retail lanes are built around the counter: a pickup after the floor is packed, a car when the bags will not fit a bike, and a receiver name in the notes.",
      "The same desk handles the next morning’s lane, so you are not re-explaining the shop every day.",
    ],
  },
  {
    group: "industries",
    groupLabel: "Industry Solutions",
    slug: "grocery",
    title: "Grocery",
    lede: "Short hops from the store to the door, with a rider placed where the volume actually is.",
    paragraphs: [
      "Grocery drops are time-sensitive. Dash covers the fast city hop. A car is used when the order is too heavy or too fragile for a bike.",
      "Tell the desk about chilled or fragile items in the notes so the vehicle is chosen before pickup.",
    ],
  },
  {
    group: "discover",
    groupLabel: "Discover",
    slug: "technology",
    title: "Our Technology",
    lede: "Tracking, alerts, and a desk that can see the lane. No separate app is required to book.",
    paragraphs: [
      "The tools around the parcel are tracking, alerts, cash at the door, and riders placed where the volume actually is.",
      "You get an OL number. Status updates go by phone, SMS, email, or WhatsApp. Electronic proof of delivery stays on the shipment. There is no public tracking database on this website yet — the desk confirms the live status.",
    ],
  },
  {
    group: "discover",
    groupLabel: "Discover",
    slug: "press",
    title: "Press and Mentions",
    lede: "Press enquiries go to the same desk as a shipment.",
    paragraphs: [
      "OneLink does not publish third-party press clippings on this page. For a mention, an interview, or a logo file, write to info@onelinkdeliveryservices.com.",
      "The public facts are the ones on this site: bike and car delivery from Meydan, Dubai, and the phone number +971 56 269 2878.",
    ],
  },
  {
    group: "discover",
    groupLabel: "Discover",
    slug: "responsibility",
    title: "Corporate Social Responsibility",
    lede: "Careful handling, a clear desk, and lanes that do not leave a receiver guessing.",
    paragraphs: [
      "Responsibility here is operational: parcels described honestly, vehicles matched to the load, and a person on the phone during desk hours.",
      "Riders are briefed on fragile and cash-on-delivery jobs before they leave. If a drop cannot be completed, the desk calls. It does not disappear into a queue.",
    ],
  },
  {
    group: "discover",
    groupLabel: "Discover",
    slug: "investors",
    title: "Investor Relations",
    lede: "Ownership and investment questions are answered by the desk, not by a public filing on this site.",
    paragraphs: [
      "OneLink does not publish financial statements or a share price here. Investor enquiries can be sent to info@onelinkdeliveryservices.com.",
      "The operating company named on the site is ONELINK DELIVERY L.L.C-FZ, Meydan, Dubai.",
    ],
  },
  {
    group: "opportunities",
    groupLabel: "Opportunities",
    slug: "careers",
    title: "Careers",
    lede: "Desk, dispatch, and rider roles across Dubai and the emirates.",
    paragraphs: [
      "Open roles are confirmed by phone. Send your name, the role you want, and a phone number to info@onelinkdeliveryservices.com, or use the contact page.",
      "The desk replies during Monday to Saturday, 9:00 AM to 6:00 PM. This page does not list invented vacancies.",
    ],
  },
  {
    group: "opportunities",
    groupLabel: "Opportunities",
    slug: "become-a-rider",
    title: "Become a Rider",
    lede: "Join the fleet. Incentives, a clear desk, and lanes across Dubai and the emirates.",
    image: "bike",
    paragraphs: [
      "Riders work the city hops and the lanes the desk assigns. You get a briefing before the first drop, not a silent notification.",
      "To apply, send your name, phone, and the emirate you ride in to info@onelinkdeliveryservices.com, or call +971 56 269 2878. A licence and a bike you can ride in Dubai are required. The desk confirms the next step.",
    ],
  },
  {
    group: "resources",
    groupLabel: "Resources",
    slug: "knowledge-hub",
    title: "Knowledge Hub",
    lede: "How a booking actually moves, from the two doors to the OL number.",
    paragraphs: [
      "Book a pickup with the building and area for both doors, the emirate, the service, and whether it is a bike or a car. Add weight and anything fragile or cash to collect.",
      "The fare shown on the booking page is indicative. The desk confirms the final amount on +971 56 269 2878 before pickup. Express is confirmed inside Dubai. Same-day bookings are taken before 11:00 AM. Next-day bookings across the emirates close at 2:00 PM.",
    ],
  },
  {
    group: "resources",
    groupLabel: "Resources",
    slug: "blogs",
    title: "Blogs",
    lede: "Notes from the desk will be published here when they are ready.",
    paragraphs: [
      "There are no articles on this page yet. Service details, booking rules, and the FAQ are already on the site.",
      "If you want a written answer for a lane you run every week, email info@onelinkdeliveryservices.com.",
    ],
  },
  {
    group: "resources",
    groupLabel: "Resources",
    slug: "faqs",
    title: "FAQs",
    lede: "The short answers the desk gives most often.",
    paragraphs: [
      "How fast is OneLink Dash? Express inside Dubai is confirmed in about 60–120 minutes when the booking is taken during desk hours. The desk confirms the slot before a rider is sent.",
      "What is the difference between Dash, Haul, Bizz, Moveo, and Plus? Dash is the fast bike hop. Plus is the closed-cabin car. Haul is the bigger road, air, and ocean load. Bizz is the repeating business lane. Moveo is the careful home or office move.",
      "Does the website charge a card? No. Requesting a pickup opens your email app with the details. The desk confirms the fare by phone before anyone is dispatched.",
    ],
  },
];

export function findPage(group: string, slug: string) {
  return pages.find((page) => page.group === group && page.slug === slug) ?? null;
}
