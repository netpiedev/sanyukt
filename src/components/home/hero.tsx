import { HeroImagePlaceholder } from "@/components/home/hero-image-placeholder";
import { LearnMoreLink } from "@/components/learn-more-link";
import { SupportButton } from "@/components/support-button";

export function Hero() {
  return (
    <section className="mx-auto w-full px-6 pb-6 pt-10 text-center min-[1100px]:px-20 min-[1100px]:py-14">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-6">
        <div className="space-y-4">
          <h1 className="text-[2.35rem] font-semibold leading-[1] tracking-[-0.045em] text-[#1a2434] sm:text-[3.35rem] md:text-[4.35rem] lg:text-[4.45rem]">
            <span className="block">Youth in Action for</span>
            <span className="mt-2 block bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent">
              Better Odisha
            </span>
          </h1>

          <p className="mx-auto max-w-[500px] text-[0.95rem] leading-[1.58] text-[#718096] sm:text-[1rem] min-[1100px]:max-w-[480px]">
            Join Odisha&apos;s first fully youth-led NGO,{" "}
            <span className="font-medium text-[var(--color-text)]">
              empowering communities, women, and the environment.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <SupportButton />
          <LearnMoreLink href="/donate" />
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-[960px] min-[1100px]:mt-10">
        <HeroImagePlaceholder />
      </div>
    </section>
  );
}
