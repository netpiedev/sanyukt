"use client";

import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";

const testimonials = [
  {
    name: "Sradha Panigrahi",
    title: "Ollywood Actress",
    body: "The passion of the Sanyukt team to drive meaningful change in society is truly inspiring. From empowering lives to addressing critical societal issues, their commitment stands out. It's rare to see such a level of devotion and teamwork working toward a better future.",
  },
  {
    name: "Soumya Suman",
    title: "Assistant Manager - Marketing",
    body: "Partnering with Sanyukt Organisation was a remarkable experience. Their professionalism, dedication, and passion were evident throughout the initiative. The collaboration ensured meaningful outreach and created a lasting positive impression on everyone involved.",
  },
  {
    name: "Ananya Das",
    title: "Community Volunteer",
    body: "What makes Sanyukt special is the sincerity behind every effort. The team builds trust, involves people with empathy, and consistently turns good intentions into measurable social impact. It feels meaningful to contribute alongside them.",
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <article className="rounded-[2rem] bg-white p-4">
      <div className="flex h-[13.5rem] items-center justify-center rounded-[1.65rem] bg-[#d8dde3]">
        <ImageIcon
          aria-hidden="true"
          className="h-14 w-14 text-[#97a4b1]"
          strokeWidth={1.8}
        />
      </div>

      <div className="mt-7">
        <h3 className="text-[1.15rem] font-semibold tracking-[-0.04em] text-[#1a2434] sm:text-[1.2rem]">
          {item.name}
        </h3>
        <p className="mt-2 text-[0.92rem] font-semibold italic text-[#a6b0bd]">
          {item.title}
        </p>
        <p className="mt-5 line-clamp-5 text-[0.98rem] leading-[1.6] text-[#718096]">
          {item.body}
        </p>
      </div>
    </article>
  );
}

export function SupportersTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopCards = useMemo(() => {
    return [
      testimonials[activeIndex % testimonials.length],
      testimonials[(activeIndex + 1) % testimonials.length],
    ];
  }, [activeIndex]);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#f7f9fc] py-18 md:py-22">
      <div className="grid w-full gap-10 px-6 sm:px-8 lg:grid-cols-[40%_60%] lg:items-start lg:gap-0 lg:px-0">
        <div className="flex flex-col text-center lg:min-h-full lg:pr-12 lg:pl-[max(2rem,calc((100vw-1152px)/2+2rem))] lg:pt-3 lg:text-left">
          <h2 className="text-[1.94rem] font-semibold leading-[1.05] tracking-[-0.05em] sm:text-[2.55rem] md:text-[2.8rem]">
            <span className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-transparent">
              What Our Supporters Say?
            </span>
          </h2>

          <p className="mt-6 text-[0.98rem] font-medium text-[#1a2434] sm:text-[1.05rem]">
            Stories from those making an impact with us.
          </p>

          <div className="mt-auto hidden items-center gap-4 pt-16 lg:flex">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#eef2f7] bg-white text-[#c1c9d4]"
            >
              <ChevronLeft
                aria-hidden="true"
                className="h-7 w-7"
                strokeWidth={2.2}
              />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#eef2f7] bg-white text-[#98a5b4]"
            >
              <ChevronRight
                aria-hidden="true"
                className="h-7 w-7"
                strokeWidth={2.2}
              />
            </button>
          </div>
        </div>

        <div className="hidden grid-cols-2 gap-5 lg:grid lg:pl-4 lg:pr-0">
          {desktopCards.map((item) => (
            <TestimonialCard key={`${item.name}-${item.title}`} item={item} />
          ))}
        </div>

        <div className="lg:hidden">
          <TestimonialCard item={testimonials[activeIndex]} />

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#eef2f7] bg-white text-[#c1c9d4]"
            >
              <ChevronLeft
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={2.2}
              />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#eef2f7] bg-white text-[#98a5b4]"
            >
              <ChevronRight
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={2.2}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
