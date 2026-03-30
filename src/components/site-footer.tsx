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
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { SupportCauseButton } from "@/components/home/support-cause-button";

const footerColumns = [
  {
    title: "Who we are",
    links: [
      "About us",
      "Vision",
      "Mission",
      "Our founder",
      "Team Sanyukt",
      "Our Impact",
    ],
  },
  {
    title: "Our Campaigns",
    links: [
      "Winter is coming",
      "Green Odisha",
      "Women Empowerment",
      "The Biggest ride of India",
    ],
  },
  {
    title: "What we do",
    links: [
      "Environment",
      "Skilled Development",
      "Women Empowerment",
      "Food Security",
      "Awareness",
    ],
  },
  {
    title: "Get Involved",
    links: [
      "Volunteer",
      "Members",
      "Internship",
      "Governing bodies",
      "Tech circles",
      "Corporate",
      "CSR Opportunity",
    ],
  },
] as const;

const legalLinks = [
  "Privacy Policy",
  "Blog",
  "Online Donation",
  "Terms & Condition",
  "Financial Report",
] as const;

const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Instagram", icon: Instagram },
  { label: "X", icon: Twitter },
  { label: "Threads", icon: MessageSquareText },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#f7f9fc] pt-18 md:pt-22">
      <div className="mx-auto w-full max-w-[1152px] px-6 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <BrandMark className="scale-[0.82] origin-center lg:origin-left" />
            </div>

            <h2 className="mt-6 text-[1.95rem] font-semibold leading-[1.03] tracking-[-0.055em] sm:text-[2.4rem] md:text-[2.65rem] lg:max-w-lg">
              <span className="bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-transparent">
                Bond of Togetherness
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-balance text-[0.82rem] leading-[1.7] text-[#718096] sm:text-[0.9rem] lg:mx-0">
              We focus on voluntary involvement of people in our social work and
              every person who is associated to the community have their
              responsibility towards it&apos;s development and care.
            </p>

            <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:w-full lg:max-w-lg lg:justify-start">
              <SupportCauseButton className="w-full sm:w-auto sm:min-w-40 px-6 py-3 text-[0.8rem] font-semibold" />
              <Link
                href="#"
                className="inline-flex w-full sm:w-auto sm:min-w-40 items-center justify-center gap-3 rounded-full border border-[#cfd8e4] bg-white px-5 py-3 text-[0.8rem] font-semibold text-[#1a2434] transition-colors duration-200 hover:border-(--color-button) hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
              >
                <span>Share Feedback</span>
                <MessageSquareText
                  aria-hidden="true"
                  className="h-4.5 w-4.5"
                  strokeWidth={2}
                />
              </Link>
            </div>

            <div className="mt-7 text-center lg:text-left">
              <h3 className="text-[0.82rem] font-semibold text-[#6d7d90]">
                Contact us
              </h3>
              <div className="mt-4 space-y-3 text-[0.85rem] text-[#718096]">
                <p className="flex items-start justify-center gap-3 text-center lg:justify-start lg:text-left">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 hidden h-4 w-4 shrink-0 text-[#7e8ba0] lg:block"
                    strokeWidth={2}
                  />
                  <span>
                    Plot No. 135/6523, Mancheswar, Rasulgarh, Odisha - 751010
                  </span>
                </p>
                <p className="flex items-center justify-center gap-3 text-center lg:justify-start lg:text-left">
                  <Phone
                    aria-hidden="true"
                    className="hidden h-4 w-4 shrink-0 text-[#7e8ba0] lg:block"
                    strokeWidth={2}
                  />
                  <span>+91 7750843385</span>
                </p>
                <p className="flex items-center justify-center gap-3 text-center lg:justify-start lg:text-left">
                  <Mail
                    aria-hidden="true"
                    className="hidden h-4 w-4 shrink-0 text-[#7e8ba0] lg:block"
                    strokeWidth={2}
                  />
                  <span>info@sanyuktorg.com</span>
                </p>
              </div>
            </div>

            <div className="mt-7 text-center lg:text-left">
              <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-start">
                <p className="text-[0.82rem] font-semibold text-[#6d7d90]">
                  Follow us on
                </p>
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href="#"
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

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-center sm:gap-x-10 lg:grid-cols-4 lg:text-left">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[0.88rem] font-semibold text-[#1a2434]">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-5 text-[0.85rem] text-[#718096]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[#dde4ec] pt-10 pb-12">
          <div className="flex flex-col items-center gap-6 text-center text-[0.85rem] text-[#718096] lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p>&copy; Sanyukt 2023, Inc • All Rights Reserved</p>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-1 lg:justify-between lg:gap-8 lg:pl-10">
              {legalLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="transition-colors duration-200 hover:text-(--color-button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
