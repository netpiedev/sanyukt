"use client";

import Image from "next/image";
import { useState } from "react";
import { LearnMoreLink } from "@/components/learn-more-link";
import { SupportButton } from "@/components/support-button";

const aboutParagraphs = [
  "Founded in 2020, by Sk. Sahil, Sanyukt Organisation is Odisha's first fully youth-led NGO, driven by the belief that young people hold the power to create meaningful social change. What began as a small idea by college students has today evolved into a dynamic network of 2,000+ members and volunteers, actively working across 16+ districts of Odisha and impacting the lives of over 5 crore people through dedicated initiatives.",
  "Over the years, Sanyukt has created a lasting difference through diverse projects. From serving 10 lakh devotees during Rath Yatra, distributing 20 lakh+ sanitary pads, and conducting breast cancer awareness and health camps, to planting 10,000+ saplings and collecting 10 million kg of plastic waste, our efforts span across community welfare, women empowerment, environment, disaster relief, and Covid-19 response. During the pandemic, we also launched Sanyukt Academy youth centers to keep underprivileged children engaged in education, while ensuring both people and animals received care and support in critical times.",
  "Today, Sanyukt stands as a symbol of youth power in Odisha, continuing to grow and expand its footprint. Every initiative we undertake, whether in education, healthcare, sustainability, or community empowerment, echoes our core belief: when youth unite with purpose, they become the strongest force of change.",
];

export function HeroSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mx-auto w-full max-w-[960px] px-6 pb-14 pt-10 text-center sm:px-8 md:pb-18 md:pt-14">
      <div className="mx-auto max-w-[60rem]">
        <h1 className="text-[2.15rem] font-semibold leading-[1] tracking-[-0.055em] text-[#1a2434] sm:text-[3rem] md:text-[3.75rem]">
          <span>About </span>
          <span className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent">
            us
          </span>
        </h1>

        <div className="mx-auto mt-7 max-w-[60rem] text-[0.80rem] leading-[1.72] text-[#697586] sm:text-[1rem] md:text-[1.02rem]">
          <p>
            {aboutParagraphs[0]}{" "}
            {!expanded ? (
              <button
                type="button"
                className="inline font-semibold text-[#121c2c] transition-colors duration-200 hover:text-[var(--color-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
                onClick={() => setExpanded(true)}
              >
                Read more
              </button>
            ) : null}
          </p>

          {expanded ? (
            <>
              <p className="mt-4">{aboutParagraphs[1]}</p>
              <p className="mt-4">
                {aboutParagraphs[2]}{" "}
                <button
                  type="button"
                  className="inline font-semibold text-[#121c2c] transition-colors duration-200 hover:text-[var(--color-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
                  onClick={() => setExpanded(false)}
                >
                  Read less
                </button>
              </p>
            </>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
          <SupportButton />
          <LearnMoreLink href="/donate" />
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-[1071px] overflow-hidden rounded-[1.9rem] bg-[#eef2f6] md:mt-12 md:rounded-[2.6rem]">
        <div className="relative aspect-[5/4] w-full sm:aspect-[16/11] md:h-[520px] md:aspect-auto">
          <Image
            src="/images/about-hero.png"
            alt="Sanyukt team members together outdoors"
            fill
            sizes="(max-width: 768px) 100vw, 1071px"
            className="object-cover"
            priority
          />
        </div>

        <div className="pointer-events-none absolute -left-[4%] bottom-[10%] h-[5.5rem] w-[5.5rem] rounded-full bg-[#3dbb48] md:h-[6.5rem] md:w-[6.5rem]" />
        <div className="pointer-events-none absolute -left-[2%] -bottom-[7%] h-[7.25rem] w-[11rem] rounded-t-full bg-[#3dbb48] md:h-[9.5rem] md:w-[15rem]" />
        <div className="pointer-events-none absolute -right-[1%] -top-[2%] h-[7rem] w-[9rem] rounded-b-full bg-[#3dbb48] md:h-[8rem] md:w-[14rem]" />
      </div>
    </section>
  );
}
