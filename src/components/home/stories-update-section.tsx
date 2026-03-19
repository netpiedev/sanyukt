import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";

function ImagePlaceholder() {
  return (
    <div className="flex h-[21rem] w-full items-center justify-center rounded-[2rem] border border-[#dfe6ee] bg-[#d8dde3] md:h-[24rem]">
      <ImageIcon
        aria-hidden="true"
        className="h-14 w-14 text-[#97a4b1]"
        strokeWidth={1.8}
      />
    </div>
  );
}

export function StoriesUpdateSection() {
  return (
    <section className="py-18 md:py-24">
      <div className="relative mx-auto max-w-[1152px] px-6 sm:px-8">
        <button
          type="button"
          aria-label="Previous story"
          className="absolute right-full top-1/2 hidden -translate-y-1/2 pr-10 text-[#aab4c2] md:inline-flex"
        >
          <ChevronLeft
            aria-hidden="true"
            className="h-7 w-7"
            strokeWidth={2.2}
          />
        </button>

        <button
          type="button"
          aria-label="Next story"
          className="absolute left-full top-1/2 hidden -translate-y-1/2 pl-10 text-[#aab4c2] md:inline-flex"
        >
          <ChevronRight
            aria-hidden="true"
            className="h-7 w-7"
            strokeWidth={2.2}
          />
        </button>

        <div className="mx-auto grid w-full gap-12 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <p className="text-[0.95rem] font-semibold tracking-[-0.03em] text-[#1a2434] md:text-[1rem]">
              Stories &amp; Update
            </p>

            <h2 className="mt-7 text-[2.26rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[2.88rem] md:text-[3.16rem]">
              <span className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-transparent">
                Chukkala Pavani
              </span>
            </h2>

            <p className="mt-5 text-[0.95rem] font-semibold tracking-[-0.03em] text-[#a6b0bd] md:text-[1rem]">
              Volunteer and Fundraising Excellence
            </p>

            <p className="mx-auto mt-8 max-w-[35rem] text-balance text-[0.95rem] leading-[1.9] text-[#718096] md:mx-0 md:max-w-[31rem] md:text-[0.93rem]">
              Chukkala Pavani has been a driving force in Sanyukt&apos;s
              fundraising efforts. Recognized with the Chief Pillar Award during
              Rath Yatra 2024 and the Sanyukt Field Force Award, Pavani&apos;s
              leadership has inspired countless volunteers to contribute
              passionately to community causes.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex items-center justify-center gap-2 text-[0.96rem] font-semibold text-[#121c2c] transition-colors duration-200 hover:text-[var(--color-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)] md:justify-start"
            >
              <span>Learn more</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4"
                strokeWidth={2}
              />
            </Link>
          </div>

          <div className="w-full">
            <ImagePlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
