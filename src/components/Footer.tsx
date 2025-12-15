"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        {/* Logo Section */}
        <div className="mb-8 flex items-center justify-center md:justify-start">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-xl font-bold text-white">HD</span>
            </div>
            <span className="text-2xl font-bold text-white">HD Company</span>
          </div>
        </div>

        {/* Company Information */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">회사명:</span>
                <span className="ml-2 text-gray-300">-</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">대표자명:</span>
                <span className="ml-2 text-gray-300">-</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">사업자번호:</span>
                <span className="ml-2 text-gray-300">-</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">이메일:</span>
                <a
                  href="mailto:ceo@highdynamics.kr"
                  className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  -
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">주소:</span>
                <span className="ml-2 text-gray-300">-</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">전화번호:</span>
                <a
                  href="tel:044-000-000"
                  className="ml-2 text-gray-300 hover:text-white transition-colors"
                >
                  -
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">개인정보관리책임자:</span>
                <span className="ml-2 text-gray-300">-</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-gray-500">ㅣ</span>
              <div>
                <span className="text-gray-400">개인정보관리책임자 메일:</span>
                <a
                  href="mailto:hsmenok@naver.com"
                  className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  -
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
