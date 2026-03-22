import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const intro =
  "At Sanyukt, our founder envisions a youth platform where young people can actively contribute to social work—not just as volunteers, but also in senior management roles. Explore exciting opportunities to make a real impact and shape the future of communities. Choose a team that aligns with your passion and skills";

const spotlights = [
  {
    name: "Lenka jena",
    role: "Volunteer and Fundraising Excellence",
    excerpt:
      "Partnering with Sanyukt Organisation for Rath Yatra 2024 & 2025  was a remarkable experience. Their professionalism, dedication, and passion were evident throughout the event. The collaboration ensured impactful media coverage across Kanak Digital and Sambad Digital platforms, amplifying their mission of unity and togetherness.",
    image: "/images/corporate/partner.png",
    textFirst: true,
  },
  {
    name: "Shankar Singh",
    role: "Yashmin Behera",
    excerpt:
      "Collaborating with Sanyukt Organisation in Odisha for environmental initiatives has been a rewarding journey. Together, we have organized impactful events promoting sustainability and environmental awareness. Their dedication, teamwork, and community focus make every project meaningful and inspiring.",
    image: "/images/corporate/partner.png",
    textFirst: false,
  },
] as const;

export function PartnersSpotlightSection() {
  return (
    <section className="mx-auto w-full bg-[#F8FAFC] px-6 py-16 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1072px]">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_42%,#2a97e8_100%)] bg-clip-text text-transparent text-[2rem] font-semibold leading-[1.2] tracking-tight sm:text-[2.25rem] md:text-[2.75rem]">
            Voices of Our Partners
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[0.95rem] leading-[1.65] text-[#697586] sm:text-[1rem]">
            {intro}
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {spotlights.map((entry) => (
            <div
              key={entry.name}
              className={`flex w-full flex-col items-center gap-8 text-center md:items-center md:justify-between md:gap-12 lg:gap-16 ${
                entry.textFirst
                  ? "md:flex-row md:text-left"
                  : "md:flex-row-reverse md:text-left"
              }`}
            >
              <div className="flex min-w-0 flex-1 flex-col items-center md:items-start md:text-left">
                <h3 className="text-[1.35rem] font-semibold text-[#39B54A] sm:text-[1.5rem]">
                  {entry.name}
                </h3>
                <p className="mt-1.5 text-[0.9rem] font-medium text-[#9ca3af] sm:text-[0.95rem]">
                  {entry.role}
                </p>
                <p className="mx-auto mt-4 max-w-[650px] text-[0.95rem] leading-[1.65] text-[#333840] md:pr-4 sm:text-[1rem] md:mx-0">
                  {entry.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#1a2434] transition-colors hover:text-[#39B54A] md:hidden"
                >
                  Read more{" "}
                  <ArrowUpRight
                    className="h-[18px] w-[18px]"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>

              <div className="relative h-[400px] w-full max-w-[520px] shrink-0 overflow-hidden rounded-2xl bg-[#eef2f6] md:mx-0">
                <Image
                  src={entry.image}
                  alt={entry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
