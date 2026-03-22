"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Partner = {
  name: string;
  image: string;
};

const partners: Partner[] = [
  { name: "MBC TV", image: "/images/media/media1.png" },
  { name: "The Sakala", image: "/images/media/media2.png" },
  { name: "The Samaja", image: "/images/media/media3.png" },
  { name: "Sambad English", image: "/images/media/media4.png" },
  { name: "Kanak News", image: "/images/media/media5.png" },
  { name: "Sambad", image: "/images/media/media6.png" },
];

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex h-20 w-28 items-center justify-center overflow-hidden rounded-3xl bg-white">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          className="object-contain p-2"
          sizes="112px"
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
        <h2 className="text-center text-[1.9rem] font-semibold tracking-[-0.04em] text-[#1a2434] md:text-[1.25rem]">
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
