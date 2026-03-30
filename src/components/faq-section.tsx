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
    <div className="py-7 md:py-8">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-8 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="max-w-232 text-[1.05rem] font-semibold tracking-[-0.03em] text-[#1a2434] sm:text-[1.12rem] md:text-[1.1rem]">
          {question}
        </span>
        {isOpen ? (
          <Minus
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-[#8090a4]"
            strokeWidth={2.2}
          />
        ) : (
          <Plus
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-[#8090a4]"
            strokeWidth={2.2}
          />
        )}
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
          isOpen ? "mt-3 max-h-112 opacity-100" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-240 space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[0.98rem] leading-[1.7] text-[#3e4b5e] md:text-[0.96rem]"
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
    <section className="bg-white py-18 md:py-24">
      <div className="mx-auto w-full max-w-[1152px] px-6 sm:px-8">
        <h2 className="text-[2.12rem] font-semibold tracking-[-0.05em] text-[#121c2c] sm:text-[2.25rem] md:text-[2.5rem]">
          Frequently asked Questions
        </h2>

        <div className="mt-12 md:mt-14">
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
