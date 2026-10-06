import Link from "next/link";
import { menus, site } from "@/lib/site";

export function SiteFooter({ logoSrc }: { logoSrc: string | null }) {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="grid size-11 place-items-center overflow-hidden rounded-full bg-black">
              {logoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logoSrc}
                  alt=""
                  className="h-[150%] w-[150%] max-w-none object-cover object-[center_16%]"
                />
              ) : (
                <span className="text-[11px] font-semibold text-[#E7D3A1]">1S</span>
              )}
            </span>
            <span className="leading-none">
              <span className="block text-sm font-semibold tracking-[0.16em] text-[#1A1D23]">ONELINK</span>
              <span className="mt-1 block text-[9px] tracking-[0.2em] text-[#8B909A]">DELIVERY</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm font-medium text-[#1A1D23]">{site.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[#5C6570]">
            {site.legalName}. Bike and car delivery from Meydan, Dubai.
          </p>
          <a href={`tel:${site.phoneTel}`} className="mt-4 block text-sm font-semibold text-[#1A1D23]">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-[#2F6FED]">
            {site.email}
          </a>
          <p className="mt-4 text-sm leading-6 text-[#5C6570]">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-3 text-sm text-[#5C6570]">{site.hours}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {menus.map((menu) => (
            <div key={menu.id}>
              <p className="text-sm font-semibold text-[#1A1D23]">{menu.label}</p>
              <ul className="mt-3 space-y-2">
                {menu.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[#5C6570] hover:text-[#2F6FED]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-4 py-5 text-xs text-[#8B909A] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
