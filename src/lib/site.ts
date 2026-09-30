export const site = {
  name: "OneLink Delivery Service",
  location: "Dubai, UAE",
  phoneDisplay: "0562692878",
  phoneTel: "+971562692878",
  whatsapp: "https://wa.me/971562692878",
  email: "Onlinkdeliveryservices@gmail.com",
  emailSecondary: "info@onlinkservices.delivery",
  tagline: "Fast • Safe • Reliable",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
] as const;

export const deliveryTypes = [
  "Bike Delivery",
  "Car Delivery",
  "Business Delivery",
  "Same-Day Delivery",
] as const;

export type DeliveryType = (typeof deliveryTypes)[number];

export const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
