import Image from "next/image";

const projectLogos = [
  {
    src: "/images/impact/ppl1.png",
    alt: "Winter is Coming project logo",
    width: 256,
    height: 67,
  },
  {
    src: "/images/impact/ppl2.png",
    alt: "The Biggest Ride of India project logo",
    width: 90,
    height: 120,
  },
  {
    src: "/images/impact/ppl3.png",
    alt: "Green Disha project logo",
    width: 160,
    height: 56,
  },
  {
    src: "/images/impact/ppl4.png",
    alt: "Women Empowerment project logo",
    width: 180,
    height: 52,
  },
];

const projectImages = [
  {
    src: "/images/impact/pp1.png",
    alt: "Volunteer community support initiative",
    className: "md:col-start-1 md:row-span-2",
    sizes: "(max-width: 1024px) 100vw, 292px",
  },
  {
    src: "/images/impact/pp2.png",
    alt: "Children smiling in a community activity",
    className: "md:col-start-2 md:row-span-2",
    sizes: "(max-width: 1024px) 100vw, 440px",
  },
  {
    src: "/images/impact/pp3.png",
    alt: "Animal care and treatment support",
    className: "md:col-start-3 md:row-start-1",
    sizes: "(max-width: 1024px) 100vw, 292px",
  },
  {
    src: "/images/impact/pp4.png",
    alt: "Women empowerment workshop gathering",
    className: "md:col-start-3 md:row-start-2",
    sizes: "(max-width: 1024px) 100vw, 292px",
  },
];

export function PastProjectsSection() {
  return (
    <section className="w-full">
      <div className="w-full bg-white py-16 md:bg-[#F8FAFC] md:py-24">
        <div className="mx-auto w-full max-w-[1152px] px-6 text-center sm:px-8">
          <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#25ad95] md:text-[48px]">
            Past Projects
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-[16px] font-normal leading-[24px] text-[#5f6975]">
            We focus on voluntary involvement of people in our social work and
            every person who is associated to the community have their
            responsibility towards it&apos;s development and care.
          </p>

          <div className="mx-auto mt-10 flex max-w-[900px] flex-col items-center justify-center gap-[40px] lg:flex-row">
            {projectLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto w-auto max-w-full object-contain"
              />
            ))}
          </div>

          <div className="mt-12 hidden gap-[24px] md:grid md:grid-cols-[292px_440px_292px] md:grid-rows-2 md:justify-center">
            {projectImages.map((image) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[16px] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={640}
                  sizes={image.sizes}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
