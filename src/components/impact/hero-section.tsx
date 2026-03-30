import { HeroImagePlaceholder } from "@/components/impact/hero-image-placeholder";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1152px] flex-col items-center px-6 pb-12 pt-10 text-center sm:px-8 md:pb-16 md:pt-14">
      <div className="max-w-[774px]">
        <h1 className="text-[2.35rem] font-semibold leading-[1] tracking-[-0.045em] text-[#1a2434] sm:text-[3.35rem] md:text-[4.35rem] lg:text-[4.45rem]">
          <span className="block">Youth in Action for</span>
          <span className="mt-2 block bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent">
            Better Odisha
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[500px] text-[0.95rem] leading-[1.58] text-[#718096] sm:text-[1rem]">
          Join Odisha&apos;s first fully youth-led NGO,{" "}
          <span className="font-medium text-[var(--color-text)]">
            empowering communities, women, and the environment.
          </span>
        </p>
      </div>

      <div className="mt-10 w-full max-w-[1071px] md:mt-14">
        <HeroImagePlaceholder />
      </div>
    </section>
  );
}
