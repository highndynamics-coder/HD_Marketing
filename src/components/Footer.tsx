"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useResponsive } from "@/lib/useResponsive";

export default function Footer() {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/HDLogo.png"
                  alt="HD Logo"
                  width={80}
                  height={80}
                  className="w-1/3"
                />
              </Link>
            </div>
          </div>

          {/* Company Information */}
          <div className="border-t border-gray-700 pt-8">
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">회사명:</span>
                  <span className="ml-2 text-gray-300">
                    에이치디 컴퍼니(HD COMPANY)
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">대표자명:</span>
                  <span className="ml-2 text-gray-300">홍도현</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">사업자등록번호:</span>
                  <span className="ml-2 text-gray-300">557-30-01818</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">이메일:</span>
                  <a
                    href="mailto:highndynamics@gmail.com"
                    className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    highndynamics@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">주소:</span>
                  <span className="ml-2 text-gray-300 text-sm">
                    세종특별자치시 나성북로 21, 701~703호
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">전화번호:</span>
                  <a
                    href="tel:070-4647-1493"
                    className="ml-2 text-gray-300 hover:text-white transition-colors"
                  >
                    070-4647-1493
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">개인정보관리책임자:</span>
                  <span className="ml-2 text-gray-300">홍도현</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-gray-500">ㅣ</span>
                <div>
                  <span className="text-gray-400">
                    개인정보관리책임자 메일:
                  </span>
                  <a
                    href="mailto:hsmenoch@gmail.com"
                    className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    hsmenoch@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} HD Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Logo Section */}
        <div className="flex items-center justify-center -mt-12">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/HDLogo.png"
                alt="HD Logo"
                width={80}
                height={80}
                className="w-1/4 -ml-36"
              />
            </Link>
          </div>
        </div>

        {/* Company Information */}
        <div className="border-t border-gray-700 pt-8 -mt-12">
          <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">회사명:</span>
                <span className="ml-2 text-gray-300">
                  에이치디 컴퍼니(HD COMPANY)
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">대표자명:</span>
                <span className="ml-2 text-gray-300">홍도현</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">사업자등록번호:</span>
                <span className="ml-2 text-gray-300">557-30-01818</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">이메일:</span>
                <a
                  href="mailto:highndynamics@gmail.com"
                  className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  highndynamics@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">주소:</span>
                <span className="ml-2 text-gray-300 text-sm">
                  세종특별자치시 나성북로 21, 701~703호
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">전화번호:</span>
                <a
                  href="tel:070-4647-1493"
                  className="ml-2 text-gray-300 hover:text-white transition-colors"
                >
                  070-4647-1493
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">개인정보관리책임자:</span>
                <span className="ml-2 text-gray-300">홍도현</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">개인정보관리책임자 메일:</span>
                <a
                  href="mailto:hsmenoch@gmail.com"
                  className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  hsmenoch@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HD Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
