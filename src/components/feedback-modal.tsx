"use client";

import { Frown, Heart, Meh, Smile, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export type FeedbackModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FeedbackModal({ open, onOpenChange }: FeedbackModalProps) {
  const [fullName, setFullName] = useState("");
  const [experienceRating, setExperienceRating] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [recommendation, setRecommendation] = useState<
    "for_sure" | "needs_improvement" | "not_at_all" | null
  >(null);

  const experienceOptions = useMemo(() => [1, 2, 3, 4, 5] as const, []);
  const recommendOptions = useMemo(
    () =>
      [
        { id: "for_sure", label: "For sure", Icon: Smile },
        { id: "needs_improvement", label: "Needs Improvement", Icon: Meh },
        { id: "not_at_all", label: "Not at all", Icon: Frown },
      ] as const,
    [],
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Feedback"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#00000066] backdrop-blur-sm"
        aria-label="Close feedback modal"
        onClick={() => onOpenChange(false)}
      />

      <div className="relative w-full max-w-[640px] rounded-[24px] bg-white p-10 text-[#121926] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#121926]/70 transition-colors hover:bg-[#EEF2F6] hover:text-[#121926] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]"
          aria-label="Close"
        >
          <X className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" color="#A1A9B5" />
        </button>

        <h2 className="text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] font-bold tracking-[-0.02em]">
          Feedback
        </h2>

        <form
          className="mt-6 flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            // Modal UI only (no backend wired yet).
            onOpenChange(false);
          }}
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="feedback-full-name"
              className="text-[16px] leading-[24px] font-semibold"
            >
              Full Name
            </label>
            <input
              id="feedback-full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="h-11 sm:h-12 w-full rounded-lg border-2 border-[#EEF2F6] px-4 text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] text-[#121926] outline-none placeholder:text-[#697586] focus:border-[#39B54A] focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[16px] leading-[24px] font-semibold">
              How would you rate your experience with Sanyukt?
            </p>
            <div className="flex flex-wrap gap-2">
              {experienceOptions.map((n) => {
                const isActive = experienceRating === n;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setExperienceRating(n)}
                    className={[
                      "inline-flex h-[44px] w-[44px] sm:h-[48px] sm:w-[50px] items-center justify-center rounded-lg border text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]",
                      isActive
                        ? "border-[#39B54A] bg-[#39B54A] text-white"
                        : "border-[#EEF2F6] bg-white text-[#121926] hover:bg-[#EEF2F6]",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="feedback-message"
              className="text-[16px] leading-[24px] font-semibold"
            >
              Any message for us?
            </label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type something here..."
              className="min-h-[96px] sm:min-h-[110px] w-full resize-none rounded-lg border-2 border-[#EEF2F6] px-4 py-3 text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] text-[#121926] outline-none placeholder:text-[#697586] focus:border-[#39B54A]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[16px] leading-[24px] font-semibold">
              Would you recommend this to someone?
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {recommendOptions.map(({ id, label, Icon }) => {
                const isActive = recommendation === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setRecommendation(id)}
                    className={[
                      "inline-flex items-center justify-center gap-2 rounded-lg border px-3 sm:px-4 py-2 text-[15px] leading-[22px] sm:py-2.5 sm:text-[16px] sm:leading-[24px] font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]",
                      isActive
                        ? "border-[#39B54A] bg-[#39B54A] text-white"
                        : "border-[#EEF2F6] bg-white text-[#121926] hover:bg-[#EEF2F6]",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-0">
            <button
              type="submit"
              className="inline-flex h-11 sm:h-12 w-full items-center justify-center gap-1 rounded-[48px] bg-[#39B54A] px-6 text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] font-semibold text-white transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A] focus-visible:ring-offset-2"
            >
              <span>Submit details</span>
              <Heart className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
