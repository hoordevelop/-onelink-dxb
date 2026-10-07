import Link from "next/link";
import type { BrandImages } from "@/lib/assets";
import { FaqList } from "@/components/faq-list";
import { site } from "@/lib/site";

const solid =
  "inline-flex items-center justify-center rounded-full bg-[#2F6FED] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E5AD4]";
const ghost =
  "inline-flex items-center justify-center rounded-full border border-[#D5D8DE] bg-white px-5 py-2.5 text-sm font-semibold text-[#2A303A] transition hover:bg-[#F7F8FA]";

const clients = [
  {
    name: "Porter",
    quote: "Stopped calling around for a rider.",
  },
  {
    name: "Grandiose",
    quote: "The same lane is there the next morning.",
  },
  {
    name: "Come Come",
    quote: "The order still reaches the door on time.",
  },
];

const featured = [
  {
    name: "Keeta",
    quote: "The kitchen hands it over and the customer already has a tracking link.",
    banner: "keeta" as const,
  },
  {
    name: "Careem",
    quote: "When the parcel needs a car, it is handled with care. The drop stays careful.",
    banner: "careem" as const,
  },
  {
    name: "noon",
    quote: "Marketplace orders leave the same day, and the proof of delivery stays on the shipment.",
    banner: "noon" as const,
  },
];

const services = [
  {
    title: "OneLink Moveo",
    body: "Careful door-to-door moves for the boxes a home or office cannot send on a bike.",
    href: "/services/moveo",
    image: "bike" as const,
  },
  {
    title: "OneLink Plus",
    body: "Executive cars for the parcels that need a closed cabin.",
    href: "/services/plus",
    image: "car" as const,
  },
  {
    title: "OneLink Dash",
    body: "The rider bike for fast city hops. Fast, safe, reliable.",
    href: "/services/dash",
    image: "bike" as const,
  },
  {
    title: "OneLink Haul",
    body: "Road freight for the bigger loads. Air and ocean lanes when the shipment has to leave the city.",
    href: "/services/haul",
    image: "car" as const,
  },
  {
    title: "OneLink Bizz",
    body: "Supply chain, warehousing, and daily pickups so your team can stay on the work that grows the shop.",
    href: "/services/bizz",
    image: "car" as const,
  },
  {
    title: "OneLink International",
    body: "Cross-border express with tracking and careful cargo handling, booked through the same desk.",
    href: "/services/international",
    image: "bike" as const,
  },
];

const tools = [
  "Flexible delivery scheduling",
  "Real-time fleet tracking",
  "Electronic proof of delivery",
  "SMS, email, and WhatsApp notifications",
  "Cash on delivery and doorstep payments",
  "Zones and areas so high volume is assigned to the right rider",
];

const joy = [
  "homes",
  "restaurants",
  "retail counters",
  "grocery aisles",
  "online brands",
  "offices",
  "pharmacies",
  "studios",
];

