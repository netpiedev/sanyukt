"use client";

import { ChevronDown, Heart, Upload } from "lucide-react";
import { FormEvent, useState } from "react";

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

export function TeamApplicationFormSection() {
  const [dob, setDob] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Handle backspace over slash
    if (
      dob.length > input.length &&
      dob.endsWith("/") &&
      input.length === dob.length - 1
    ) {
      setDob(input.slice(0, -1));
      return;
    }

    let value = input.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);

    if (value.length >= 5) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    } else if (value.length >= 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}${value.length === 4 ? "/" : ""}`;
    } else if (value.length === 2) {
      value = `${value.slice(0, 2)}/`;
    }

    setDob(value);
  };

  return (
    <section className="mx-auto w-full bg-[#f8fafc] px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[914px]">
        <div className="mb-8 flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent text-[2rem] font-semibold tracking-tight sm:text-[2.25rem]">
            Apply Now
          </h2>
          <p className="mt-1 max-w-[580px] text-[0.95rem] leading-[1.6] text-[#697586] sm:text-[1rem]">
            Join Our Family. Be a party of Our Story
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-fullName"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="taf-fullName"
                placeholder="Enter your full name"
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-email"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="taf-email"
                placeholder="Enter your email address"
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-mobile"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Mobile number
              </label>
              <input
                type="tel"
                id="taf-mobile"
                placeholder="+91"
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-dob"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Date of Birth
              </label>
              <input
                type="text"
                id="taf-dob"
                value={dob}
                onChange={handleDobChange}
                placeholder="DD/MM/YYYY"
                maxLength={10}
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-gender"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Gender
              </label>
              <div className="relative">
                <select
                  id="taf-gender"
                  defaultValue=""
                  className="h-10 w-full appearance-none rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
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
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-state"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                State
              </label>
              <div className="relative">
                <select
                  id="taf-state"
                  defaultValue=""
                  className="h-10 w-full appearance-none rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
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
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-edu"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Educational Qualification
              </label>
              <div className="relative">
                <select
                  id="taf-edu"
                  defaultValue=""
                  className="h-10 w-full appearance-none rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
                >
                  <option value="" disabled hidden>
                    Select Education
                  </option>
                  <option value="12th">12th Standard</option>
                  <option value="bachelors">Bachelor&apos;s Degree</option>
                  <option value="masters">Master&apos;s Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-exp"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Professional/Social work experience
              </label>
              <div className="relative">
                <select
                  id="taf-exp"
                  defaultValue=""
                  className="h-10 w-full appearance-none rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
                >
                  <option value="" disabled hidden>
                    Select Experience
                  </option>
                  <option value="0-1">0-1 Years</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-team"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Team applying for?
              </label>
              <div className="relative">
                <select
                  id="taf-team"
                  defaultValue=""
                  className="h-10 w-full appearance-none rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
                >
                  <option value="" disabled hidden>
                    Select Team
                  </option>
                  <option value="governing">Governing Body</option>
                  <option value="digital">Digital Team</option>
                  <option value="internship">Internship Team</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 md:w-[440px]">
              <label
                htmlFor="taf-role"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Preferred Role
              </label>
              <div className="relative">
                <select
                  id="taf-role"
                  defaultValue=""
                  className="h-10 w-full appearance-none rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
                >
                  <option value="" disabled hidden>
                    Select Role
                  </option>
                  <option value="president">President</option>
                  <option value="vice-president">Vice President</option>
                  <option value="member">General Member</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="taf-reason"
              className="text-[0.95rem] font-bold text-[#1a2434]"
            >
              Why do you want to join?
            </label>
            <textarea
              id="taf-reason"
              placeholder="Type something here..."
              className="h-[80px] w-full resize-none rounded-md border-2 border-[#EEF2F6] bg-white p-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="taf-resume"
              className="text-[0.95rem] font-bold text-[#1a2434]"
            >
              Upload your Resume
            </label>
            <div className="relative flex w-full items-center">
              <input
                type="file"
                id="taf-resume"
                accept=".pdf"
                className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0 outline-none"
              />
              <div className="flex h-[44px] w-full items-center justify-between rounded-md border border-dashed border-[#CBD5E1] bg-[#F1F5F9] px-4 text-[0.95rem] text-[#64748B] peer-focus-visible:ring-2 peer-focus-visible:ring-[#39B54A]">
                <span>Upload PDF document less than 3MB in size...</span>
                <Upload className="h-[18px] w-[18px]" strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center md:justify-start">
            <button
              type="submit"
              className="inline-flex h-[50px] w-fit items-center justify-center gap-2 rounded-full bg-[#39B54A] px-8 text-[1.05rem] font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]"
            >
              <span>Apply now</span>
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
