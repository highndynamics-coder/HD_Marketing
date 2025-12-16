"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SiteNavCloseIcon, SiteNavHamburgerIcon } from "@/icons";
import { useResponsive } from "../lib/useResponsive";
import { NAV } from "../constants/nav";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [exp, setExp] = useState<Record<string, boolean>>({});

  const { isMobile, isTablet } = useResponsive();

  const disabledNav = "";

  // body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // esc close
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  if (disabledNav) {
    return null;
  }

  if (isMobile || isTablet) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 transform-none h-28">
          <div className="container mx-auto">
            <div className="flex flex-row items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/HDLogo.png"
                  alt="HD Logo"
                  width={144}
                  height={144}
                  className="w-1/3"
                />
              </Link>
              <button
                type="button"
                aria-label="메뉴 열기"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="inline-flex items-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <SiteNavHamburgerIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          </div>
          {/* 오버레이는 Portal로 띄워서 나머지 레이아웃에 영향 X */}
          {open &&
            typeof window !== "undefined" &&
            createPortal(
              <>
                <div aria-hidden="true" className="fixed inset-0 z-50" />
                <div
                  role="dialog"
                  aria-modal="true"
                  className="fixed inset-0 z-50 overflow-y-auto bg-black/90"
                >
                  {/* content */}
                  <div className="relative mx-auto flex min-h-full w-full max-w-[1440px] flex-col px-6 pt-6 md:px-10">
                    {/* top bar inside overlay */}
                    <div className="flex items-center justify-between">
                      <button
                        aria-label="닫기"
                        onClick={() => setOpen(false)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white/90 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 mt-4"
                      >
                        <SiteNavCloseIcon />
                      </button>
                    </div>
                    <div className="flex flex-col gap-8">
                      {NAV.map((it) => {
                        return (
                          <button
                            key={it.label}
                            className="text-white/80 hover:text-[#7CB342] transition-colors relative group opacity-100 transform-none"
                          >
                            <NavLinkBig
                              href={it.href}
                              onClick={() => setOpen(false)}
                            >
                              {it.label}
                            </NavLinkBig>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>,
              document.body
            )}
        </header>
      </>
    );
  }

  return (
    <>
      {/* 상단 얇은 바 + 햄버거(좌) / 로그인+IG(우) */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 transform-none">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/HDLogo.png"
                alt="HD Logo"
                width={80}
                height={80}
                className="w-1/6"
              />
            </Link>
            <div className="flex-shrink-0 cursor-pointer transform-none">
              <nav className="hidden lg:flex items-center gap-12">
                {NAV.map((it) => {
                  return (
                    <button
                      key={it.label}
                      className="text-white/80 hover:text-[#7CB342] transition-colors relative group opacity-100 transform-none"
                    >
                      <NavLinkBig href={it.href} onClick={() => setOpen(false)}>
                        {it.label}
                      </NavLinkBig>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function NavLinkBig({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const { isMobile, isTablet } = useResponsive();

  const mobileCls =
    "inline-block text-xl leading-normal text-white hover:text-white/90 focus:outline-none";

  const cls =
    "inline-block text-xl leading-[1.1] text-white hover:text-white/90 focus:outline-none";

  if (isMobile || isTablet) {
    return (
      <Link href={href} className={mobileCls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
