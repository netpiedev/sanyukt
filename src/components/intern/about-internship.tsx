"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const accordionItems = [
  {
    title: "Certificate of Completion",
    content:
      "Receive a formal Internship Certificate along with an Internship Completion Letter on the official NGO letterhead, recognizing your successful completion of the internship. This validates your skills, dedication, and commitment to personal and professional growth.",
  },
  {
    title: "Letter of Recommendation",
    content:
      "Outstanding interns receive a personalized recommendation letter from our founders, highlighting achievements and boosting future career or academic opportunities.",
  },
  {
    title: "Flexible Hours and Remote Work",
    content:
      "Manage your internship alongside studies or commitments with flexible schedules and remote work options tailored for convenience and productivity.",
  },
  {
    title: "Recognition on our Website with Photo",
    content:
      "Top performers are featured on our website with their photo and profile, showcasing your contribution and building professional visibility.",
  },
  {
    title: "Monthly 'Intern of the Month' Awards",
    content:
      "Exceptional efforts are celebrated monthly, recognizing interns’ hard work, dedication, and standout performance within the program.",
  },
  {
    title: "Support a Meaningful Cause",
    content:
      "Contribute to impactful social initiatives while developing your skills, making a tangible difference in communities through meaningful projects.",
  },
];

export function AboutInternshipSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f7f9fc] pb-0 pt-16 md:pb-0 md:pt-20">
      <div className="grid w-full gap-12 px-6 sm:px-8 md:grid-cols-[980px_minmax(0,1fr)] md:items-end md:gap-0 md:px-0">
        <div className="w-full max-w-[640px] md:max-w-none md:pr-10 md:pl-[max(8rem,calc((100vw-1152px)/2+2rem))]">
          <h2 className="text-[2.1rem] font-semibold tracking-tight text-[#35b86b] sm:text-[2.35rem]">
            About Internship
          </h2>

          <p className="mt-4 max-w-[480px] text-[0.95rem] leading-[1.72] text-[#697586] sm:text-[1rem]">
            The Sanyukt Internship Program, launched in 2025, is more than just
            an internship—it’s a journey of learning, leadership, and impact. We
            provide passionate youth with opportunities to explore roles in
            Human Resource, HR Coordination, Team Leadership, Content Writing,
            Graphic Design, Video Editing, and Event Management.
          </p>

          <div className="mt-12 mb-16 space-y-5">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className="border-b border-[#e1e7ef] pb-5 last:border-b-0"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                  >
                    <span className="text-[1.12rem] font-semibold tracking-[-0.02em] text-[#1a2434]">
                      {item.title}
                    </span>
                    {isOpen ? (
                      <Minus
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-[#8b98aa]"
                        strokeWidth={2.2}
                      />
                    ) : (
                      <Plus
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-[#8b98aa]"
                        strokeWidth={2.2}
                      />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
                      isOpen
                        ? "mt-3 max-h-40 opacity-100"
                        : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[0.95rem] leading-[1.72] text-[#333840]">
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
            src="/images/intern/about.png"
            alt="About Internship"
            width={500}
            height={580}
            className="h-auto w-full max-w-88 object-contain md:w-[580px]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
