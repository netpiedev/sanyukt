"use client";

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Image as ImageIcon,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const donationCards = [
  {
    title: "Be the Chariot's guiding light! Donate to Rath Yatra's Eve",
    raised: "₹45,769",
    goal: "₹1,50,000",
    supporters: "65189 Supporters",
    daysLeft: "348 days left",
    progress: 31,
  },
  {
    title: "Be the Chariot's guiding light! Donate to Rath Yatra's Eve",
    raised: "₹45,769",
    goal: "₹1,50,000",
    supporters: "65189 Supporters",
    daysLeft: "348 days left",
    progress: 31,
  },
  {
    title: "Be the Chariot's guiding light! Donate to Rath Yatra's Eve",
    raised: "₹45,769",
    goal: "₹1,50,000",
    supporters: "65189 Supporters",
    daysLeft: "348 days left",
    progress: 31,
  },
  {
    title: "Be the Chariot's guiding light! Donate to Rath Yatra's Eve",
    raised: "₹45,769",
    goal: "₹1,50,000",
    supporters: "65189 Supporters",
    daysLeft: "348 days left",
    progress: 31,
  },
  {
    title: "Support community kitchens and keep hope warm this season",
    raised: "₹62,180",
    goal: "₹2,00,000",
    supporters: "71240 Supporters",
    daysLeft: "289 days left",
    progress: 38,
  },
  {
    title: "Help us fund safe learning spaces for young girls",
    raised: "₹84,300",
    goal: "₹2,40,000",
    supporters: "80412 Supporters",
    daysLeft: "301 days left",
    progress: 46,
  },
  {
    title: "Stand with village health drives and awareness camps",
    raised: "₹53,920",
    goal: "₹1,80,000",
    supporters: "59832 Supporters",
    daysLeft: "267 days left",
    progress: 34,
  },
];

function DonationCard({
  card,
  mobile = false,
}: {
  card: (typeof donationCards)[number];
  mobile?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#eef2f7] bg-white">
      <div className="relative flex h-[16rem] items-center justify-center bg-[#d8dde3] md:h-[15.8rem]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.34),transparent_34%),linear-gradient(315deg,rgba(255,255,255,0.18),transparent_32%)]" />
        <ImageIcon
          aria-hidden="true"
          className="relative z-10 h-14 w-14 text-[#97a4b1]"
          strokeWidth={1.8}
        />
        {mobile ? (
          <button
            type="button"
            className="absolute bottom-8 right-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#eef2f7] bg-white text-[#374151]"
            aria-label="Share campaign"
          >
            <Share2 aria-hidden="true" className="h-7 w-7" strokeWidth={2.1} />
          </button>
        ) : null}
      </div>

      <div className="px-8 py-7">
        <h3 className="text-[1.02rem] font-semibold leading-[1.45] tracking-[-0.03em] text-[#2a2f38] md:text-[0.96rem]">
          {card.title}
        </h3>

        <div className="mt-7">
          <p className="text-[0.8rem] font-medium text-[#a5afbc] md:text-[0.76rem]">
            Funds Raised
          </p>
          <div className="mt-3 h-4 rounded-full bg-[#f3f6fa]">
            <div
              className="h-full rounded-full bg-[var(--color-button)]"
              style={{ width: `${card.progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-[family-name:var(--font-geist-sans)] text-[1.05rem] font-bold tracking-[-0.03em] text-[#1f2937] md:text-[0.98rem]">
            <span>{card.raised}</span>
            <span>{card.goal}</span>
          </div>
        </div>

        <Link
          href="#"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d8e1ec] px-6 py-2.75 text-[0.94rem] font-medium text-[#121c2c] transition-colors duration-200 hover:border-[var(--color-button)] hover:text-[var(--color-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)]"
        >
          <span>Support a Cause</span>
          <Heart
            aria-hidden="true"
            className="h-5 w-5 fill-current"
            strokeWidth={2}
          />
        </Link>

        <div className="mt-6 flex items-center justify-between rounded-full bg-[#f1f4f8] px-5 py-3 text-[0.88rem] font-medium text-[#3f4752] md:text-[0.82rem]">
          <span>{card.supporters}</span>
          <span>{card.daysLeft}</span>
          {mobile ? null : (
            <span className="font-semibold text-[#121c2c]">Share now</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function DonationImpactSection() {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      setCardsPerView(window.innerWidth >= 768 ? 4 : 1);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % donationCards.length);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const carouselCards = useMemo(
    () => [...donationCards, ...donationCards.slice(0, cardsPerView)],
    [cardsPerView],
  );

  return (
    <section className="mx-auto w-full max-w-[1920px] bg-[#f7f9fc] py-20 md:py-24">
      <div className="mx-auto max-w-[42rem] text-center">
        <h2 className="text-[1.95rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#1a2434] sm:text-[2.7rem] md:text-[3.35rem]">
          <span className="block">Your Donation Means</span>
          <span className="mt-2 block bg-[linear-gradient(90deg,#35b86b_0%,#2eb8b9_46%,#2a97e8_100%)] bg-clip-text text-transparent">
            Another Smile
          </span>
        </h2>
      </div>

      <div className="mt-10 overflow-hidden md:mt-12">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${(100 / cardsPerView) * activeIndex}%)`,
          }}
        >
          {carouselCards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className="w-full flex-none px-3 first:pl-0 last:pr-0 md:w-[28%]"
            >
              <DonationCard card={card} mobile={cardsPerView === 1} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-5">
        <Link
          href="#"
          className="inline-flex min-w-[17rem] items-center justify-center gap-2 rounded-full bg-[var(--color-button)] px-7 py-3.25 text-[0.88rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-button)] md:min-w-[25rem]"
        >
          <span>Join the Movement and Change the Life</span>
          <Heart
            aria-hidden="true"
            className="h-4 w-4 fill-current"
            strokeWidth={2}
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#eef2f7] bg-white text-[#b8c1cb]"
            aria-label="Previous campaigns"
          >
            <ChevronLeft
              aria-hidden="true"
              className="h-7 w-7"
              strokeWidth={2.2}
            />
          </button>
          <button
            type="button"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#eef2f7] bg-white text-[#8e99a8]"
            aria-label="Next campaigns"
          >
            <ChevronRight
              aria-hidden="true"
              className="h-7 w-7"
              strokeWidth={2.2}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
