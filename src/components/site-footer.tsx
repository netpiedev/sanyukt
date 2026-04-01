"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Twitter,
} from "lucide-react";
import { Lexend_Deca } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FeedbackModal } from "@/components/feedback-modal";
import { SupportButton } from "@/components/support-button";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const footerColumns = [
  {
    title: "Who we are",
    links: [
      { label: "About us", href: "/about" },
      { label: "Vision", href: "#" },
      { label: "Mission", href: "#" },
      { label: "Our founder", href: "#" },
      { label: "Team Sanyukt", href: "/team" },
      { label: "Our Impact", href: "/impact" },
    ],
  },
  {
    title: "Our Campaigns",
    links: [
      { label: "Winter is coming", href: "#" },
      { label: "Green Odisha", href: "#" },
      { label: "Women Empowerment", href: "#" },
      { label: "The Biggest ride of India", href: "#" },
    ],
  },
  {
    title: "What we do",
    links: [
      { label: "Environment", href: "#" },
      { label: "Skilled Development", href: "#" },
      { label: "Women Empowerment", href: "#" },
      { label: "Food Security", href: "#" },
      { label: "Awareness", href: "#" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Volunteer", href: "#" },
      { label: "Members", href: "#" },
      { label: "Internship", href: "#" },
      { label: "Governing bodies", href: "#" },
      { label: "Tech circles", href: "#" },
      { label: "Corporate", href: "#" },
      { label: "CSR Opportunity", href: "#" },
    ],
  },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "Online Donation", href: "/donate" },
  { label: "Terms & Condition", href: "#" },
  { label: "Financial Report", href: "#" },
] as const;

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "X", href: "#", icon: Twitter },
  { label: "Threads", href: "#", icon: MessageSquareText },
] as const;

export function SiteFooter() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <footer className="bg-[#F8FAFC] py-[56px] px-[24px] sm:px-[40px] sm:py-[80px]">
      <div className="mx-auto flex flex-col w-full max-w-[1120px] gap-y-[24px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="text-center lg:text-left md:p-[24px]">
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/"
                className="inline-flex items-center rounded-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) scale-[0.82] origin-center lg:origin-left"
                aria-label="Sanyukt organisation home"
              >
                <Image
                  src="/images/footer-logo.png"
                  alt="Sanyukt organisation footer logo"
                  width={172}
                  height={68}
                  className="h-auto w-[8.8rem] max-w-none"
                  priority
                />
              </Link>
            </div>

            <h2 className="mt-6 text-[28px] font-bold md:font-semibold md:leading-[112.00000000000001%] leading-[120%] tracking-[-0.04em] sm:text-[32px] md:text-[40px] lg:max-w-lg">
              <span className="bg-[linear-gradient(90deg,#39B54A_0%,#25AAE1_100%)] bg-clip-text text-transparent">
                Bond of Togetherness
              </span>
            </h2>

            <p className="mx-auto my-4 max-w-lg text-balance text-[14px] leading-[24px] text-[#697586] sm:text-[16px]">
              We focus on voluntary involvement of people in our social work and
              every person who is associated to the community have their
              responsibility towards it&apos;s development and care.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:w-full lg:max-w-lg lg:justify-start">
              <SupportButton />
              <button
                type="button"
                onClick={() => setIsFeedbackOpen(true)}
                className="inline-flex h-10 w-[240px] cursor-pointer items-center justify-center gap-1 rounded-[48px] border border-[#CDD5DF] bg-white px-[16px] py-[8px] text-[16px] leading-[24px] font-medium text-[#121926] transition-colors duration-200 hover:border-(--color-button) hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) sm:w-auto sm:min-w-40"
              >
                <span>Share Feedback</span>
                <MessageSquareText
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={2}
                  color="#697586"
                />
              </button>
            </div>

            <div className="mt-7 text-center lg:text-left">
              <h3 className="text-[14px] leading-[20px] font-medium text-[#697586]">
                Contact us
              </h3>
              <div
                className={`${lexendDeca.className} mt-4 space-y-3 text-[0.85rem] text-[#718096]`}
              >
                <p className="flex items-start justify-center gap-2 text-center lg:justify-start lg:text-left">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 hidden h-4 w-4 shrink-0 text-[#7e8ba0] lg:block"
                    strokeWidth={2}
                  />
                  <span className="text-[14px] leading-[22px] md:leading-[22px]  tracking-[-0.01em] text-[#A1A9B5] md:text-[#697586]">
                    Plot No. 135/6523, Mancheswar, Rasulgarh, Odisha - 751010
                  </span>
                </p>
                <p className="flex items-center justify-center gap-2 text-center lg:justify-start lg:text-left">
                  <Phone
                    aria-hidden="true"
                    className="hidden h-4 w-4 shrink-0 text-[#7e8ba0] lg:block"
                    strokeWidth={2}
                  />
                  <span className="text-[14px] leading-[22px] md:leading-[22px]  tracking-[-0.01em] text-[#A1A9B5] md:text-[#697586]">
                    +91 7750843385
                  </span>
                </p>
                <p className="flex items-center justify-center gap-2 text-center lg:justify-start lg:text-left">
                  <Mail
                    aria-hidden="true"
                    className="hidden h-4 w-4 shrink-0 text-[#7e8ba0] lg:block"
                    strokeWidth={2}
                  />
                  <span className="text-[14px] leading-[22px] md:leading-[22px]  tracking-[-0.01em] text-[#27AAE1] md:text-[#697586]">
                    info@sanyuktorg.com
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-7 text-center lg:text-left">
              <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-start">
                <p className="text-[14px] leading-[20px] font-medium text-[#697586]">
                  Follow us on
                </p>
                <div className="flex items-center justify-center gap-6 md:gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="text-[#a2adbc] transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5"
                          strokeWidth={1.9}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="md:py-[24px] md:px-[16px] grid grid-cols-2 gap-x-8 gap-y-10 text-center sm:gap-x-[16px] lg:grid-cols-4 lg:text-left">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[14px] font-medium leading-[20px] text-[#121926]">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-4 text-[14px] leading-[20px] text-[#697586]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-[24px] md:pt-[40px] border-t border-[#E3E8EF]">
          <div className="flex flex-col items-center gap-6 text-center md:px-6 text-[14px] leading-[20px] text-[#697586] lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p>&copy; Sanyukt 2023, Inc • All Rights Reserved</p>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-1 lg:justify-between lg:gap-8 lg:pl-10">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FeedbackModal open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </footer>
  );
}
