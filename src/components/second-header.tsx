"use client";

import { CircleHelp, Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { actionNav } from "@/data/navigation";

const secondaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fundraise", href: "/donate" },
  { label: "Our Reach", href: "/impact" },
  { label: "Join Us", href: "/join" },
  { label: "Team", href: "/team" },
];

function HeartIcon() {
  return (
    <Heart
      aria-hidden="true"
      className="h-4 w-4 fill-current"
      strokeWidth={2}
    />
  );
}

function MenuIcon({ open = false }: { open?: boolean }) {
  return open ? (
    <X aria-hidden="true" className="h-7 w-7" strokeWidth={2.2} />
  ) : (
    <Menu aria-hidden="true" className="h-7 w-7" strokeWidth={2.2} />
  );
}

export function SecondHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="relative z-50 bg-(--color-surface) min-[1100px]:h-[104px]">
      <div className="mx-auto max-w-[1920px] p-6 min-[1100px]:h-full min-[1100px]:px-20 min-[1100px]:py-8">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between gap-[40px] min-[1100px]:h-full"
        >
          <BrandMark />

          <div className="hidden min-[1100px]:flex min-[1100px]:flex-1 min-[1100px]:items-center min-[1100px]:justify-between min-[1100px]:gap-8">
            <div className="flex items-center gap-3">
              {secondaryNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[48px] p-2 text-[16px] leading-[24px] font-normal text-[#697586] transition-colors duration-200 hover:text-[#121926] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {actionNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center justify-center rounded-[48px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) ${
                    item.variant === "solid"
                      ? "h-10 gap-1 border-(--color-button) bg-(--color-button) px-4 py-2 text-[16px] leading-[24px] font-medium text-white hover:-translate-y-0.5 hover:brightness-105"
                      : item.variant === "outline"
                        ? "h-10 gap-1 border-[#CDD5DF] bg-white px-4 py-2 text-[16px] leading-[24px] font-medium text-[#333840]"
                        : "group h-10 gap-1 border-transparent bg-transparent px-2 text-[16px] leading-[24px] font-normal text-[#697586] hover:text-[#121926]"
                  }`}
                >
                  {item.variant === "ghost" ? (
                    <>
                      <span>Talk to us</span>
                      <CircleHelp
                        aria-hidden="true"
                        className="h-4 w-4 text-[#697586] group-hover:text-[#121926]"
                        strokeWidth={2}
                      />
                    </>
                  ) : (
                    <>
                      <span>{item.label}</span>
                      {item.icon ? <HeartIcon /> : null}
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center min-[1100px]:hidden">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-second-menu"
              className="inline-flex items-center justify-center rounded-full p-2 text-[#697586] transition-colors duration-200 hover:bg-(--color-soft-green) hover:text-[#333840] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
              onClick={() => setMobileOpen((current) => !current)}
            >
              <span className="sr-only">Toggle navigation</span>
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </nav>

        <div
          id="mobile-second-menu"
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out min-[1100px]:hidden ${
            mobileOpen ? "mt-6 max-h-192 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.6rem] border border-(--color-line) bg-(--color-soft-green) p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
            <div className="space-y-2">
              {secondaryNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-(--color-text) shadow-[0_10px_20px_rgba(16,44,25,0.06)]"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3">
              {actionNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    item.variant === "solid"
                      ? "border-(--color-button) bg-(--color-button) text-white"
                      : item.variant === "outline"
                        ? "border-(--color-border-strong) bg-white text-(--color-text)"
                        : "border-transparent bg-white text-(--color-text)"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.variant === "ghost" ? (
                    <>
                      <span>Talk to us</span>
                      <CircleHelp
                        aria-hidden="true"
                        className="h-4 w-4 text-(--color-muted)"
                        strokeWidth={2}
                      />
                    </>
                  ) : (
                    <>
                      <span>{item.label}</span>
                      {item.icon ? <HeartIcon /> : null}
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
