"use client";

import Image from "next/image";
import { useState } from "react";
import { CreditCard, Landmark, Link as LinkIcon, Smartphone } from "lucide-react";

export function DonateHero() {
  const [amount, setAmount] = useState<string>("");

  return (
    <section className="relative z-0 mx-auto w-full max-w-[1152px] px-6 py-12 md:px-8 md:py-16 lg:py-20 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-stretch">
        {/* Left Content - Images */}
        <div className="flex w-full flex-col gap-8 sm:gap-10 lg:h-full">
          {/* Top Image */}
          <div className="relative w-full flex-[1] min-h-[200px] sm:min-h-[250px] lg:min-h-0 overflow-hidden rounded-[20px] sm:rounded-[32px]">
            <Image
              src="/images/donate-1.png"
              alt="Donate to help communities"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Bottom Images */}
          <div className="grid flex-[1.4] grid-cols-2 gap-5 sm:gap-6 min-h-[180px] sm:min-h-[220px] lg:min-h-0">
            <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[24px]">
              <Image
                src="/images/donate-2.png"
                alt="Support individuals in need"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>
            <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[24px]">
              <Image
                src="/images/donate-3.png"
                alt="Empower lasting change"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="flex flex-col w-full bg-white max-lg:mx-auto max-lg:max-w-2xl px-2 sm:px-0">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1a1f2e] md:text-[2.4rem] leading-[1.2]">
            Donate to help
          </h1>
          <p className="mt-3 text-[14px] sm:text-[15px] text-gray-400 leading-[1.6]">
            Your Donation helps us provide essential services, support communities in need, and create lasting positive change. Together, we can make a difference.
          </p>

          <form className="mt-6 flex flex-col gap-5 border-t border-transparent" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1a1f2e]">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-[13px] text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1a1f2e]">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-[13px] text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#1a1f2e]">Leave a message</label>
              <textarea
                placeholder="Type something here..."
                className="w-full min-h-[80px] resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-[13px] text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#1a1f2e]">Desired Donation</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-[13px]">₹</span>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-xl border-2 border-gray-200 pl-8 pr-4 py-3 text-[13px] text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
                  />
                </div>
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
                  {[2500, 5000, 7500].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt.toString())}
                      className="whitespace-nowrap rounded-xl bg-[#f8f9fb] px-4 sm:px-5 py-3 text-[13px] font-medium text-gray-400 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3eb161]/30"
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#1a1f2e]">Select Payment Method</label>
              {/* Payment Methods Grid matching the image */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-1">
                {[
                  { id: "upi", label: "UPI Payment", icon: <Smartphone className="h-4 w-4 text-blue-500" /> },
                  { id: "netbanking", label: "Net Banking", icon: <LinkIcon className="h-4 w-4 text-emerald-500" /> },
                  { id: "debit", label: "Debit Card", icon: <CreditCard className="h-4 w-4 text-orange-500" /> },
                  { id: "credit", label: "Credit Card", icon: <CreditCard className="h-4 w-4 text-blue-600" /> },
                  { id: "bank", label: "Bank Transfer", icon: <Landmark className="h-4 w-4 text-cyan-500" /> },
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white p-2.5 hover:border-gray-300 hover:shadow-sm focus:border-[#3eb161] focus:outline-none focus:ring-1 focus:ring-[#3eb161] transition-all"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white transition-colors">
                      {method.icon}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-500 text-center leading-tight">
                      {method.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-[14px] bg-[#34c759] py-3 sm:py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-green-500/20 transition-transform active:scale-[0.98] hover:bg-[#30b551] flex items-center justify-center gap-2"
            >
              Donate now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-[16px] h-[16px] mb-[1px]"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      
      {/* Hide scrollbar utility class */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
