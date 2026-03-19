import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { SupportCauseButton } from "@/components/home/support-cause-button";

function IllustrationPlaceholder() {
  return (
    <div className="mx-auto flex h-[20rem] w-full max-w-[26rem] items-center justify-center rounded-[2.2rem] border border-[#dfe6ee] bg-[linear-gradient(145deg,#f4f6f8_0%,#dde3e9_100%)] sm:h-[24rem] sm:max-w-[29rem] lg:h-[23rem] lg:max-w-[27.5rem]">
      <div className="flex flex-col items-center text-[#99a5b2]">
        <ImageIcon aria-hidden="true" className="h-12 w-12" strokeWidth={1.8} />
      </div>
    </div>
  );
}

export function BuildingChangeSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1188px] gap-10 px-6 py-18 sm:px-8 md:gap-14 md:py-22 lg:grid-cols-[minmax(0,32rem)_minmax(0,28rem)] lg:items-center lg:justify-between">
      <div className="max-w-[32rem] text-center lg:text-left">
        <h2 className="text-[2.15rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#1a2434] sm:text-[3rem] md:text-[2.97rem] lg:text-[2.65rem]">
          <span className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-transparent">
            Building Change Together
          </span>{" "}
          <span>at</span>
          <span className="mt-2 block text-[#1a2434]">
            Every Level of Society
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-[30.5rem] text-balance text-[0.95rem] font-normal leading-[1.72] text-[#718096] sm:text-[1.02rem] lg:mx-0 lg:max-w-[29.75rem] lg:text-[0.94rem]">
          Sanyukt believes that meaningful social change begins when people come
          together with purpose. By engaging individuals, communities,
          corporates, and government bodies, we create a collaborative ecosystem
          where every participant contributes to development, empowerment, and
          social welfare.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <SupportCauseButton className="min-w-[14.1rem] px-5 py-3 text-[0.84rem] font-medium" />
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 px-3 py-2 text-[0.84rem] font-normal text-[#1f2937] transition-colors duration-200 hover:text-[var(--color-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
          >
            <span>Learn more</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-3 w-3"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <IllustrationPlaceholder />
      </div>
    </section>
  );
}
