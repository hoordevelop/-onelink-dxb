import { cn } from "cn";

type LogoProps = {
  src: string | null;
  className?: string;
  imageClassName?: string;
};

/**
 * Official logo slot.
 * Drop the real file at public/images/logo.png (height is fixed, width stays
 * automatic, so the mark is never stretched). Until that file exists, the
 * company name is set in type — this is not a designed logo.
 */
export function Logo({ src, className, imageClassName }: LogoProps) {
  if (src) {
    return (
      // The official file keeps its own aspect ratio. next/image would force a box.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="OneLink Delivery Service"
        className={cn(
          "h-11 w-auto max-w-[220px] object-contain object-left",
          imageClassName,
        )}
      />
    );
  }

  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="font-display text-[15px] font-semibold tracking-[0.22em] text-white">
        ONELINK
      </span>
      <span className="mt-1 text-[10px] tracking-[0.26em] text-[#9CC9FF]">
        DELIVERY SERVICE
      </span>
    </span>
  );
}
