import Image from "next/image";
import { LearnMoreLink } from "@/components/learn-more-link";
import { SupportButton } from "@/components/support-button";

function IllustrationPlaceholder() {
  return (
    <div className="mx-auto h-[20rem] w-full max-w-[26rem] overflow-hidden bg-[#eef2f6] sm:h-[24rem] sm:max-w-[29rem] lg:h-[23rem] lg:max-w-[27.5rem]">
      <div className="relative h-full w-full">
        <Image
          src="/images/building-change.png"
          alt="Building change together"
          fill
          sizes="(max-width: 1024px) 100vw, 440px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function BuildingChangeSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1188px] gap-10 px-6 py-18 sm:px-8 md:gap-14 md:py-22 lg:grid-cols-[minmax(0,32rem)_minmax(0,28rem)] lg:items-center lg:justify-between">
      <div className="max-w-[32rem] text-center lg:text-left">
        <h2 className="text-[1.65rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#1a2434] sm:text-[2.25rem] md:text-[2.375rem] lg:text-[2.5rem]">
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

        <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start">
          <SupportButton />
          <LearnMoreLink href="/donate" />
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <IllustrationPlaceholder />
      </div>
    </section>
  );
}
