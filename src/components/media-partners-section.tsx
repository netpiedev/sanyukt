"use client";

import { Lexend_Deca } from "next/font/google";
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

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    <section className="px-[40px] py-[40px] lg:px-[40px] lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2
          className={`${lexendDeca.className} text-center text-[18px] leading-[28px] font-semibold tracking-[-0.02em] text-[#121926]`}
        >
          Our Media Partners
        </h2>

        <div className="mt-10 px-6">
          <div className="hidden grid-cols-6 items-start gap-8 md:grid">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>

          <div className="overflow-hidden md:hidden">
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
      </div>
    </section>
  );
}

