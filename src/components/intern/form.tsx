"use client";

import { ChevronDown, Heart, Upload } from "lucide-react";
import type { FormEvent } from "react";

const indianStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const inputClass =
  "h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none";

export function FormSection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="mx-auto w-full px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1120px] rounded-2xl md:rounded-[3rem] border border-[#EEF2F6] bg-[#F8FAFC] p-6 sm:p-8 md:p-10">
        <div className="mb-6 text-center md:text-left">
          <h2 className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-[2rem] font-semibold tracking-tight text-transparent sm:text-[2rem]">
            Apply Now
          </h2>
          <p className="mt-1 text-[0.95rem] text-[#697586] sm:text-[1rem]">
            Join Our Family. Be a party of Our Story
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[510px]">
              <label
                htmlFor="intern-fullName"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="intern-fullName"
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-[510px]">
              <label
                htmlFor="intern-email"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="intern-email"
                placeholder="Enter your email address"
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[510px]">
              <label
                htmlFor="intern-mobile"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Mobile number
              </label>
              <input
                type="tel"
                id="intern-mobile"
                placeholder="+91"
                className={inputClass}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-[510px]">
              <label
                htmlFor="intern-gender"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Gender
              </label>
              <div className="relative">
                <select
                  id="intern-gender"
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled hidden>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[510px]">
              <label
                htmlFor="intern-state"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                State
              </label>
              <div className="relative">
                <select
                  id="intern-state"
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled hidden>
                    Select State
                  </option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 md:w-[510px]">
              <label
                htmlFor="intern-role"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Preferred Internship Role
              </label>
              <div className="relative">
                <select
                  id="intern-role"
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled hidden>
                    Internship Role
                  </option>
                  <option value="content">Content Writer</option>
                  <option value="design">Graphic Designer</option>
                  <option value="video">Video Editor</option>
                  <option value="social">Social Media</option>
                  <option value="operations">Operations</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="intern-resume"
              className="text-[0.95rem] font-bold text-[#1a2434]"
            >
              Upload your Resume
            </label>
            <div className="relative flex w-full items-center">
              <input
                type="file"
                id="intern-resume"
                accept=".pdf"
                className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0 outline-none"
              />
              <div className="flex h-[40px] w-full items-center justify-between rounded-md border border-dashed border-[#CBD5E1] bg-[#F1F5F9] px-3 text-[0.95rem] text-[#64748B] peer-focus-visible:ring-2 peer-focus-visible:ring-[#39B54A]">
                <span>Upload PDF document less than 3MB in size...</span>
                <Upload className="h-4 w-4" strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="mt-2 flex justify-center md:justify-start">
            <button
              type="submit"
              className="inline-flex h-[50px] w-fit items-center justify-center gap-2 rounded-full bg-[#39B54A] px-6 text-[1.05rem] font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]"
            >
              <span>Submit details</span>
              <Heart
                className="h-4 w-4 fill-white text-white"
                strokeWidth={2}
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