export function HomePageView({ images }: { images: BrandImages }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fbf8f2]">
        <div className="gold-wash pointer-events-none absolute inset-0" />
        <span className="particle left-[8%] top-16 size-1.5" style={{ animationDelay: "0s" }} />
        <span className="particle left-[22%] top-28 size-1" style={{ animationDelay: "1.4s" }} />
        <span className="particle right-[18%] top-20 size-2" style={{ animationDelay: "0.6s" }} />
        <span className="particle right-[8%] bottom-24 hidden size-1.5 lg:block" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="rise inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-[#8A6428]">
              <span className="size-1.5 rounded-full bg-[#C6A15B] shadow-[0_0_10px_#C6A15B]" />
              {site.legalName}
            </p>
            <h1 className="rise rise-2 mt-4 max-w-xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-[#1A1D23] sm:text-6xl">
              The <span className="gold-shimmer">gold</span> standard, door to door.
            </h1>
            <div className="gold-rule rise rise-2 mt-5" />
            <p className="rise rise-3 mt-5 max-w-md text-base leading-7 text-[#3A4150]">
              {site.legalName}. Bikes and cars from Meydan, booked and tracked to the door.
            </p>
            <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
              <Link href="/book" className={solid}>
                Book your shipment
              </Link>
              <Link href="/track" className={ghost}>
                Track Now
              </Link>
            </div>
            <ul className="rise rise-4 mt-8 flex flex-wrap gap-2">
              {["Fast", "Safe", "Reliable"].map((item) => (
                <li key={item} className="gold-chip rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rise rise-3 relative pb-10 sm:pb-8">
            <div className="gold-frame float-card">
              {images.car ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={images.car}
                  alt="Black and gold OneLink delivery cars in Dubai"
                  className="aspect-[16/11] w-full rounded-[1.35rem] object-cover"
                />
              ) : (
                <div className="aspect-[16/11] rounded-[1.35rem] bg-[#1A1D23]" />
              )}
              <p className="absolute top-4 right-4 rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#F3E2B3]">
                DUBAI FLEET
              </p>
            </div>
            {images.bike ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={images.bike}
                alt=""
                className="float-badge absolute bottom-0 left-4 hidden w-40 rounded-2xl border-2 border-[#F3E2B3] object-cover shadow-xl sm:block sm:w-48"
              />
            ) : null}
          </div>
        </div>
        <div className="relative overflow-hidden border-y border-[#C6A15B]/30 bg-white/70 py-3">
          <div className="marquee-track flex w-max items-center gap-8 px-4 text-xs font-semibold tracking-[0.28em] text-[#8A6428]">
            {Array.from({ length: 2 }).map((_, copy) => (
              <span key={copy} className="flex items-center gap-8">
                {["FAST", "SAFE", "RELIABLE", "DOOR TO DOOR", "MEYDAN", "DUBAI"].map((word) => (
                  <span key={`${copy}-${word}`} className="flex items-center gap-8">
                    {word}
                    <span className="text-[#C6A15B]" aria-hidden>
                      ◆
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Photo
            src={images.bike}
            alt="Black and gold OneLink delivery motorcycle with a cargo box in Dubai"
            framed
          />
          <div>
            <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-[#1A1D23] sm:text-4xl">
              Delivering smiles with{" "}
              <span className="text-[#C6A15B]">360° logistics</span> solutions
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#5C6570]">
              Meet OneLink, your partner for seamless logistics. A 360° company that goes beyond
              the package to the experience: efficient, careful, and built for the way businesses
              ship today.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5C6570]">
              At OneLink, we don&apos;t just move goods. We move businesses forward — one delivery
              at a time.
            </p>
            <Link href="/contact" className={`${solid} mt-6`}>
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6">
          <p className="text-center text-[11px] font-semibold tracking-[0.28em] text-[#8B909A]">
            CLIENTS
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-semibold tracking-tight text-[#1A1D23] sm:text-4xl">
            Five stars, from the desk to the door.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {clients.map((client) => (
              <article key={client.name} className="glow-card rounded-2xl border border-[#C6A15B]/25 bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.05)] transition duration-300 hover:-translate-y-1">
                <p className="text-sm leading-6 text-[#3A4150]">&ldquo;{client.quote}&rdquo;</p>
                <p className="mt-8 text-sm font-medium text-[#1A1D23]">{client.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {featured.map((client) => (
              <article
                key={client.name}
                className="glow-card overflow-hidden rounded-2xl border border-[#C6A15B]/20 bg-white shadow-[0_10px_30px_rgba(16,24,40,0.05)] transition duration-300 hover:-translate-y-1"
              >
                <BrandBanner kind={client.banner} />
                <div className="p-6">
                  <p className="text-xs tracking-[0.3em] text-[#C6A15B]" aria-label="5 stars">
                    ★★★★★
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#3A4150]">&ldquo;{client.quote}&rdquo;</p>
                  <p className="mt-6 text-sm font-medium text-[#1A1D23]">{client.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1A1D23] sm:text-4xl">
              Fast mile <span className="text-[#C6A15B]">logistics</span>
            </h2>
            <Link href="/services/dash" className={solid}>
              Discover how we deliver joy
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="glow-card overflow-hidden rounded-2xl border border-[#C6A15B]/25 bg-white shadow-[0_16px_40px_-28px_rgba(138,100,40,0.8)] transition duration-300 hover:-translate-y-1">
                <Photo
                  src={service.image === "bike" ? images.bike : images.car}
                  alt=""
                  className="aspect-[16/10] rounded-none"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1A1D23]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5C6570]">{service.body}</p>
                  <Link href={service.href} className="mt-4 inline-block text-sm font-semibold text-[#2F6FED]">
                    Know more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B4E86] text-white">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <p className="text-lg leading-8 text-white/90">
            The tools around the parcel: tracking, alerts, cash at the door, and riders placed
            where the volume actually is.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-xl bg-white/10 px-4 py-3 text-sm leading-6 text-white/95 ring-1 ring-white/10"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight text-[#1A1D23] sm:text-5xl">
              Order, pick, drop,
              <span className="gold-shimmer mt-1 block">repeat</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#5C6570]">
              We spread joy from door to door. Schedule a same day, next-day, or weekend drop on
              OneLink and follow the status without calling around.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book" className={solid}>
                Schedule a pickup
              </Link>
              <Link href="/industries/customers" className={ghost}>
                For customers
              </Link>
            </div>
          </div>
          <Photo
            src={images.bike}
            alt="OneLink rider bike ready for a city hop"
            framed
          />
        </div>
        <div className="border-y border-black/5 py-6">
          <p className="px-4 text-2xl font-semibold text-[#1A1D23] sm:px-6 sm:text-3xl">
            We deliver joy to...
          </p>
          <div className="mt-4 overflow-hidden">
            <div className="marquee-track flex w-max gap-3 px-4">
              {[...joy, ...joy].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="gold-chip rounded-full px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1A1D23] sm:text-4xl">
            Black, gold, and on the road.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl bg-black ring-2 ring-[#C6A15B]">
              <Photo
                src={images.car}
                alt="Black and gold OneLink delivery cars in Dubai"
                className="aspect-[16/10] rounded-none"
              />
              <figcaption className="bg-[#10233A] px-4 py-3 text-sm text-white">
                Executive cars for the parcels that need a closed cabin.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-black ring-2 ring-[#C6A15B]">
              <Photo
                src={images.bike}
                alt="Black and gold OneLink delivery motorcycle with a cargo box"
                className="aspect-[16/10] rounded-none"
              />
              <figcaption className="bg-[#10233A] px-4 py-3 text-sm text-white">
                The rider bike for fast city hops. Fast, safe, reliable.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">
          <div className="grid items-center gap-6 overflow-hidden rounded-3xl bg-[#1B8CFF] px-6 py-10 text-white lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div>
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Join our fleet to spread smiles across miles.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/90">
                Incentives, a clear desk, and lanes across Dubai and the emirates.
              </p>
              <Link
                href="/opportunities/become-a-rider"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1D23]"
              >
                Become a rider
              </Link>
            </div>
            <Photo
              src={images.bike}
              alt="OneLink cargo motorcycle"
              className="bg-white"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6">
          <h2 className="mx-auto max-w-xl text-center font-display text-3xl font-semibold tracking-tight text-[#1A1D23] sm:text-4xl">
            Curious to know more? We&apos;ve got all the answers.
          </h2>
          <FaqList />
        </div>
      </section>
    </>
  );
}

function Photo({
  src,
  alt,
  className = "",
  framed = false,
}: {
  src: string | null;
  alt: string;
  className?: string;
  framed?: boolean;
}) {
  if (!src) {
    return <div className={`aspect-[16/10] rounded-2xl bg-[#E7EBF0] ${className}`} />;
  }

  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`aspect-[16/10] w-full object-cover ${framed ? "rounded-[1.35rem]" : "rounded-2xl"} ${className}`}
    />
  );

  if (!framed) return image;

  return <div className="gold-frame">{image}</div>;
}

function BrandBanner({ kind }: { kind: "keeta" | "careem" | "noon" }) {
  if (kind === "keeta") {
    return (
      <div className="relative grid h-28 place-items-center overflow-hidden bg-[#FFE14A]">
        <div className="absolute inset-x-0 bottom-0 h-12 rounded-t-[50%] bg-[#5DDC97]" />
        <span className="relative text-4xl font-black tracking-tight text-[#1A1D23]">keeta</span>
      </div>
    );
  }

  if (kind === "careem") {
    return (
      <div className="grid h-28 place-items-center bg-[#7CFF6A]">
        <span className="text-4xl font-black tracking-tight text-[#12321A]">
          <span aria-hidden className="mr-1">
            ⌣
          </span>
          areem
        </span>
      </div>
    );
  }

  return (
    <div className="grid h-28 place-items-center bg-[#FFE14A]">
      <span className="text-4xl font-black tracking-tight text-[#1A1D23]">
        <span className="mr-1 inline-grid size-9 place-items-center rounded-full border-4 border-[#1A1D23] align-middle text-lg">
          C
        </span>
        noon
      </span>
    </div>
  );
}
