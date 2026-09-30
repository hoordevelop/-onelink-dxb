import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-[#020B14] px-6 text-center">
      <div>
        <p className="text-xs tracking-[0.24em] text-[#FFD100] uppercase">OneLink Delivery Service</p>
        <h1 className="font-display mt-4 text-4xl font-semibold text-white">This page is not on the route.</h1>
        <p className="mt-3 text-[#C5D7E6]">The link may be out of date. Head back to the Dubai delivery page.</p>
        <Link href="/" className={cn(buttonVariants({ variant: "glow", size: "xl" }), "mt-8")}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
