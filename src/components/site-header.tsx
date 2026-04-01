"use client";

import {
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Heart,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { actionNav, type NavItem, primaryNav } from "@/data/navigation";

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

function ArrowRight() {
  return (
    <ChevronRight
      aria-hidden="true"
      className="h-4 w-4 text-[#A1A9B5]"
      strokeWidth={1.8}
    />
  );
}

function DropdownCard({
  item,
  index,
  isOpen,
  onOpen,
}: {
  item: NavItem;
  index: number;
  isOpen: boolean;
  onOpen: (index: number) => void;
}) {
  const menuId = useId();

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        className="rounded-[48px] p-2 text-[16px] leading-[24px] font-normal text-[#697586] transition-colors duration-200 hover:text-[#121926] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative z-50">
      <Link
        href={item.href ?? "#"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={`flex items-center gap-1 rounded-[48px] p-2 text-[16px] leading-[24px] font-normal transition-colors duration-200 hover:text-[#121926] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) ${
          isOpen ? "text-[#121926]" : "text-[#697586]"
        }`}
        onMouseEnter={() => onOpen(index)}
      >
        <span>{item.label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 text-[#697586] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.8}
        />
      </Link>

      <div
        id={menuId}
        role="menu"
        aria-label={item.label}
        className={`absolute left-0 top-full z-50 w-[280px] origin-top-left rounded-[8px] bg-(--color-surface) shadow-[0_24px_40px_rgba(0,0,0,0.08)] transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="overflow-hidden rounded-[8px]">
          {item.children.map((child, childIndex) => (
            <li
              key={child.label}
              className={`border-b border-[#EEF2F6] last:border-b-0 ${
                childIndex === 0 ? "group hover:border-white" : ""
              }`}
            >
              <Link
                href={child.href}
                role="menuitem"
                className="flex items-center justify-between gap-4 px-4 py-2 text-[13px] leading-[20px] font-normal text-[#333840] transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:bg-[#F8FAFC]"
              >
                <span>{child.label}</span>
                {childIndex === 0 ? (
                  <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <ArrowRight />
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [openDesktopMenu, setOpenDesktopMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number[]>([]);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDesktopMenu(null);
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (openDesktopMenu === null) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setOpenDesktopMenu(null);
      }
    }

    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [openDesktopMenu]);

  const toggleMobileSection = (index: number) => {
    setMobileExpanded((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  return (
    <header
      ref={headerRef}
      className="relative z-50 bg-(--color-surface) min-[1100px]:h-[104px]"
    >
      <div className="mx-auto max-w-[1920px] p-6 min-[1100px]:h-full min-[1100px]:px-20 min-[1100px]:py-8">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between gap-[40px] min-[1100px]:h-full"
        >
          <BrandMark />

          <div className="hidden min-[1100px]:flex min-[1100px]:flex-1 min-[1100px]:items-center min-[1100px]:justify-between min-[1100px]:gap-8">
            <div className="flex items-center gap-3">
              {primaryNav.map((item, index) => (
                <DropdownCard
                  key={item.label}
                  item={item}
                  index={index}
                  isOpen={openDesktopMenu === index}
                  onOpen={setOpenDesktopMenu}
                />
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

          <div className="flex items-center gap-2 min-[1100px]:hidden">
            <Link
              href="/donate"
              className="inline-flex h-8 items-center justify-center rounded-[48px] bg-[#39B54A] px-3 text-[14px] leading-[20px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
            >
              Donate now
            </Link>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center text-[#697586] transition-colors duration-200 hover:bg-(--color-soft-green) hover:text-[#333840] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button)"
              onClick={() => setMobileOpen((current) => !current)}
            >
              <span className="sr-only">Toggle navigation</span>
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out min-[1100px]:hidden ${
            mobileOpen ? "mt-6 max-h-192 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.6rem] border border-(--color-line) bg-(--color-soft-green) p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
            <div className="space-y-2">
              {primaryNav.map((item, index) => {
                const hasChildren = Boolean(item.children?.length);
                const expanded = mobileExpanded.includes(index);

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href ?? "#"}
                      className="flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-(--color-text) shadow-[0_10px_20px_rgba(16,44,25,0.06)]"
                    >
                      <span>{item.label}</span>
                      <ArrowRight />
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] bg-white shadow-[0_10px_20px_rgba(16,44,25,0.06)]"
                  >
                    <div className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-(--color-text)">
                      <Link
                        href={item.href ?? "#"}
                        className="flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) rounded-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`mobile-section-${index}`}
                        className="p-1 -mr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-button) rounded-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileSection(index);
                        }}
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expanded ? "rotate-180" : ""
                          }`}
                          strokeWidth={1.8}
                        />
                      </button>
                    </div>

                    <div
                      id={`mobile-section-${index}`}
                      className={`overflow-hidden transition-[max-height,opacity,padding] duration-250 ease-out ${
                        expanded
                          ? "max-h-96 px-2 pb-2 opacity-100"
                          : "max-h-0 px-2 pb-0 opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-2xl border border-(--color-line) bg-[#fbfcfa]">
                        {item.children?.map((child) => (
                          <li
                            key={child.label}
                            className="border-b border-(--color-line) last:border-b-0"
                          >
                            <Link
                              href={child.href}
                              className="flex items-center justify-between px-4 py-3 text-sm text-(--color-text)"
                            >
                              <span>{child.label}</span>
                              <ArrowRight />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
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
