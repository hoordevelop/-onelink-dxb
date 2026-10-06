import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[60svh] place-items-center bg-white px-6 py-20 text-center">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#C6A15B]">ONELINK DELIVERY</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-[#1A1D23]">
          This page is not on the route.
        </h1>
        <p className="mt-3 text-[#3A4150]">The link may be out of date. Head back to the desk.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#2F6FED] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
