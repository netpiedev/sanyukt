import Image from "next/image";
import { LearnMoreLink } from "@/components/learn-more-link";
import { SupportButton } from "@/components/support-button";

export function Hero() {
  return (
    <section className="mx-auto w-full px-6 pb-6 pt-10 text-center min-[1100px]:px-20 min-[1100px]:py-14">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-6">
        <div className="space-y-4">
          <h1 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-[#1a2434] sm:text-[2.65rem] md:text-[3.25rem]">
            Together, we can build{" "}
            <span className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent ">
              stronger communities.
            </span>
          </h1>

          <div className="mx-auto max-w-[500px] text-[0.9rem] leading-[1.72] text-[#697586] sm:text-[1rem] min-[1100px]:max-w-[480px]">
            <p>
              At Sanyukt, corporate partnerships go beyond CSR—they create{" "}
              <span className="font-semibold text-[#1a2434]">
                lasting impact, empower communities, and drive meaningful change
                across Odisha.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <SupportButton />
          <LearnMoreLink href="/donate" />
        </div>
      </div>

      <div className="relative mx-auto mt-6 w-full max-w-[960px] overflow-hidden rounded-[40px] bg-[#eef2f6] min-[1100px]:mt-10 min-[1100px]:h-[520px]">
        <div className="relative aspect-5/4 w-full sm:aspect-16/11 min-[1100px]:h-full min-[1100px]:aspect-auto">
          <Image
            src="/images/corporate/hero.png"
            alt="Corporate partners and Sanyukt team with certificates"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 960px"
            priority
          />
        </div>

        <div className="pointer-events-none absolute -right-[1%] -top-[2%] h-28 w-36 rounded-b-full bg-[#3dbb48] md:h-32 md:w-56" />
        <div className="pointer-events-none absolute -left-[4%] bottom-[10%] h-22 w-22 rounded-full bg-[#3dbb48] md:h-26 md:w-26" />
        <div className="pointer-events-none absolute -left-[2%] -bottom-[7%] h-29 w-44 rounded-t-full bg-[#3dbb48] md:h-38 md:w-60" />
      </div>
    </section>
  );
}
