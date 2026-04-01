import Image from "next/image";
import { SharedHero } from "@/components/shared-hero";

export function Hero() {
  return (
    <SharedHero
      headingLines={[
        [{ text: "Kickstart your" }],
        [{ text: "journey with Sanyukt", gradient: true }],
      ]}
      paragraphParts={[
        "Step into a journey where learning meets purpose. At Sanyukt, you’ll",
        "sharpen your skills, explore volunteering, and contribute to initiatives that truly create impact.",
      ]}
      showActions
      gradientVariant="full"
      media={
        <div className="relative w-full overflow-hidden rounded-[40px] bg-[#eef2f6] min-[1100px]:h-[520px]">
          <div className="relative aspect-5/4 w-full sm:aspect-16/11 min-[1100px]:h-full min-[1100px]:aspect-auto">
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
      }
    />
  );
}
