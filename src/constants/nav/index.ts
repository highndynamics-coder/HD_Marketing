type Item = { label: string; href: string };

export type DefaultLinkType = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV: Item[] = [
  { label: "회사소개", href: "/company" },
  { label: "상품소개", href: "/product" },
  { label: "업종별 전략", href: "/work" },
  { label: "상담문의", href: "/inquiry" },
];
