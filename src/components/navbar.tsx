"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/site";
import { cn } from "cn";

type NavbarProps = {
  logoSrc: string | null;
};

export function Navbar({ logoSrc }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const focusQuote = () => {
    window.setTimeout(() => {
      document.getElementById("full-name")?.focus();
    }, 450);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-[#007BFF]/25 bg-[#020B14]/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#home" className="relative z-50 shrink-0 rounded-sm" onClick={() => setOpen(false)}>
          <Logo src={logoSrc} />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={cn(
                "text-sm tracking-wide text-[#D5E4F0] transition-colors hover:text-white",
                active === link.href && "text-white",
              )}
            >
              <span
                className={cn(
                  "border-b pb-1",
                  active === link.href ? "border-[#008CFF]" : "border-transparent",
                )}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <a
          href="#quote"
          onClick={focusQuote}
          className={cn(buttonVariants({ variant: "glow", size: "default" }), "hidden h-10 px-4 lg:inline-flex")}
        >
          Get a Quote
        </a>

        <button
          type="button"
          className="relative z-50 size-11 rounded-md border border-[#008CFF]/30 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={cn(
              "absolute left-3 h-px w-5 bg-white transition duration-300",
              open ? "top-5 rotate-45" : "top-3.5",
            )}
          />
          <span
            className={cn(
              "absolute top-5 left-3 h-px w-5 bg-white transition duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute left-3 h-px w-5 bg-white transition duration-300",
              open ? "top-5 -rotate-45" : "top-[26px]",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#007BFF]/15 bg-[#020B14]/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.04 * index }}
                  className="rounded-md px-2 py-3 text-lg text-white hover:bg-[#007BFF]/10"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#quote"
                onClick={() => {
                  setOpen(false);
                  focusQuote();
                }}
                className={cn(buttonVariants({ variant: "glow", size: "xl" }), "mt-3 w-full")}
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
