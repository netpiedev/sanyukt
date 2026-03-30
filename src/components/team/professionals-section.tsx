"use client";

import { Mail } from "lucide-react";
import { Lexend_Deca } from "next/font/google";
import { useMemo, useState } from "react";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

type TeamRole = {
  id: string;
  label: string;
};

type TeamCard = {
  id: string;
  name: string;
  designation: string;
  email: string;
};

const roles: TeamRole[] = [
  { id: "board-of-trustee", label: "Board of Trustee" },
  { id: "managing-team", label: "Managing Team" },
  { id: "governing-team", label: "Governing Team" },
  { id: "digital-team", label: "Digital Team" },
  { id: "internship-team", label: "Internship Team" },
  { id: "star-performers", label: "Star Performers" },
];

const STAR_ID = "star-performers";

function buildCards(sectionId: string): TeamCard[] {
  const base = {
    name: "Name of the person",
    designation: "Designation of the employee",
    email: "emailaddress@sanyukt.com",
  };

  return Array.from({ length: 6 }).map((_, idx) => ({
    id: `${sectionId}-${idx + 1}`,
    ...base,
  }));
}

function TeamCardItem({ card }: { card: TeamCard }) {
  return (
    <article className="flex w-full max-w-[340px] flex-col rounded-[14px] p-6 bg-white md:h-[368px]">
      <div className="w-full max-w-[292px]">
        <div className="aspect-292/200 w-full rounded-[8px] bg-[#F8FAFC] md:aspect-auto md:h-[200px]" />

        <h3 className="mt-5 text-left text-[24px] font-semibold leading-[32px] tracking-[-0.02em] text-[#121926] md:mt-5">
          {card.name}
        </h3>

        <p className="mt-2 text-left text-[14px] font-medium leading-[22px] tracking-[-0.01em] text-[#697586]">
          {card.designation}
        </p>

        <div className="mt-4 flex items-center justify-start gap-1 pb-6 md:pb-8">
          <Mail className="h-4.5 w-4.5 text-[#A1A9B5]" aria-hidden />
          <span className="text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-[#A1A9B5]">
            {card.email}
          </span>
        </div>
      </div>
    </article>
  );
}

export function ProfessionalsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeRoleId = roles[activeIndex]?.id ?? roles[0].id;
  const isStarActive = activeRoleId === STAR_ID;

  const sections = useMemo(
    () =>
      roles.map((role) => ({
        role,
        cards: buildCards(role.id),
      })),
    [],
  );

  return (
    <section className={`${lexendDeca.className} w-full`}>
      <div
        className={`${lexendDeca.className} w-full bg-[#F8FAFC] px-6 py-14 sm:px-8 md:bg-white md:py-20`}
      >
        <div className="mx-auto w-full max-w-[960px]">
          <h2 className="text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#333840] sm:text-[44px] text-center">
            Our Dedicated Professionals
          </h2>

          <p className="mx-auto mt-6 max-w-[530px] text-center text-[14px] leading-[22px] tracking-[-0.01em] text-[#697586]">
            Meet the passionate minds who bring expertise, creativity, and
            commitment to every project driving success through collaboration
            and innovation.
          </p>

          <div className="-mx-6 mt-10 px-6 sm:mx-0 sm:px-0">
            <div
              className="mx-auto flex max-w-[880px] items-center gap-[12px] overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              role="tablist"
              aria-label="Team categories"
            >
              {sections.map(({ role }, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <a
                    key={role.id}
                    href={`#${role.id}`}
                    className={[
                      "flex shrink-0 items-center justify-center rounded-lg px-3 py-2 text-center text-[14px] transition-colors whitespace-nowrap",
                      isActive
                        ? "bg-[#121926] text-white font-medium"
                        : "bg-transparent text-[#121926] border border-[#E3E8EF]",
                    ].join(" ")}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(idx);
                      document.getElementById(role.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {role.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1120px] sm:mt-20">
          <div className="w-full">
            <div className="space-y-12">
              {sections.map(({ role, cards }, idx) => {
                if (role.id === STAR_ID) return null;

                const showMobile =
                  idx === activeIndex || (isStarActive && idx === 0);

                return (
                  <section
                    key={role.id}
                    id={role.id}
                    className={
                      showMobile ? "block md:block" : "hidden md:block"
                    }
                  >
                    <h3 className="px-2 text-left text-[20px] sm:text-[24px] font-semibold leading-[32px] text-[#121926] md:text-center">
                      {role.label}
                    </h3>

                    <div className="mt-5 grid grid-cols-1 justify-items-start gap-[14px] sm:justify-center sm:grid-cols-[repeat(2,340px)] md:grid-cols-[repeat(3,340px)]">
                      {cards.map((card) => (
                        <TeamCardItem key={card.id} card={card} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Star Performance is a separate full-width section */}
      <section
        id={STAR_ID}
        className="mt-10 w-full bg-[#FEF4E8] py-14 md:py-20"
      >
        <div className="mx-auto w-full max-w-[1120px] px-6 sm:px-8">
          <h3 className="text-center text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#333840] sm:text-[44px]">
            Star Performers
          </h3>
          <p className="mx-auto mt-6 max-w-[560px] text-center text-[14px] leading-[22px] tracking-[-0.01em] text-[#697586]">
            Recognizing the exceptional contributions of volunteers and team
            members who go above and beyond to drive Sanyukt&apos;s mission
            forward. Their passion, leadership, and commitment inspire change
            across Odisha.
          </p>

          <div className="mt-18 grid grid-cols-1 justify-items-start gap-y-[16px] gap-x-[24px] sm:justify-center sm:grid-cols-[repeat(2,340px)] md:grid-cols-[repeat(3,340px)]">
            {buildCards(STAR_ID).map((card) => (
              <TeamCardItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
