import { Atkinson_Hyperlegible_Next } from "next/font/google";
import { HeroImagePlaceholder } from "@/components/impact/hero-image-placeholder";

const atkinsonHyperlegibleNext = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1120px] flex-col items-center px-6 pb-12 pt-10 text-center sm:px-8 md:pb-16 md:pt-14">
      <div className={atkinsonHyperlegibleNext.className}>
        <h1 className="text-[36px] font-semibold leading-[120%]  tracking-[-0.03em] md:leading-[120%] sm:text-[32px] md:text-[48px] lg:text-[56px]">
          <span className="block bg-[linear-gradient(90deg,#39B54A_0%,#25AAE1_100%)] bg-clip-text text-transparent">
            5+ Years, 16+ Districts,
            <br />5 Crore Lives Touched.
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[24px] text-[#697586]">
          Together with our volunteers, partners, and supporters, Sanyukt is
          creating real impact across Odisha—empowering youth, uplifting
          communities, and building a brighter tomorrow.
        </p>
      </div>

      <div className="mt-[24px] w-full max-w-[960px] md:mt-[40px]">
        <HeroImagePlaceholder />
      </div>
    </section>
  );
}
