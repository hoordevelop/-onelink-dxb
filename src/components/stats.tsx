import { BadgeCheck, MapPinned, Timer, Users } from "lucide-react";
import { cn } from "cn";
import { Reveal } from "@/components/reveal";

const stats = [
  {
    title: "Fast Response",
    description: "Bookings are picked up quickly, with a team ready to move on time-sensitive jobs.",
    icon: Timer,
  },
  {
    title: "Professional Service",
    description: "Careful handling, clear updates, and a standard of service built for Dubai businesses.",
    icon: BadgeCheck,
  },
  {
    title: "Dubai Coverage",
    description: "Local bike and car delivery across Dubai, from business districts to residential communities.",
    icon: MapPinned,
  },
  {
    title: "Customer Focused",
    description: "Every delivery is planned around your schedule, your customers, and the way you work.",
    icon: Users,
  },
];

export function Stats() {
  return (
    <section aria-label="How OneLink works with clients" className="border-y border-[#007BFF]/20 bg-[#020B14]">
      <div className="mx-auto grid max-w-6xl sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Reveal key={stat.title} delay={index * 0.06} className="h-full">
              <article
                className={cn(
                  "h-full border-[#007BFF]/15 px-6 py-10 sm:px-8",
                  index < stats.length - 1 && "border-b sm:border-b-0",
                  index < 2 && "sm:border-b xl:border-b-0",
                  (index === 0 || index === 2) && "sm:border-r",
                  index < 3 && "xl:border-r",
                )}
              >
                <div className="grid size-11 place-items-center rounded-full bg-[#FFD100]/12 text-[#FFD100] ring-1 ring-[#FFD100]/40">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-white">{stat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C5D7E6]">{stat.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
