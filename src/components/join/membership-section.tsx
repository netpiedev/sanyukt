import { Check, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export function MembershipSection() {
  return (
    <section className="mx-auto w-full bg-[#f8fafc] px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[1072px]">
        <div className="mb-12 text-center">
          <h2 className="bg-[linear-gradient(90deg,#39B54A_0%,#25AAE1_100%)] bg-clip-text text-[2.15rem] font-semibold tracking-tight text-transparent sm:text-[3rem]">
            Membership
          </h2>
          <p className="mt-2 text-[1rem] text-[#697586] sm:text-[0.95rem]">
            Join Our Family. Be a party of Our Story
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-between">
          {/* Silver Card */}
          <div className="flex w-full shrink-0 flex-col rounded-3xl border border-[#E3E8EF] bg-[linear-gradient(182.69deg,#EAEFF3_2.24%,#E5E6E8_195.77%)] p-8 md:w-[524px]">
            <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-white">
              <svg width="40" height="44" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 0L44 10V26C44 37 22 48 22 48C22 48 0 37 0 26V10L22 0Z" fill="#E2E8F0"/>
                <path d="M22 6L36 12.5V25C36 33 22 40 22 40C22 40 8 33 8 25V12.5L22 6Z" fill="#64748B"/>
                <text x="22" y="29.5" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">S</text>
              </svg>
            </div>

            <h3 className="text-[0.85rem] font-bold tracking-widest text-[#333840]">
              SILVER MEMBERSHIP
            </h3>

            <div className="mt-2 text-[2.4rem] font-bold tracking-tight text-[#27AAE1]">
              <span>₹</span>1000<span >/year</span>
            </div>

            <p className="mt-2 text-[0.95rem] font-medium leading-[1.6] text-[#1a2434]">
              Unlock exclusive recognition and benefits with Sanyukt's Premium Membership.
            </p>

            <ul className="mb-10 mt-6 flex flex-1 flex-col gap-4 text-[0.95rem] font-medium text-[#475467]">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Personalized Certificate of Membership</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Exclusive Silver Membership Card</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Volunteer With Sanyukt</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Link
                href="/donate"
                className="inline-flex h-10 w-[212px] items-center justify-center gap-2 rounded-full bg-white text-[0.95rem] font-bold text-[#1a2434] transition-all hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
              >
                <span>Get membership now</span>
                <Heart className="h-[1.1rem] w-[1.1rem] fill-[#1a2434] text-[#1a2434]" strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Premium Card */}
          <div className="flex w-full shrink-0 flex-col rounded-3xl border border-[#FDDEB9] bg-[linear-gradient(182.58deg,#FBFAF9_-2.31%,#FDDEB9_155.04%)] p-8 md:w-[524px]">
            <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-[#fae0ba]">
              <svg width="40" height="44" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 0L44 10V26C44 37 22 48 22 48C22 48 0 37 0 26V10L22 0Z" fill="#FDE68A"/>
                <path d="M22 6L36 12.5V25C36 33 22 40 22 40C22 40 8 33 8 25V12.5L22 6Z" fill="#eab308"/>
                <text x="22" y="29.5" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">S</text>
              </svg>
            </div>

            <h3 className="text-[0.85rem] font-bold tracking-widest text-[#333840]">
              PREMIUM MEMBERSHIP
            </h3>

            <div className="mt-2 text-[2.4rem] font-bold tracking-tight text-[#AF6915]">
              <span>₹</span>8000<span>/year</span>
            </div>

            <p className="mt-2 text-[0.95rem] font-medium leading-[1.6] text-[#1a2434]">
              Unlock exclusive recognition and benefits with Sanyukt's Premium Membership.
            </p>

            <ul className="mb-10 mt-6 flex flex-1 flex-col gap-4 text-[0.95rem] font-medium text-[#475467]">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Personalized Certificate of Membership</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Exclusive Premium Membership Card</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Elegant Framed Memento</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Special Welcome Kit with Icon</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#333840]" strokeWidth={2} />
                <span>Branded Sanyukt T-Shirt</span>
              </li>
            </ul>

            <div className="mt-auto flex flex-col items-center gap-5 sm:flex-row">
              <Link
                href="/donate"
                className="inline-flex h-10 w-[212px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#F7941D] text-[0.95rem] font-bold text-white transition-all hover:bg-[#ea8c16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f49b25]"
              >
                <span>Get membership now</span>
                <Heart className="h-[1.1rem] w-[1.1rem] fill-white text-white" strokeWidth={2} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 text-[0.9rem] font-semibold text-[#1a2434] transition-colors hover:text-[#f49b25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f49b25]"
              >
                <span>Contact us</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
