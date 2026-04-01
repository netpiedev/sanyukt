import type { ReactNode } from "react";
import { LearnMoreLink } from "@/components/learn-more-link";
import { SupportButton } from "@/components/support-button";

type HeadingSegment = {
  text: string;
  gradient?: boolean;
};

type HeroGradientVariant = "soft" | "full";

export function SharedHero({
  headingLines,
  paragraphParts,
  showActions = false,
  learnMoreHref = "/donate",
  gradientVariant = "soft",
  media,
}: {
  headingLines: HeadingSegment[][];
  paragraphParts: [string, string?];
  showActions?: boolean;
  learnMoreHref?: string;
  gradientVariant?: HeroGradientVariant;
  media: ReactNode;
}) {
  const gradientClass =
    gradientVariant === "full"
      ? "bg-[linear-gradient(90deg,#39B54A_0%,#25AAE1_100%)] bg-clip-text text-transparent"
      : "bg-[linear-gradient(90deg,#39B54A_0%,#25AAE1_69.23%)] bg-clip-text text-transparent";

  return (
    <section className="mx-auto w-full px-6 pb-6 pt-10 text-center min-[1100px]:px-20 min-[1100px]:py-14">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-6">
        <div className="space-y-4">
          <h1 className="text-[36px] font-semibold leading-[104%] tracking-[-0.03em] text-[#333840] sm:text-[40px] md:text-[56px]">
            {headingLines.map((line, lineIndex) => {
              const lineKey = line
                .map(
                  (segment) =>
                    `${segment.text}:${segment.gradient ? "g" : "n"}`,
                )
                .join("|");
              return (
                <span key={lineKey} className="inline min-[1100px]:block">
                  {line.map((segment) => (
                    <span
                      key={`${lineKey}-${segment.text}-${segment.gradient ? "g" : "n"}`}
                      className={segment.gradient ? gradientClass : ""}
                    >
                      {segment.text}
                    </span>
                  ))}
                  {lineIndex < headingLines.length - 1 ? " " : null}
                </span>
              );
            })}
          </h1>
          <p className="mx-auto max-w-[500px] text-[14px] leading-[24px] text-[#697586] sm:text-[16px] min-[1100px]:max-w-[480px]">
            {paragraphParts[0]}
            {paragraphParts[1] ? (
              <>
                {" "}
                <span className="font-semibold text-[#121926]">
                  {paragraphParts[1]}
                </span>
              </>
            ) : null}
          </p>
        </div>
        {showActions ? (
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            <SupportButton />
            <LearnMoreLink href={learnMoreHref} />
          </div>
        ) : null}
      </div>

      <div className="mx-auto mt-6 w-full max-w-[960px] min-[1100px]:mt-10">
        {media}
      </div>
    </section>
  );
}
