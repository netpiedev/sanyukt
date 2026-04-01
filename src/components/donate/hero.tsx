"use client";

import {
  CreditCard,
  Landmark,
  Link as LinkIcon,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");

  return (
    <section className="relative z-0 w-full px-6 py-10 min-[1100px]:px-10 min-[1100px]:py-[120px]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-[40px]">
        <div className="flex flex-col gap-4 sm:gap-6 lg:h-full">
          <div className="relative h-[220px] w-full overflow-hidden rounded-[16px] min-[1100px]:h-[280px]">
            <Image
              src="/images/donate-1.png"
              alt="Donate to help communities"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:flex-1 lg:min-h-0">
            <div className="relative w-full aspect-square overflow-hidden rounded-[16px] lg:h-full lg:aspect-auto">
              <Image
                src="/images/donate-2.png"
                alt="Support individuals in need"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-[16px] lg:h-full lg:aspect-auto">
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

        <div className="flex w-full flex-col gap-4 bg-white px-0 min-[1100px]:px-6">
          <div>
            <h1 className="text-[32px] font-semibold leading-[120%] tracking-[-0.04em] text-[#333840] min-[1100px]:text-[40px]">
              Donate to help
            </h1>
            <p className="mt-2 text-[16px] font-normal leading-[24px] text-[#A1A9B5]">
              Your Donation helps us provide essential services, support
              communities in need, and create lasting positive change. Together,
              we can make a difference.
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[16px] font-semibold leading-[24px] text-[#121926]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-10 w-full rounded-[8px] border-2 border-[#EEF2F6] px-4 py-2 text-[16px] leading-[24px] font-normal text-[#121926] placeholder:text-[#697586] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[16px] font-semibold leading-[24px] text-[#121926]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-10 w-full rounded-[8px] border-2 border-[#EEF2F6] px-4 py-2 text-[16px] leading-[24px] font-normal text-[#121926] placeholder:text-[#697586] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[16px] font-semibold leading-[24px] text-[#121926]">
                  Leave a message
                </label>
                <textarea
                  placeholder="Type something here..."
                  className="w-full min-h-[80px] resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-[16px] leading-[24px] font-normal text-[#121926] placeholder:text-[#697586] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[16px] font-semibold leading-[24px] text-[#121926]">
                  Desired Donation
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#697586] text-[16px] leading-[24px] font-normal">
                      ₹
                    </span>
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="h-10 w-full rounded-[8px] border-2 border-[#EEF2F6] py-2 pl-8 pr-4 text-[16px] leading-[24px] font-normal text-[#121926] placeholder:text-[#697586] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3eb161] transition-all bg-white"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
                    {[2500, 5000, 7500].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setAmount(amt.toString())}
                        className="whitespace-nowrap rounded-[8px] bg-[#F8FAFC] p-2 text-[16px] leading-[24px] font-normal text-[#A1A9B5] transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3eb161]/30"
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[16px] font-semibold leading-[24px] text-[#121926]">
                  Select Payment Method
                </label>
              <div className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-3 min-[1100px]:grid-cols-5">
                  {[
                    {
                      id: "upi",
                      label: "UPI Payment",
                      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
                    },
                    {
                      id: "netbanking",
                      label: "Net Banking",
                      icon: <LinkIcon className="h-6 w-6 text-emerald-500" />,
                    },
                    {
                      id: "debit",
                      label: "Debit Card",
                      icon: <CreditCard className="h-6 w-6 text-orange-500" />,
                    },
                    {
                      id: "credit",
                      label: "Credit Card",
                      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
                    },
                    {
                      id: "bank",
                      label: "Bank Transfer",
                      icon: <Landmark className="h-6 w-6 text-cyan-500" />,
                    },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`group flex h-[72px] flex-col items-start justify-between rounded-[8px] border p-2 transition-all focus:outline-none ${
                        paymentMethod === method.id
                          ? "border-[#CDD5DF] bg-[#F8FAFC]"
                          : "border-[#F8FAFC] bg-white"
                      }`}
                    >
                      <div className="flex h-6 w-6 items-center justify-center">
                        {method.icon}
                      </div>
                      <span className="text-left text-[12px] font-normal leading-[16px] text-[#121926]">
                        {method.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-1 rounded-[48px] bg-[#39B54A] px-4 py-2 text-[16px] leading-[24px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]"
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
}
