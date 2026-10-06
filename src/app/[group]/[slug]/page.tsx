import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/faq-list";
import { getBrandImages } from "@/lib/assets";
import { findPage, pages } from "@/lib/content";

type Params = { group: string; slug: string };

export function generateStaticParams() {
  return pages.map((page) => ({ group: page.group, slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { group, slug } = await params;
  const page = findPage(group, slug);
  if (!page) return {};
  return {
    title: `${page.title} | OneLink Delivery`,
    description: page.lede,
    alternates: { canonical: `/${page.group}/${page.slug}` },
  };
}

export default async function ContentPage({ params }: { params: Promise<Params> }) {
  const { group, slug } = await params;
  const page = findPage(group, slug);
  if (!page) notFound();

  const images = getBrandImages();
  const photo = page.image === "bike" ? images.bike : page.image === "car" ? images.car : null;

  return (
    <main id="main" className="bg-white">
      <article className="mx-auto max-w-[860px] px-4 py-16 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#C6A15B]">{page.groupLabel}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#1A1D23] sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-[#3A4150]">{page.lede}</p>
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
          />
        ) : null}
        <div className="mt-8 space-y-4">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-[#3A4150]">
              {paragraph}
            </p>
          ))}
        </div>
        {page.slug === "faqs" ? <FaqList /> : null}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="inline-flex rounded-full bg-[#2F6FED] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Book your shipment
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-[#2F6FED] px-5 py-2.5 text-sm font-semibold text-[#2F6FED]"
          >
            Get in Touch
          </Link>
        </div>
      </article>
    </main>
  );
}
