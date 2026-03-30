import { Atkinson_Hyperlegible_Next, Lexend_Deca } from "next/font/google";
import Image from "next/image";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const atkinsonHyperlegibleNext = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const impactStats = [
  {
    value: "5,00,00,000+",
    mobileValue: "50mn+",
    label: "Lives Impacted",
  },
  {
    value: "20+",
    mobileValue: "20+",
    label: "Districts Covered",
  },
  {
    value: "3,000+",
    mobileValue: "3,000+",
    label: "Volunteers & Members",
  },
  {
    value: "3,000+",
    mobileValue: "3,000+",
    label: "Villages Reached",
  },
];

export function HeroImagePlaceholder() {
  return (
    <div className="overflow-hidden rounded-4xl border border-[#dfe6ee] bg-white md:rounded-[2.6rem]">
      <div className="relative h-72 overflow-hidden bg-[#d8dde3] sm:h-88 md:h-128">
        <Image
          src="/images/hero.png"
          alt="Community gathering"
          fill
          sizes="(max-width: 768px) 100vw, 1071px"
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-2 gap-y-5 bg-[#F8FAFC] px-4 py-5 text-center sm:px-5 md:grid-cols-4 md:gap-4 md:py-5">
        {impactStats.map((stat) => (
          <div key={stat.label}>
            <p
              className={`${atkinsonHyperlegibleNext.className} text-[24px] font-bold tracking-[-0.03em] text-[#27AAE1] md:hidden`}
            >
              {stat.mobileValue}
            </p>
            <p
              className={`${atkinsonHyperlegibleNext.className} hidden text-[24px] font-bold leading-[130%] tracking-[-0.03em] text-[#27AAE1] md:block`}
            >
              {stat.value}
            </p>
            <p
              className={`${lexendDeca.className} mt-.75 text-[14px] leading-[24px] text-(--color-text)`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
