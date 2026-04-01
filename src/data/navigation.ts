export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export type ActionItem = {
  label: string;
  href: string;
  variant: "ghost" | "outline" | "solid";
  icon?: "heart";
};

export const primaryNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "Who we are", href: "/about#who-we-are" },
      { label: "What we do", href: "/about#what-we-do" },
      { label: "Our Founder", href: "/about#our-founder" },
      { label: "Vision and Mission", href: "/about#vision-and-mission" },
      { label: "Our Impact", href: "/about#our-impact" },
      { label: "Our People", href: "/about#our-people" },
      { label: "Our Philosophy", href: "/about#vision-and-mission" },
    ],
  },
  {
    label: "Get Involved",
    href: "/join",
    children: [
      { label: "Volunteer", href: "#" },
      { label: "Member", href: "#" },
      { label: "Corporate partners", href: "/corporate" },
      { label: "Internship", href: "#" },
      { label: "Join our teams", href: "#" },
      { label: "Collaboration", href: "#" },
    ],
  },
  {
    label: "Internship",
    href: "/intern",
    children: [
      { label: "About the program", href: "#" },
      { label: "Partnership & Collaborations", href: "#" },
      { label: "Background Verification", href: "#" },
      { label: "How to Join", href: "#" },
    ],
  },
  {
    label: "Resources",
    href: "/team",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Financials", href: "/impact" },
      { label: "Statement", href: "#" },
      { label: "Press release", href: "#" },
    ],
  },
];

export const actionNav: ActionItem[] = [
  {
    label: "Talk to us",
    href: "#",
    variant: "ghost",
  },
  {
    label: "Register/Login",
    href: "#",
    variant: "outline",
    icon: "heart",
  },
  {
    label: "Support us",
    href: "/donate",
    variant: "solid",
    icon: "heart",
  },
];
