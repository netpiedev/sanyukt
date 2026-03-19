"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const accordionItems = [
  {
    title: "No Political Involvement",
    content:
      "Sanyukt functions as a completely independent youth-led NGO with no political affiliations. Our focus is solely on driving social change, ensuring neutrality, fairness, and inclusivity in every initiative we undertake.",
  },
  {
    title: "Empowering the Youth",
    content:
      "We create platforms where young people can lead projects, collaborate with communities, and build confidence through hands-on service and meaningful responsibility.",
  },
  {
    title: "Recognition & Growth",
    content:
      "Our programs are designed to help volunteers grow through mentorship, public recognition, and opportunities to take ownership of real community impact work.",
  },
  {
    title: "Easy to Join",
    content:
      "Getting involved is intentionally simple, with approachable onboarding, flexible participation, and support systems that help new members contribute quickly.",
  },
  {
    title: "Donation with Transparency",
    content:
      "We emphasize clarity around where support goes, how programs run, and what outcomes are being achieved so supporters can stay informed with confidence.",
  },
  {
    title: "Nation-Building Initiatives",
    content:
      "Our campaigns focus on long-term social value, connecting education, awareness, volunteerism, and grassroots action into initiatives that strengthen communities.",
  },
  {
    title: "Leadership Development",
    content:
      "Through field exposure, collaboration, and guided responsibility, participants build leadership skills that translate into sustained social engagement.",
  },
];

export function WhySanyuktSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f7f9fc] py-18 md:py-24">
      <div className="grid w-full gap-12 px-6 sm:px-8 md:grid-cols-2 md:items-end md:gap-0 md:px-0">
        <div className="md:pr-10 md:pl-[max(2rem,calc((100vw-1152px)/2+2rem))]">
          <h2 className="text-[2.6rem] font-semibold tracking-[-0.05em] text-[#35b86b] sm:text-[3.4rem] md:text-[3.15rem]">
            Why Sanyukt?
          </h2>

          <p className="mt-7 max-w-[43rem] text-balance text-[0.94rem] leading-[1.72] text-[#718096] sm:text-[1rem] md:max-w-[41rem]">
            We focus on voluntary involvement of people in our social work and
            every person who is associated to the community have their
            responsibility towards it&apos;s development and care.
          </p>

          <div className="mt-12 space-y-5 md:mt-14">
            {accordionItems.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <div
                  key={item.title}
                  className="border-b border-[#e1e7ef] pb-5 last:border-b-0"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(index)}
                  >
                    <span
                      className={`text-[1.08rem] tracking-[-0.03em] md:text-[1.12rem] ${
                        isOpen
                          ? "font-semibold text-[#1a2434]"
                          : "font-medium text-[#6f7f93]"
                      }`}
                    >
                      {item.title}
                    </span>
                    {isOpen ? (
                      <Minus
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 text-[#8b98aa]"
                        strokeWidth={2.2}
                      />
                    ) : (
                      <Plus
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 text-[#8b98aa]"
                        strokeWidth={2.2}
                      />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
                      isOpen
                        ? "mt-4 max-h-48 opacity-100"
                        : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-[49rem] text-[0.91rem] leading-[1.78] text-[#1f2937] md:text-[0.88rem]">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-4 flex justify-center md:mt-0 md:min-h-full md:items-end md:justify-end">
          <Image
            src="/images/schoolchildren.png"
            alt="School children"
            width={520}
            height={660}
            className="h-auto w-full max-w-[28rem] object-contain md:max-w-none md:w-full"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
