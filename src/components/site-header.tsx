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
      className="h-3.5 w-3.5 fill-current"
      strokeWidth={2}
    />
  );
}

function MenuIcon({ open = false }: { open?: boolean }) {
  return open ? (
    <X aria-hidden="true" className="h-6 w-6" strokeWidth={2.2} />
  ) : (
    <Menu aria-hidden="true" className="h-6 w-6" strokeWidth={2.2} />
  );
}

function ArrowRight() {
  return (
    <ChevronRight
      aria-hidden="true"
      className="h-4 w-4 text-[var(--color-muted)] transition-transform duration-200 group-hover:translate-x-0.5"
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
        className="rounded-full px-3 py-2 text-[0.96rem] font-medium text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.96rem] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)] ${
          isOpen
            ? "bg-[var(--color-soft-green)] text-[var(--color-text)]"
            : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
        }`}
        onMouseEnter={() => onOpen(index)}
      >
        <span>{item.label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.8}
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={item.label}
        className={`absolute left-0 top-[calc(100%+1.2rem)] w-[min(19rem,30vw)] origin-top-left rounded-[1.1rem] border border-black/5 bg-[var(--color-surface)] p-2 shadow-[0_22px_45px_rgba(16,44,25,0.18)] transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="overflow-hidden rounded-[0.9rem]">
          {item.children.map((child) => (
            <li
              key={child.label}
              className="border-b border-[var(--color-line)] last:border-b-0"
            >
              <Link
                href={child.href}
                role="menuitem"
                className="group flex items-center justify-between gap-4 px-4 py-3 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:bg-[#f8fbf6] focus-visible:outline-none focus-visible:bg-[#f8fbf6]"
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
    <header ref={headerRef} className="bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1920px] px-6 py-7 sm:px-8 lg:px-10">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between gap-4"
        >
          <BrandMark />

          <div className="hidden min-[1100px]:flex min-[1100px]:flex-1 min-[1100px]:items-center min-[1100px]:justify-between min-[1100px]:gap-8">
            <div className="flex items-center gap-2">
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

            <div className="flex items-center gap-3">
              {actionNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)] ${
                    item.variant === "solid"
                      ? "border-[var(--color-button)] bg-[var(--color-button)] text-white hover:-translate-y-0.5 hover:brightness-105"
                      : item.variant === "outline"
                        ? "border-[var(--color-border-strong)] bg-white text-[var(--color-text)] hover:border-[var(--color-button)] hover:text-[var(--color-button)]"
                        : "border-transparent bg-transparent px-2 text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {item.variant === "ghost" ? (
                    <>
                      <span>Talk to us</span>
                      <CircleHelp
                        aria-hidden="true"
                        className="h-4 w-4 text-[var(--color-muted)]"
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

          <div className="flex items-center gap-3 min-[1100px]:hidden">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-button)] px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
            >
              Donate now
            </Link>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-[var(--color-muted)] transition-colors duration-200 hover:bg-[var(--color-soft-green)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
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
            mobileOpen
              ? "mt-6 max-h-[48rem] opacity-100"
              : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-soft-green)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
            <div className="space-y-2">
              {primaryNav.map((item, index) => {
                const hasChildren = Boolean(item.children?.length);
                const expanded = mobileExpanded.includes(index);

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href ?? "#"}
                      className="flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-[var(--color-text)] shadow-[0_10px_20px_rgba(16,44,25,0.06)]"
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
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`mobile-section-${index}`}
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
                      onClick={() => toggleMobileSection(index)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.8}
                      />
                    </button>

                    <div
                      id={`mobile-section-${index}`}
                      className={`overflow-hidden transition-[max-height,opacity,padding] duration-250 ease-out ${
                        expanded
                          ? "max-h-96 px-2 pb-2 opacity-100"
                          : "max-h-0 px-2 pb-0 opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-[1rem] border border-[var(--color-line)] bg-[#fbfcfa]">
                        {item.children?.map((child) => (
                          <li
                            key={child.label}
                            className="border-b border-[var(--color-line)] last:border-b-0"
                          >
                            <Link
                              href={child.href}
                              className="flex items-center justify-between px-4 py-3 text-sm text-[var(--color-text)]"
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
                      ? "border-[var(--color-button)] bg-[var(--color-button)] text-white"
                      : item.variant === "outline"
                        ? "border-[var(--color-border-strong)] bg-white text-[var(--color-text)]"
                        : "border-transparent bg-white text-[var(--color-text)]"
                  }`}
                >
                  {item.variant === "ghost" ? (
                    <>
                      <span>Talk to us</span>
                      <CircleHelp
                        aria-hidden="true"
                        className="h-4 w-4 text-[var(--color-muted)]"
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
