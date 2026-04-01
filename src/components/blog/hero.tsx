import Image from "next/image";
import { LearnMoreLink } from "@/components/learn-more-link";
import { SupportButton } from "@/components/support-button";

export function Hero() {
  return (
    <section className="mx-auto w-full px-6 pb-6 pt-10 text-center min-[1100px]:px-20 min-[1100px]:py-14">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-6">
        <div className="space-y-4">
          <h1 className="text-[2.15rem] font-semibold leading-[1.05] tracking-[-0.055em] text-[#1a2434] sm:text-[3.35rem]">
            <span>Our </span>
            <span className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent">
              Journey & Insights
            </span>
          </h1>

          <div className="mx-auto max-w-[540px] text-[0.80rem] leading-[1.62] text-[#697586] sm:text-[1rem] min-[1100px]:max-w-[480px]">
            <p>
              Discover stories of youth action, community impact, and inspiring
              social change in Odisha.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <SupportButton />
          <LearnMoreLink href="/about" />
        </div>
      </div>

      <div className="relative mx-auto mt-6 w-full max-w-[960px] overflow-hidden rounded-[40px] bg-[#eef2f6] min-[1100px]:mt-10 min-[1100px]:h-[520px]">
        <div className="relative aspect-5/4 w-full sm:aspect-16/11 min-[1100px]:h-full min-[1100px]:aspect-auto">
          <Image
            src="/images/blog/hero.png"
            alt="Two women smiling together outdoors"
            fill
            sizes="(max-width: 768px) 100vw, 960px"
            className="object-cover"
            priority
          />
        </div>

        <div className="pointer-events-none absolute -left-[4%] bottom-[10%] h-22 w-22 rounded-full bg-[#3dbb48] md:h-26 md:w-26" />
        <div className="pointer-events-none absolute -left-[2%] -bottom-[7%] h-29 w-44 rounded-t-full bg-[#3dbb48] md:h-38 md:w-60" />
        <div className="pointer-events-none absolute -right-[1%] -top-[2%] h-28 w-36 rounded-b-full bg-[#3dbb48] md:h-32 md:w-56" />
      </div>
    </section>
  );
}
