"use client";

import type { LucideIcon } from "lucide-react";
import { BadgeInfo, Newspaper, Radio, Rss, Tv, Waves } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Partner = {
  name: string;
  icon: LucideIcon;
  accent: string;
};

const partners: Partner[] = [
  { name: "MBC TV", icon: Tv, accent: "text-[#ef4444]" },
  { name: "The Sakala", icon: Newspaper, accent: "text-[#111827]" },
  { name: "The Samaja", icon: Radio, accent: "text-[#312e81]" },
  { name: "Sambad English", icon: Waves, accent: "text-[#111827]" },
  { name: "Kanak News", icon: Rss, accent: "text-[#0f766e]" },
  { name: "Sambad", icon: BadgeInfo, accent: "text-[#111827]" },
];

function PartnerLogo({ partner }: { partner: Partner }) {
  const Icon = partner.icon;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-20 w-28 items-center justify-center rounded-[1.5rem] border border-[#eef2f7] bg-white">
        <Icon
          aria-hidden="true"
          className={`h-10 w-10 ${partner.accent}`}
          strokeWidth={2.1}
        />
      </div>
    </div>
  );
}

export function MediaPartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const perView = 2;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const mobilePartners = useMemo(
    () => [...partners, ...partners.slice(0, perView)],
    [],
  );

  return (
    <section className="py-18 md:py-22">
      <div className="mx-auto w-full max-w-[1152px] px-6 sm:px-8">
        <h2 className="text-center text-[1.9rem] font-semibold tracking-[-0.04em] text-[#1a2434] md:text-[1.85rem]">
          Our Media Partners
        </h2>

        <div className="mt-12 hidden grid-cols-6 items-start gap-8 md:grid">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>

        <div className="mt-10 overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 50}%)` }}
          >
            {mobilePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="w-1/2 flex-none px-3 first:pl-0 last:pr-0"
              >
                <PartnerLogo partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
