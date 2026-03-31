"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faqs";

export type FaqEntry = {
  id: number | string;
  question: string;
  answer: string;
};

function FaqItem({
  answer,
  isOpen,
  onToggle,
  question,
}: {
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  question: string;
}) {
  const paragraphs = answer.split("\n\n");

  return (
    <div className="px-0 lg:px-6">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-8 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-[16px] leading-[24px] font-semibold text-[#121926] lg:text-[20px] lg:leading-[28px]">
          {question}
        </span>
        {isOpen ? (
          <Minus
            aria-hidden="true"
            className="mt-0.5 h-6 w-6 shrink-0 text-[#697586]"
            strokeWidth={2.2}
          />
        ) : (
          <Plus
            aria-hidden="true"
            className="mt-0.5 h-6 w-6 shrink-0 text-[#697586]"
            strokeWidth={2.2}
          />
        )}
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
          isOpen ? "mt-2 max-h-112 opacity-100" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-[720px] space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[14px] leading-[24px] font-normal text-[#333840] lg:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-[56px] px-[24px] lg:px-[120px] lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1120px]   space-y-6 md:space-y-10">
        <h2 className="lg:px-6 text-[28px] leading-[122%] font-bold tracking-[-0.02em] text-[#121926] lg:text-[40px] lg:leading-[120%] lg:font-semibold">
          Frequently asked Questions
        </h2>

        <div className="space-y-6 md:space-y-10">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.id}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              question={faq.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
