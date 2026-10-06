"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  {
    q: "How fast is OneLink Dash?",
    a: "Express inside Dubai is confirmed in about 60–120 minutes when the booking is taken during desk hours. The desk confirms the slot before a rider is sent.",
  },
  {
    q: "What is the difference between Dash, Haul, Bizz, Moveo, and Plus?",
    a: "Dash is the fast bike hop. Plus is the closed-cabin car. Haul is the bigger road, air, and ocean load. Bizz is the repeating business lane. Moveo is the careful home or office move.",
  },
  {
    q: "When does the desk close a same-day booking?",
    a: "Same-day bookings are taken before 11:00 AM. Next-day bookings across the emirates close at 2:00 PM. Express is confirmed inside Dubai. The desk is open Monday to Saturday, 9:00 AM to 6:00 PM.",
  },
  {
    q: "Is the fare on the booking page the final price?",
    a: "No. It is an indicative fare: bike or car, plus AED 3 for each kilo above 5 kg. The desk confirms the final amount on +971 56 269 2878 before pickup.",
  },
];

export function FaqList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/5">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-base text-[#2A303A]"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
            >
              {item.q}
              <ChevronDown
                className={`size-4 shrink-0 text-[#8B909A] transition ${expanded ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {expanded ? <p className="pb-5 text-sm leading-6 text-[#5C6570]">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
