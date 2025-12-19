"use client";

import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResponsive } from "@/lib/useResponsive";

const CONTACT_EMAIL = "highndynamics@gmail.com";

const inquiryServiceFormSchema = z.object({
  name: z.string().min(1, { message: "성함을 입력해주세요." }),
  company: z.string().min(1, { message: "소속명을 입력해주세요." }),
  phone: z
    .string()
    .regex(/^\d{3}-\d{3,4}-\d{4}$/, {
      message: "000-0000-0000 형식으로 입력해주세요",
    })
    .min(1, { message: "연락처를 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일 형식을 입력해주세요." }),
  content: z.string().min(1, { message: "문의 내용을 입력해주세요." }),
});

type InquiryServiceFormValues = z.infer<typeof inquiryServiceFormSchema>;

export default function InquiryPage() {
  const { isMobile, isTablet } = useResponsive();
  const [isAccordionOpened, setIsAccordionOpened] = useState(false);

  const defaultValues = {
    name: "",
    company: "",
    email: "",
    phone: "",
    content: "",
  };

  const toggleAccordionState = useCallback(() => {
    setIsAccordionOpened((prev) => !prev);
  }, []);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryServiceFormValues>({
    resolver: zodResolver(inquiryServiceFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: InquiryServiceFormValues) => {
    console.log(data);

    const subject = encodeURIComponent("[상담 신청]");
    const body = encodeURIComponent(
      `성함: ${data.name}\n소속명: ${data.company}\n연락처: ${data.phone}\n이메일: ${data.email}\n문의 내용: ${data.content}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  if (isMobile || isTablet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white mx-auto">
        <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col items-center justify-center my-36">
          <div className="inline-block px-4 py-2 bg-[#7CB342]/10 text-[#7CB342] rounded-full mb-4">
            Contact
          </div>
          <h1 className="text-3xl lg:text-5xl text-[#1A3A5C] mb-4">
            무료 상담 신청
          </h1>

          <p className="text-gray-600">
            브랜드 성장을 위한 첫 걸음, 지금 시작하세요
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mt-8 mb-8">
            <div>
              <h3 className="text-2xl text-[#1A3A5C] mb-6">연락처 정보</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail text-[#7cb342]"
                      aria-hidden="true"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#1A3A5C] mb-1">이메일</div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-gray-600 hover:text-[#7CB342]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone text-[#7cb342]"
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#1A3A5C] mb-1">전화</div>
                    <a
                      href="tel:070-4647-1493"
                      className="text-gray-600 hover:text-[#7CB342]"
                    >
                      070-4647-1493
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin text-[#7cb342]"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#1A3A5C] mb-1">주소</div>
                    <p className="text-gray-600">
                      세종특별자치시 나성북로 21, 701~703호
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1A3A5C] to-[#2D5276] rounded-2xl p-8 text-white w-full flex flex-col items-center justify-center">
                <h4 className="text-xl mb-4">운영 시간</h4>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center justify-between gap-6">
                    <h4>평일</h4>
                    <h4>09:00 - 21:00</h4>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6">
                    <h4>점심시간</h4>
                    <h4>12:00 - 13:00</h4>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-6">
                    <h4>주말 및 공휴일</h4>
                    <h4>휴무</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 w-full">
              <form
                id="inquiryForm"
                onSubmit={handleSubmit(onSubmit)}
                className="w-full p-4 flex flex-col gap-6"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-2 font-pretendard font-normal text-xl"
                  >
                    이름
                    <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    placeholder="성함을 입력해주세요."
                    className="p-3 border font-pretendard rounded-md w-full"
                  />
                  {errors.name && (
                    <p className="font-pretendard">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="organization"
                    className="mb-2 font-pretendard font-normal text-xl"
                  >
                    회사명
                    <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                      *
                    </span>
                  </label>
                  <input
                    id="organization"
                    {...register("company")}
                    placeholder="소속명을 입력해주세요."
                    className="p-3 border font-pretendard rounded-md w-full"
                  />
                  {errors.company && (
                    <p className="font-pretendard">{errors.company.message}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 font-pretendard font-normal text-xl"
                  >
                    이메일
                    <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="이메일을 입력해주세요."
                    className="p-3 border font-pretendard rounded-md w-full"
                  />
                  {errors.email && (
                    <p className="font-pretendard">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 font-pretendard font-normal text-xl"
                  >
                    연락처
                    <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                      *
                    </span>
                  </label>
                  <input
                    id="phone"
                    {...register("phone")}
                    placeholder="연락처를 입력해주세요."
                    className="p-3 border font-pretendard rounded-md w-full"
                  />
                  {errors.phone && (
                    <p className="font-pretendard">{errors.phone.message}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="content"
                    className="mb-2 font-pretendard font-normal text-xl"
                  >
                    문의 내용
                    <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                      *
                    </span>
                  </label>
                  <textarea
                    id="content"
                    {...register("content")}
                    placeholder="문의 내용을 입력해 주세요."
                    className="p-3 border font-pretendard rounded-md w-full"
                  />
                  {errors.content && (
                    <p className="font-pretendard">{errors.content.message}</p>
                  )}
                </div>
                <div className="border rounded-md p-4 w-full mt-8 hidden">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-pretendard font-bold">
                        개인정보 수집 / 이용에 동의합니다.
                      </span>
                    </div>
                    <button
                      onClick={toggleAccordionState}
                      className="text-blue-600 font-pretendard text-sm focus:outline-none"
                    >
                      {isAccordionOpened ? "▲" : "▼"}
                    </button>
                  </div>
                  {isAccordionOpened && (
                    <div className="mt-4 bg-gray-100 p-4 rounded-md">
                      <p className="text-xs font-pretendard mb-2">
                        <span className="font-bold">수집항목: </span>
                        <span>(필수) 성명, 소속, 연락처, 이메일</span>
                      </p>
                      <p className="text-xs font-pretendard mb-2">
                        <span className="font-bold">이용목적: </span>
                        <span>
                          제휴 관련 문의 응대, 기타서비스 문의 응대, 사후관리
                        </span>
                      </p>
                      <p className="text-xs font-pretendard mb-2">
                        <span className="font-bold">보유기간: </span>
                        <span>
                          10년 (기간 내 목적 달성하거나, 별도 요청 시 즉시 파기)
                        </span>
                      </p>
                      <p className="text-xs font-pretendard">
                        <span className="font-bold">거부할 권리: </span>
                        <span>
                          개인정보 수집 및 이용을 거부하실 수 있으며, 거부
                          시에는 접수가 어렵습니다.
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-row items-center justify-center gap-10 mt-8">
                  <button
                    type="submit"
                    form="inquiryForm"
                    className="bg-[#7CB342] w-36 h-14 rounded-full text-white font-pretendard font-bold focus:ring-2"
                  >
                    문의접수
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mx-auto">
      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col items-center justify-center my-36">
        <div className="inline-block px-4 py-2 bg-[#7CB342]/10 text-[#7CB342] rounded-full mb-4">
          Contact
        </div>
        <h1 className="text-3xl lg:text-5xl text-[#1A3A5C] mb-4">
          무료 상담 신청
        </h1>

        <p className="text-gray-600">
          브랜드 성장을 위한 첫 걸음, 지금 시작하세요
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mt-8 mb-8">
          <div>
            <h3 className="text-2xl text-[#1A3A5C] mb-6">연락처 정보</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail text-[#7cb342]"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
                <div>
                  <div className="text-[#1A3A5C] mb-1">이메일</div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-gray-600 hover:text-[#7CB342]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone text-[#7cb342]"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-[#1A3A5C] mb-1">전화</div>
                  <a href="tel:070-4647-1493" className="text-gray-600 hover:text-[#7CB342]">
                    070-4647-1493
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#7cb342]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="text-[#1A3A5C] mb-1">주소</div>
                  <p className="text-gray-600">
                    세종특별자치시 나성북로 21, 701~703호
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A3A5C] to-[#2D5276] rounded-2xl p-8 text-white">
              <h4 className="text-xl mb-4">운영 시간</h4>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between">
                  <h4>평일</h4>
                  <h4>09:00 - 21:00</h4>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h4>점심시간</h4>
                  <h4>12:00 - 13:00</h4>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h4>주말 및 공휴일</h4>
                  <h4>휴무</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 w-[600px]">
            <form
              id="inquiryForm"
              onSubmit={handleSubmit(onSubmit)}
              className="w-full p-10 flex flex-col gap-6"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 font-pretendard font-normal text-xl"
                >
                  이름
                  <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                    *
                  </span>
                </label>
                <input
                  id="name"
                  {...register("name")}
                  placeholder="성함을 입력해주세요."
                  className="p-3 border font-pretendard rounded-md w-full"
                />
                {errors.name && (
                  <p className="font-pretendard">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="organization"
                  className="mb-2 font-pretendard font-normal text-xl"
                >
                  회사명
                  <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                    *
                  </span>
                </label>
                <input
                  id="organization"
                  {...register("company")}
                  placeholder="소속명을 입력해주세요."
                  className="p-3 border font-pretendard rounded-md w-full"
                />
                {errors.company && (
                  <p className="font-pretendard">{errors.company.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-pretendard font-normal text-xl"
                >
                  이메일
                  <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                    *
                  </span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="이메일을 입력해주세요."
                  className="p-3 border font-pretendard rounded-md w-full"
                />
                {errors.email && (
                  <p className="font-pretendard">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-pretendard font-normal text-xl"
                >
                  연락처
                  <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                    *
                  </span>
                </label>
                <input
                  id="phone"
                  {...register("phone")}
                  placeholder="연락처를 입력해주세요."
                  className="p-3 border font-pretendard rounded-md w-full"
                />
                {errors.phone && (
                  <p className="font-pretendard">{errors.phone.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="content"
                  className="mb-2 font-pretendard font-normal text-xl"
                >
                  문의 내용
                  <span className="text-2xl font-pretendard text-gray-500 ml-2 font-bold">
                    *
                  </span>
                </label>
                <textarea
                  id="content"
                  {...register("content")}
                  placeholder="문의 내용을 입력해 주세요."
                  className="p-3 border font-pretendard rounded-md w-full"
                />
                {errors.content && (
                  <p className="font-pretendard">{errors.content.message}</p>
                )}
              </div>
              <div className="border rounded-md p-4 w-full mt-8 hidden">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="font-pretendard font-bold">
                      개인정보 수집 / 이용에 동의합니다.
                    </span>
                  </div>
                  <button
                    onClick={toggleAccordionState}
                    className="text-blue-600 font-pretendard text-sm focus:outline-none"
                  >
                    {isAccordionOpened ? "▲" : "▼"}
                  </button>
                </div>
                {isAccordionOpened && (
                  <div className="mt-4 bg-gray-100 p-4 rounded-md">
                    <p className="text-xs font-pretendard mb-2">
                      <span className="font-bold">수집항목: </span>
                      <span>(필수) 성명, 소속, 연락처, 이메일</span>
                    </p>
                    <p className="text-xs font-pretendard mb-2">
                      <span className="font-bold">이용목적: </span>
                      <span>
                        제휴 관련 문의 응대, 기타서비스 문의 응대, 사후관리
                      </span>
                    </p>
                    <p className="text-xs font-pretendard mb-2">
                      <span className="font-bold">보유기간: </span>
                      <span>
                        10년 (기간 내 목적 달성하거나, 별도 요청 시 즉시 파기)
                      </span>
                    </p>
                    <p className="text-xs font-pretendard">
                      <span className="font-bold">거부할 권리: </span>
                      <span>
                        개인정보 수집 및 이용을 거부하실 수 있으며, 거부 시에는
                        접수가 어렵습니다.
                      </span>
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center justify-center gap-10 mt-16">
                <button
                  type="submit"
                  form="inquiryForm"
                  className="bg-[#7CB342] w-36 h-14 rounded-full text-white font-pretendard font-bold focus:ring-2"
                >
                  문의접수
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
