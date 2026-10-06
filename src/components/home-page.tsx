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
      <section className="relative overflow-hidden bg-[#f6f7f9]">
        {images.car ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images.car}
            alt=""
            className="pointer-events-none absolute top-0 right-0 hidden h-full w-[52%] object-cover opacity-25 lg:block"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f6f7f9] from-35% via-[#f6f7f9]/95 via-60% to-transparent" />
        <div className="relative mx-auto max-w-[1180px] px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8B909A]">
            {site.legalName}
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-[#1A1D23] sm:text-6xl">
            The gold standard, door to door.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#3A4150]">
            {site.legalName}. Bikes and cars from Meydan, booked and tracked to the door.
          </p>
          <Link href="/book" className={`${solid} mt-8`}>
            Book your shipment
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Photo
            src={images.bike}
            alt="Black and gold OneLink delivery motorcycle with a cargo box in Dubai"
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
              <article key={client.name} className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.05)]">
                <p className="text-sm leading-6 text-[#3A4150]">&ldquo;{client.quote}&rdquo;</p>
                <p className="mt-8 text-sm font-medium text-[#1A1D23]">{client.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {featured.map((client) => (
              <article
                key={client.name}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(16,24,40,0.05)]"
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
              <article key={service.title} className="overflow-hidden rounded-2xl bg-[#f7f8fa]">
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
              <span className="mt-1 block">repeat</span>
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
                  className="rounded-full bg-[#f4f6f8] px-4 py-2 text-sm text-[#3A4150]"
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
            <figure className="overflow-hidden rounded-2xl bg-black">
              <Photo
                src={images.car}
                alt="Black and gold OneLink delivery cars in Dubai"
                className="aspect-[16/10] rounded-none"
              />
              <figcaption className="bg-[#10233A] px-4 py-3 text-sm text-white">
                Executive cars for the parcels that need a closed cabin.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-black">
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
}: {
  src: string | null;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return <div className={`aspect-[16/10] rounded-2xl bg-[#E7EBF0] ${className}`} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`aspect-[16/10] w-full rounded-2xl object-cover ${className}`}
    />
  );
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
