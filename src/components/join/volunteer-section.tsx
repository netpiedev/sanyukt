"use client";

import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import { type FormEvent, useState } from "react";

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

export function VolunteerSection() {
  const [dob, setDob] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
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

    let value = input.replace(/\D/g, ""); // Remove all non-digits
    if (value.length > 8) value = value.slice(0, 8); // Max length for DDMMYYYY is 8

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
      <div className="mx-auto w-full max-w-[960px]">
        {/* Header Image */}
        <div className="relative mb-10 h-[240px] w-full overflow-hidden rounded-4xl sm:h-[320px] md:mb-12 md:h-[400px]">
          <Image
            src="/images/volunteer.png"
            alt="Sanyukt Volunteers"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 960px"
          />
        </div>

        <div className="mb-10 text-center md:mb-12 md:text-left">
          <h2 className="inline-block bg-linear-to-r from-[#39B54A] to-[#25AAE1] bg-clip-text text-transparent  text-[2rem] font-semibold tracking-tight sm:text-[2.25rem]">
            Volunteer With Sanyukt
          </h2>
          <p className="mx-auto mt-3 max-w-[580px] text-[0.95rem] leading-[1.65] text-[#697586] sm:text-[1rem] md:mx-0">
            Your time can transform lives! Just 4 hours a week, twice a month is
            enough to bring real change in communities. Join hands with us, and
            if we have a team in your city, Sanyukt will reach out to welcome
            you. Together, we create impact.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[464px]">
              <label
                htmlFor="vol-fullName"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="vol-fullName"
                placeholder="Enter your full name"
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
            <div className="flex w-full flex-col gap-2 md:w-[464px]">
              <label
                htmlFor="vol-email"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="vol-email"
                placeholder="Enter your email address"
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[464px]">
              <label
                htmlFor="vol-mobile"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Mobile number
              </label>
              <input
                type="tel"
                id="vol-mobile"
                placeholder="+91"
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
            <div className="flex w-full flex-col gap-2 md:w-[464px]">
              <label
                htmlFor="vol-dob"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Date of Birth
              </label>
              <input
                type="text"
                id="vol-dob"
                value={dob}
                onChange={handleDobChange}
                placeholder="DD/MM/YYYY"
                maxLength={10}
                className="h-10 w-full rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-2 md:w-[464px]">
              <label
                htmlFor="vol-gender"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                Gender
              </label>
              <div className="relative">
                <select
                  id="vol-gender"
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
            <div className="flex w-full flex-col gap-2 md:w-[464px]">
              <label
                htmlFor="vol-state"
                className="text-[0.95rem] font-bold text-[#1a2434]"
              >
                State
              </label>
              <div className="relative">
                <select
                  id="vol-state"
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

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="vol-hours"
              className="text-[0.95rem] font-bold text-[#1a2434]"
            >
              How many hours can you commit?
            </label>
            <div className="relative">
              <select
                id="vol-hours"
                defaultValue=""
                className="h-10 w-full appearance-none rounded-md border-2 border-[#EEF2F6] bg-white px-3 text-[0.95rem] text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
              >
                <option value="" disabled hidden>
                  Select number of hours you can commit in a week...
                </option>
                <option value="1-2">1 - 2 hours</option>
                <option value="3-5">3 - 5 hours</option>
                <option value="5+">5+ hours</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697586]" />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="vol-reason"
              className="text-[0.95rem] font-bold text-[#1a2434]"
            >
              Why do you want to join?
            </label>
            <textarea
              id="vol-reason"
              placeholder="Type something here..."
              className="h-[80px] w-full resize-none rounded-md border-2 border-[#EEF2F6] bg-white p-3 text-[0.95rem] text-[#697586] placeholder:text-[#697586] focus-visible:border-(--color-button) focus-visible:outline-none"
            />
          </div>

          <div className="mt-4 flex justify-center md:justify-start">
            <button
              type="submit"
              className="inline-flex h-[50px] w-[200px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#39B54A] text-[1.05rem] font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]"
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
