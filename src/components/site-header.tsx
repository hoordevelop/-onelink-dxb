"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { menus } from "@/lib/site";

type SiteHeaderProps = {
  logoSrc: string | null;
};

const solid =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#2F6FED] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1E5AD4]";
const outline =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#2F6FED] bg-white px-4 py-2 text-sm font-semibold text-[#2F6FED] transition hover:bg-[#F3F7FF]";

export function SiteHeader({ logoSrc }: SiteHeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#C6A15B]/30 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={closeAll}>
          <LogoMark src={logoSrc} />
          <span className="leading-none">
            <span className="block text-[15px] font-semibold tracking-[0.14em] text-[#1A1D23]">
              ONELINK
            </span>
            <span className="mt-1 block text-[9px] font-medium tracking-[0.22em] text-[#8B909A]">
              DELIVERY
            </span>
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Primary">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.id)}
              onMouseLeave={() => setOpenMenu((current) => (current === menu.id ? null : current))}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm text-[#2A303A] hover:bg-[#F4F6F8]"
                aria-expanded={openMenu === menu.id}
                onClick={() => setOpenMenu((current) => (current === menu.id ? null : menu.id))}
              >
                {menu.label}
                <ChevronDown className="size-3.5 text-[#6B7280]" aria-hidden />
              </button>
              {openMenu === menu.id ? (
                <div className="absolute top-full left-0 z-20 w-64 pt-2">
                  <ul className="rounded-2xl border border-black/5 bg-white p-2 shadow-[0_16px_40px_rgba(16,24,40,0.12)]">
                    {menu.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-3 py-2 text-sm text-[#2A303A] hover:bg-[#F4F7FB]"
                          onClick={closeAll}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
          <Link href="/contact" className={outline}>
            Get in Touch
          </Link>
          <Link href="/track" className={solid}>
            Track Now
          </Link>
          <Link href="/book" className={solid}>
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto grid size-10 place-items-center rounded-full border border-black/10 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div className="gold-line" aria-hidden />

      {mobileOpen ? (
        <div className="max-h-[calc(100svh-72px)] overflow-auto border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          {menus.map((menu) => (
            <div key={menu.id} className="border-b border-black/5">
              <button
                type="button"
                className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
                aria-expanded={mobileSection === menu.id}
                onClick={() =>
                  setMobileSection((current) => (current === menu.id ? null : menu.id))
                }
              >
                {menu.label}
                <ChevronDown className="size-4" aria-hidden />
              </button>
              {mobileSection === menu.id ? (
                <ul className="pb-3">
                  {menu.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-2 py-2 text-sm text-[#3A4150]"
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <div className="mt-4 grid gap-2">
            <Link href="/contact" className={outline} onClick={closeAll}>
              Get in Touch
            </Link>
            <Link href="/track" className={solid} onClick={closeAll}>
              Track Now
            </Link>
            <Link href="/book" className={solid} onClick={closeAll}>
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LogoMark({ src }: { src: string | null }) {
  if (!src) {
    return (
      <span className="grid size-11 place-items-center rounded-full bg-black text-[11px] font-semibold text-[#E7D3A1]">
        1S
      </span>
    );
  }

  return (
    <span className="grid size-11 place-items-center overflow-hidden rounded-full bg-black">
      {/* Official lockup, cropped to the monogram the header uses. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-[150%] w-[150%] max-w-none object-cover object-[center_16%]"
      />
    </span>
  );
}
