"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Flower2,
  HandHeart,
  Leaf,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

type WorkItem = {
  label: string;
  icon: LucideIcon;
  iconClassName: string;
};

const workItems: WorkItem[] = [
  {
    label: "Women Empowerment",
    icon: HandHeart,
    iconClassName: "text-[#3cb74f]",
  },
  {
    label: "Skill Development",
    icon: Sparkles,
    iconClassName: "text-[#2d9ee8]",
  },
  {
    label: "Awareness",
    icon: Megaphone,
    iconClassName: "text-[#39b46a]",
  },
  {
    label: "Internship",
    icon: BriefcaseBusiness,
    iconClassName: "text-[#34b8b7]",
  },
  {
    label: "Special Need",
    icon: Flower2,
    iconClassName: "text-[#39b46a]",
  },
  {
    label: "Environmental",
    icon: Leaf,
    iconClassName: "text-[#2d9ee8]",
  },
];

function WorkIcon({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className: string;
}) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-[72%] -translate-y-[28%] rounded-full bg-[#39b46a]" />
      <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-[-8%] -translate-y-[44%] rounded-full bg-[#2d9ee8]" />
      <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-[18%] -translate-y-[96%] rounded-full bg-[#f6a028]" />
      <Icon
        aria-hidden="true"
        className={`relative z-10 h-9 w-9 ${className}`}
        strokeWidth={2.1}
      />
    </div>
  );
}

function MobileSlide({ item }: { item: WorkItem }) {
  return (
    <div className="flex min-w-full items-center justify-center">
      <div className="flex w-full max-w-[26rem] items-center justify-center gap-5 px-8">
        <div className="h-10 w-px bg-[#dfe5ed]" />
        <WorkIcon icon={item.icon} className={item.iconClassName} />
        <div className="flex items-center gap-3">
          <span className="text-[0.9rem] font-medium tracking-[-0.03em] text-[#1a2434]">
            {item.label}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 text-[#768394]"
            strokeWidth={2}
          />
        </div>
        <div className="h-10 w-px bg-[#dfe5ed]" />
      </div>
    </div>
  );
}

export function WhatWeDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % workItems.length);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1188px] px-6 py-18 sm:px-8 md:py-20">
      <div className="hidden md:block">
        <h2 className="text-center text-[2rem] font-semibold tracking-[-0.04em] text-[#1a2434]">
          What we do?
        </h2>

        <div className="mt-12 grid grid-cols-6 gap-8">
          {workItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <WorkIcon icon={item.icon} className={item.iconClassName} />
              <p className="mt-5 text-[0.92rem] font-medium tracking-[-0.03em] text-[#1a2434]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {workItems.map((item) => (
              <MobileSlide key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
