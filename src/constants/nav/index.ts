type Item =
  | { label: string; href: string; external?: boolean }
  | { label: string; children: { label: string; href: string }[] };

export type DefaultLinkType = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV: Item[] = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Work", href: "/work" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];
