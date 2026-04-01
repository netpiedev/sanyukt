"use client";

import {
  Cake,
  ClipboardCheck,
  Facebook,
  FileText,
  Heart,
  Instagram,
  Linkedin,
  ScanLine,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function FounderSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="our-founder" className="w-full bg-[#fcfcfc] py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6 lg:px-8">
        {/* Founder Text & Main Image */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-[1.05fr_1fr] md:gap-12 lg:gap-16 items-stretch">
          {/* Left: Main Image */}
          <div className="relative w-full aspect-4/3.5 md:aspect-auto md:h-full overflow-hidden rounded-[20px] shadow-sm mt-8 md:mt-0">
            <Image
              src="/images/about1.png"
              alt="SK Sahil Founder"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col pt-2 md:pt-4">
            <h2 className="mb-3 text-[16px] font-bold text-[#1a1f2e] md:text-[17px]">
              Meet the Founder
            </h2>
            <h3 className="mb-1 bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-4xl font-semibold leading-[1.1] tracking-tight text-transparent sm:text-[42px] md:text-4xl">
              SK Sahil
            </h3>
            <p className="mb-6 font-medium text-[#9ca3af] text-[14.5px] sm:text-[15.5px]">
              Founder
            </p>

            <div className="flex flex-col gap-5 text-[#333840] leading-[1.7] text-[14.5px] sm:text-[15px]">
              <p>
                In 2020, at just 18 years old, Sk. Sahil, then a college
                student, noticed how many young people around him were spending
                hours on social media, online gaming, and hanging out with
                friends without a clear direction.
              </p>
              <p>
                He realized this untapped energy could be channeled into
                something far more meaningful — a platform where youth could
                volunteer, lead, and drive real social change.
                {!isExpanded && (
                  <>
                    {" "}
                    <button
                      type="button"
                      onClick={() => setIsExpanded(true)}
                      className="font-semibold text-[#1a1f2e] cursor-pointer hover:text-[#35b86b] transition-colors"
                    >
                      Read more
                    </button>
                  </>
                )}
              </p>

              {isExpanded && (
                <>
                  <p>
                    Guided by this vision, Sahil founded Sanyukt Organisation,
                    Odisha's first fully youth-led NGO. His idea was
                    revolutionary: empower young people not only to volunteer
                    but also to take on leadership and management roles, shaping
                    them into future changemakers and senior leaders in social
                    work.
                  </p>
                  <p>
                    What began as a small group of friends soon grew into a
                    statewide youth movement. Today, Sanyukt inspires thousands
                    of young individuals across Odisha, demonstrating that with
                    purpose, passion, and guidance.{" "}
                    <button
                      type="button"
                      onClick={() => setIsExpanded(false)}
                      className="font-semibold text-[#1a1f2e] cursor-pointer hover:text-[#35b86b] transition-colors"
                    >
                      Read less
                    </button>
                  </p>
                </>
              )}
            </div>

            <div className="mt-7 flex items-center gap-5 text-gray-400">
              <Facebook className="h-[20px] w-[20px] cursor-pointer transition-colors hover:text-[#35b86b]" />
              <Linkedin className="h-[20px] w-[20px] cursor-pointer transition-colors hover:text-[#35b86b]" />
              <Instagram className="h-[20px] w-[20px] cursor-pointer transition-colors hover:text-[#35b86b]" />
            </div>
          </div>
        </div>

        {/* Image Gallery Bento Grid */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-[1fr_1.35fr_1fr] gap-3 md:gap-5 min-w-0">
          {/* Column 1 (Tall on desktop, left col on mobile) */}
          <div className="relative col-span-1 h-full min-h-[200px] md:min-h-0 md:h-[400px] lg:h-[460px] overflow-hidden rounded-[20px]">
            <Image
              src="/images/about2.png"
              alt="Award ceremony"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Column 2 (Wide on mobile, tall middle on desktop) */}
          <div className="relative col-span-2 md:col-span-1 order-last md:order-0 aspect-16/10 md:aspect-auto md:h-[400px] lg:h-[460px] overflow-hidden rounded-[20px]">
            <Image
              src="/images/about4.png"
              alt="Volunteers in yellow"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Column 3 — two stacked images */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-3 md:gap-5">
            <div className="relative flex-1 w-full aspect-square md:aspect-auto overflow-hidden rounded-[20px] min-h-[100px] md:min-h-[140px]">
              <Image
                src="/images/about6.png"
                alt="Feeding dog"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 w-full aspect-square md:aspect-auto overflow-hidden rounded-[20px] min-h-[100px] md:min-h-[140px]">
              <Image
                src="/images/about5.png"
                alt="Breast cancer awareness group"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Know Sanyukt Section */}
        <div className="mt-12 flex flex-col items-center justify-center pb-4">
          <h3 className="text-[20px] font-bold text-[#1a1f2e] mb-12">
            Know Sanyukt
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 text-center">
            <div className="flex flex-col items-center">
              <Heart
                className="h-9 w-9 sm:h-10 sm:w-10 text-[#2cb1e3] mb-3"
                strokeWidth={1.5}
              />
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2cb1e3] mb-1">
                5,00,00,000+
              </div>
              <div className="text-[12px] sm:text-[14px] font-medium text-[#333840]">
                Lives Impacted
              </div>
            </div>

            <div className="flex flex-col items-center">
              <ScanLine
                className="h-9 w-9 sm:h-10 sm:w-10 text-[#2cb1e3] mb-3"
                strokeWidth={1.5}
              />
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2cb1e3] mb-1">
                20+
              </div>
              <div className="text-[12px] sm:text-[13px] font-medium text-[#333840]">
                Districts Covered
              </div>
            </div>

            <div className="flex flex-col items-center">
              <UserCircle
                className="h-9 w-9 sm:h-10 sm:w-10 text-[#2cb1e3] mb-3"
                strokeWidth={1.5}
              />
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2cb1e3] mb-1">
                3,000+
              </div>
              <div className="text-[12px] sm:text-[14px] font-medium text-[#333840]">
                Volunteers & Members
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Cake
                className="h-9 w-9 sm:h-10 sm:w-10 text-[#2cb1e3] mb-3"
                strokeWidth={1.5}
              />
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2cb1e3] mb-1">
                23 February 2020
              </div>
              <div className="text-[12px] sm:text-[14px] font-medium text-[#333840]">
                Established on
              </div>
            </div>

            <div className="flex flex-col items-center">
              <FileText
                className="h-9 w-9 sm:h-10 sm:w-10 text-[#2cb1e3] mb-3"
                strokeWidth={1.5}
              />
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2cb1e3] mb-1">
                12A
              </div>
              <div className="text-[12px] sm:text-[14px] font-medium text-[#333840]">
                Registered
              </div>
            </div>

            <div className="flex flex-col items-center">
              <ClipboardCheck
                className="h-9 w-9 sm:h-10 sm:w-10 text-[#2cb1e3] mb-3"
                strokeWidth={1.5}
              />
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2cb1e3] mb-1">
                80G
              </div>
              <div className="text-[12px] sm:text-[14px] font-medium text-[#333840]">
                Registered
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-[12px] sm:text-[13px] text-[#697586] font-medium tracking-wide">
            Registered as per the Indian Trusts Act, 1882
          </div>
        </div>
      </div>
    </section>
  );
}
