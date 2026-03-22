import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function TeamsSection() {
  return (
    <section className="mx-auto w-full px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-[1072px] flex-col items-center">
        
        {/* Header Content */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mb-4 text-[2.25rem] font-semibold tracking-tight text-[#1a2434] sm:text-[2.75rem]  leading-[1.2]">
            Join Our Teams - <br />
            <span className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent">Be a Change Maker!</span>
          </h2>
          <p className="mx-auto max-w-[650px] text-[0.95rem] leading-[1.65] text-[#697586] sm:text-[1.05rem]">
            At Sanyukt, our founder envisions a youth platform where young people can actively contribute to social work—not just as volunteers, but also in senior management roles. Explore exciting opportunities to make a real impact and shape the future of communities. Choose a team that aligns with your passion and skills
          </p>
        </div>

        {/* Rows */}
        <div className="flex w-full flex-col gap-16 md:gap-24">
          
          {/* Row 1: Governing Body */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between lg:gap-16">
            <div className="flex w-full flex-col items-center text-center md:max-w-[480px] md:items-start md:text-left">
              <div>
                <h3 className="mb-4 inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] md:text-[2.25rem]">
                  Governing Body
                </h3>
              </div>
              <p className="mb-6 text-[0.95rem] leading-[1.65] text-[#333840] sm:text-[1rem]">
                Lead and shape the future of Sanyukt! Roles include President, Vice President, General Secretary, Joint Secretary, Treasurer, and Advisor. Serve a 2-year term, bring your leadership, and help drive meaningful social change.<br/>
                Eligibility: 18+, higher secondary education, 2+ years in social/non-profit work, no criminal record.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[0.95rem] font-semibold text-[#1a2434] transition-colors hover:text-[#39B54A]"
                >
                  Apply now <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-2xl md:w-[520px]">
              <Image
                src="/images/team1.png"
                alt="Governing Body"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>

          {/* Row 2: Digital Team */}
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between lg:gap-16">
            <div className="flex w-full flex-col items-center text-center md:max-w-[480px] md:items-start md:text-left">
              <div>
                <h3 className="mb-4 inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] md:text-[2.25rem]">
                  Sanyukt Digital Team
                </h3>
              </div>
              <p className="mb-6 text-[0.95rem] leading-[1.65] text-[#333840] sm:text-[1rem]">
                Work from home and fuel Sanyukt's digital impact! Contribute through content writing, graphic design, video editing, tech support, and social media campaigns. Help us engage communities and expand our online presence.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[0.95rem] font-semibold text-[#1a2434] transition-colors hover:text-[#39B54A]"
                >
                  Apply now <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-2xl md:w-[520px]">
              <Image
                src="/images/team2.png"
                alt="Sanyukt Digital Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>

          {/* Row 3: Internship Team */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between lg:gap-16">
            <div className="flex w-full flex-col items-center text-center md:max-w-[480px] md:items-start md:text-left">
              <div>
                <h3 className="mb-4 inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent text-[1.75rem] font-semibold tracking-tight sm:text-[2rem] md:text-[2.25rem]">
                  Sanyukt Internship Team
                </h3>
              </div>
              <p className="mb-6 text-[0.95rem] leading-[1.65] text-[#333840] sm:text-[1rem]">
                Manage and grow the Sanyukt Internship Program! Key roles include Director, Joint Director, Head of Operations, and HR Manager. Term: 6 months - 1 year. Responsibilities include program supervision, event management, volunteer coordination, and more.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[0.95rem] font-semibold text-[#1a2434] transition-colors hover:text-[#39B54A]"
                >
                  Apply now <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-2xl md:w-[520px]">
              <Image
                src="/images/team3.png"
                alt="Sanyukt Internship Team"
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
