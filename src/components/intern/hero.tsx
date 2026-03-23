import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SupportCauseButton } from "@/components/home/support-cause-button";

export function InternHeroSection() {
  return (
    <section className="mx-auto w-full max-w-[960px] px-6 pb-14 pt-10 text-center sm:px-8 md:pb-18 md:pt-14">
      <h1 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-[#1a2434] sm:text-[2.65rem] md:text-[3.25rem]">
        Kickstart your
        <br />
        <span className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent ">
          journey with Sanyukt
        </span>
      </h1>

      <div className="mx-auto mt-6 max-w-[520px] text-[0.9rem] leading-[1.72] text-[#697586] sm:mt-7 sm:text-[1rem]">
        <p>
          Step into a journey where learning meets purpose. At Sanyukt, you’ll{" "}
          <span className="font-semibold text-[#1a2434]">
            sharpen your skills, explore volunteering, and contribute to
            initiatives that truly create impact.
          </span>
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-3.5 sm:mt-7 sm:flex-row">
        <SupportCauseButton className="min-w-54 px-3 py-2.5 text-[0.95rem] font-semibold" />
        <Link
          href="/donate"
          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-[0.95rem] font-medium text-[#1f2937] transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
        >
          <span>Learn more</span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4"
            strokeWidth={2}
          />
        </Link>
      </div>

      <div className="relative mx-auto mt-10 w-full overflow-hidden rounded-[1.9rem] bg-[#eef2f6] md:mt-12 md:rounded-[2.6rem]">
        <div className="relative aspect-5/4 w-full sm:aspect-16/11 md:h-[520px] md:aspect-auto">
          <Image
            src="/images/intern/hero.png"
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
