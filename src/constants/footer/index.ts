import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterYoutubeIcon,
  FooterXICon,
  FooterBlogIcon,
} from "../../icons";

interface FooterLink {
  id: string;
  text: string;
  href: string;
  subItems?: FooterLink[];
}

interface FooterSocial {
  name: string;
  icon: React.ComponentType | string;
  link?: string;
}

export const footerLinks: FooterLink[] = [
  {
    id: "1",
    text: "회사소개",
    href: "/company",
  },
  {
    id: "2",
    text: "상품소개",
    href: "/work",
  },
  {
    id: "3",
    text: "프로세스",
    href: "/process",
  },
  {
    id: "4",
    text: "문의하기",
    href: "/contact",
  },
];

export const socialIcons: FooterSocial[] = [
  {
    name: "blog",
    icon: FooterBlogIcon,
    link: "https://blog.naver.com/addeep/",
  },
  {
    name: "instagram",
    icon: FooterInstagramIcon,
    link: "https://www.instagram.com/addeep_/",
  },
  {
    name: "facebook",
    icon: FooterFacebookIcon,
    link: "https://www.facebook.com/share/1BTnZGhM8g",
  },
  {
    name: "X",
    icon: FooterXICon,
    link: "https://x.com/Addeep_",
  },
  {
    name: "youtube",
    icon: FooterYoutubeIcon,
    link: "https://www.youtube.com/@addeep_",
  },
];
