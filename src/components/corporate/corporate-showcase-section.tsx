import Image from "next/image";

const slides = [
  {
    src: "/images/corporate/corporate1.png",
    alt: "DCB Bank",
  },
  {
    src: "/images/corporate/corporate2.png",
    alt: "EY",
  },
  {
    src: "/images/corporate/corporate3.png",
    alt: "Sambad Digital",
  },
  {
    src: "/images/corporate/corporate4.png",
    alt: "Vrikshit Foundation",
  },
] as const;

function LogoRow({
  suffix,
  ariaHidden,
}: {
  suffix: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex w-1/2 items-center justify-between gap-2 px-2 py-3 sm:gap-3 sm:px-3"
      aria-hidden={ariaHidden}
    >
      {slides.map((slide) => (
        <div
          key={`${suffix}-${slide.src}`}
          className="relative h-11 min-w-0 flex-1 sm:h-14"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-contain object-center"
            sizes="80px"
          />
        </div>
      ))}
    </div>
  );
}

export function CorporateShowcaseSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[650px] px-6 sm:px-8 md:px-6">
        <h2 className="text-center text-[1.125rem] font-semibold tracking-tight text-[#1a2434] sm:text-[1.25rem]">
          Corporate &amp; NGO Partners
        </h2>

        <div className="mt-8 md:mt-10">
          <div className="overflow-hidden rounded-xl bg-white md:hidden">
            <div className="corporate-marquee-track flex w-[200%]">
              <LogoRow suffix="a" />
              <LogoRow suffix="b" ariaHidden />
            </div>
          </div>

          <div className="hidden grid-cols-4 items-center gap-3 md:grid md:gap-4">
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="relative h-16 w-full min-w-0 sm:h-18"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain object-center"
                  sizes="150px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
