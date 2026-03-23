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
      { label: "Who we are", href: "#" },
      { label: "What we do", href: "#" },
      { label: "Our Founder", href: "#" },
      { label: "Vision and Mission", href: "#" },
      { label: "Our Impact", href: "#" },
      { label: "Our People", href: "#" },
      { label: "Our Philosophy", href: "#" },
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
    href: "/#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Financials", href: "#" },
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
