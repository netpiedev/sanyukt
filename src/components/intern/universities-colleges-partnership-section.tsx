import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function UniversitiesCollegesPartnershipSection() {
  return (
    <section className="w-full px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-[1070px] flex-col items-center gap-10 md:flex-row md:justify-between md:gap-12">
        <div className="w-full text-center md:max-w-[500px] md:text-left">
          <h2 className="bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-[2rem] font-semibold leading-[1.2] tracking-tight text-transparent sm:text-[2.25rem]">
            Universities &amp; Colleges Partnership
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[0.95rem] leading-[1.75] text-[#333840] md:mx-0 md:max-w-none md:pr-16">
            We welcome collaborations with universities and colleges across
            India to provide students with impactful internship opportunities at
            Sanyukt Organisation. Partner institutions can connect with us via
            email: connect@intern.sanyuktorg.com and even customize workflows to
            align with their academic or departmental requirements, ensuring a
            seamless internship experience for their students.
          </p>
          <Link
            href="mailto:connect@intern.sanyuktorg.com"
            className="mt-4 inline-flex items-center gap-1 text-[1rem] font-medium text-[#1a2434] transition-colors hover:text-[#39B54A]"
          >
            Connect with us{" "}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
          </Link>
        </div>

        <div className="relative h-[400px] w-full max-w-[520px] shrink-0 overflow-hidden rounded-2xl bg-[#eef2f6]">
          <Image
            src="/images/intern/uni.png"
            alt="Students and faculty at partner institution"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
