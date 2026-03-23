import Image from "next/image";

type UniItem = { src: string; alt: string };

const desktopFirstRow: UniItem[] = [
  { src: "/images/intern/uni1.png", alt: "University logo 1" },
  { src: "/images/intern/uni2.png", alt: "University logo 2" },
  { src: "/images/intern/uni3.png", alt: "University logo 3" },
  { src: "/images/intern/uni4.png", alt: "University logo 4" },
  { src: "/images/intern/uni5.png", alt: "University logo 5" },
];

const desktopSecondRow: UniItem[] = [
  { src: "/images/intern/uni6.png", alt: "University logo 6" },
  { src: "/images/intern/uni7.png", alt: "University logo 7" },
  { src: "/images/intern/uni8.png", alt: "University logo 8" },
  { src: "/images/intern/uni9.png", alt: "University logo 9" },
  { src: "/images/intern/uni10.png", alt: "University logo 10" },
  { src: "/images/intern/uni11.png", alt: "University logo 11" },
  { src: "/images/intern/uni12.png", alt: "University logo 12" },
];

const mobileRows: UniItem[][] = [
  [
    { src: "/images/intern/uni1.png", alt: "University logo 1" },
    { src: "/images/intern/uni2.png", alt: "University logo 2" },
    { src: "/images/intern/uni3.png", alt: "University logo 3" },
  ],
  [
    { src: "/images/intern/uni4.png", alt: "University logo 4" },
    { src: "/images/intern/uni5.png", alt: "University logo 5" },
    { src: "/images/intern/uni6.png", alt: "University logo 6" },
  ],
  [
    { src: "/images/intern/uni7.png", alt: "University logo 7" },
    { src: "/images/intern/uni8.png", alt: "University logo 8" },
    { src: "/images/intern/uni9.png", alt: "University logo 9" },
    { src: "/images/intern/uni10.png", alt: "University logo 10" },
    { src: "/images/intern/uni11.png", alt: "University logo 11" },
  ],
];

export function UniversitiesJoinedSection() {
  return (
    <section className="w-full px-6 py-14 sm:px-8 md:py-16">
      <div className="mx-auto w-full max-w-[760px]">
        <h2 className="text-center text-[2rem] font-semibold tracking-tight text-[#111827] sm:text-[2.25rem]">
          University Who Joined Us
        </h2>

        <div className="mt-10 hidden space-y-6 md:block">
          <div className="grid grid-cols-5 items-center justify-items-center gap-4">
            {desktopFirstRow.map((item) => (
              <div
                key={item.src}
                className="relative h-16 w-full max-w-[130px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="130px"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 items-center justify-items-center gap-3">
            {desktopSecondRow.map((item) => (
              <div key={item.src} className="relative h-14 w-full max-w-[98px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="98px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-3 md:hidden">
          {mobileRows.map((row) => (
            <div
              key={row[0].src}
              className={`grid items-center justify-items-center gap-3 ${
                row.length === 5 ? "grid-cols-5" : "grid-cols-3"
              }`}
            >
              {row.map((item) => (
                <div
                  key={item.src}
                  className={`relative w-full ${
                    row.length === 5 ? "h-10 max-w-[56px]" : "h-11 max-w-[84px]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes={row.length === 5 ? "56px" : "84px"}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
