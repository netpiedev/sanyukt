import { ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";
import { HeroImagePlaceholder } from "@/components/home/hero-image-placeholder";

function HeartIcon() {
  return (
    <Heart
      aria-hidden="true"
      className="h-3.5 w-3.5 fill-current"
      strokeWidth={2}
    />
  );
}

export function HomeHero() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 pb-12 pt-10 text-center sm:px-8 md:pb-16 md:pt-14">
      <div className="max-w-[860px]">
        <h1 className="text-[2.35rem] font-bold leading-[1] tracking-[-0.045em] text-[#1a2434] sm:text-[3.35rem] md:text-[4.35rem] lg:text-[4.7rem]">
          <span className="block">Youth in Action for</span>
          <span className="mt-2 block bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent">
            Better Odisha
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[660px] text-balance text-[0.95rem] leading-[1.58] text-[#718096] sm:text-[1.05rem]">
          Join Odisha&apos;s first fully youth-led NGO,{" "}
          <span className="font-extrabold text-[var(--color-text)]">
            empowering communities, women, and the environment.
          </span>
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="#"
            className="inline-flex min-w-[13.5rem] items-center justify-center gap-2 rounded-full bg-[var(--color-button)] px-5.5 py-2.5 text-[0.84rem] font-semibold text-white shadow-[0_10px_22px_rgba(69,193,76,0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
          >
            <span>Support a Cause</span>
            <HeartIcon />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 px-3 py-2 text-[0.86rem] font-medium text-[#1f2937] transition-colors duration-200 hover:text-[var(--color-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
          >
            <span>Learn more</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>

      <div className="mt-10 w-full max-w-[1190px] md:mt-14">
        <HeroImagePlaceholder />
      </div>
    </section>
  );
}
