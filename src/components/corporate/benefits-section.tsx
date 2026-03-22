import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BenefitsSection() {
  return (
    <section className="mx-auto w-full px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-[1072px] flex-col items-center">
        <div className="flex w-full flex-col gap-16 md:gap-24">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between lg:gap-16">
            <div className="flex w-full flex-col items-center text-center md:max-w-[480px] md:items-start md:text-left">
              <div>
                <h3 className="mb-4 inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] md:text-[2.25rem]">
                  CSR Partnerships
                </h3>
              </div>
              <p className="mb-6 text-[0.95rem] leading-[1.65] text-[#333840] sm:text-[1rem]">
                Partner with Sanyukt to create meaningful social impact. Our CSR
                initiatives focus on education, healthcare, environmental
                sustainability, and community empowerment. We help organizations
                design and implement programs that deliver measurable results,
                fostering positive change and strengthening communities.
                Together, we can build a more inclusive and resilient society.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#1a2434] transition-colors hover:text-[#39B54A]"
                >
                  Read more{" "}
                  <ArrowUpRight
                    className="h-[18px] w-[18px]"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-2xl md:w-[520px]">
              <Image
                src="/images/corporate/corporate5.png"
                alt="CSR Partnerships"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between lg:gap-16">
            <div className="flex w-full flex-col items-center text-center md:max-w-[480px] md:items-start md:text-left">
              <div>
                <h3 className="mb-4 inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] md:text-[2.25rem]">
                  Collaborations
                </h3>
              </div>
              <p className="mb-6 text-[0.95rem] leading-[1.65] text-[#333840] sm:text-[1rem]">
                Sanyukt invites NGOs, corporates, and community organizations to
                collaborate for social transformation. By sharing resources,
                knowledge, and expertise, we implement impactful programs that
                reach diverse communities. Every collaboration strengthens
                networks, enhances social welfare, and promotes sustainable
                change. Join us in building initiatives that leave lasting,
                positive footprints in society.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#1a2434] transition-colors hover:text-[#39B54A]"
                >
                  Read more{" "}
                  <ArrowUpRight
                    className="h-[18px] w-[18px]"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-2xl md:w-[520px]">
              <Image
                src="/images/corporate/corporate6.png"
                alt="Collaborations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between lg:gap-16">
            <div className="flex w-full flex-col items-center text-center md:max-w-[480px] md:items-start md:text-left">
              <div>
                <h3 className="mb-4 inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] md:text-[2.25rem]">
                  Employee Engagement
                </h3>
              </div>
              <p className="mb-6 text-[0.95rem] leading-[1.65] text-[#333840] sm:text-[1rem]">
                Engage your employees in Sanyukt’s community programs and social
                initiatives. Volunteering, mentoring, and awareness campaigns
                create meaningful experiences, foster teamwork, and instill a
                culture of giving back. Our initiatives empower employees to
                make a difference while promoting personal growth, social
                responsibility, and stronger connections within the communities
                they serve.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[#1a2434] transition-colors hover:text-[#39B54A]"
                >
                  Read more{" "}
                  <ArrowUpRight
                    className="h-[18px] w-[18px]"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-2xl md:w-[520px]">
              <Image
                src="/images/corporate/corporate7.png"
                alt="Employee Engagement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
