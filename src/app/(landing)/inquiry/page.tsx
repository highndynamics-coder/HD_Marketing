"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/Select";
import { useInquiryFormType } from "@/hooks/api/useInquiryFormType";
import { useSendInquiryFormToServer } from "@/hooks/api/useSendInquiryFormToServer";

interface FormType {
  id: number;
  name: string;
}

type InquiryFormType = FormType[];

interface InquiryFormDataTypeToServer {
  title: string;
  content: string;
  form_type: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  is_agree: boolean;
}

const inquiryServiceFormSchema = z.object({
  form_type: z.number().min(1, { message: "문의 유형을 선택해 주세요." }),
  name: z.string().min(1, { message: "성함을 입력해주세요." }),
  position: z.string().min(1, { message: "소속(조직명)을 입력해 주세요." }),
  phone: z
    .string()
    .regex(/^\d{3}-\d{3,4}-\d{4}$/, {
      message: "000-0000-0000 형식으로 입력해주세요",
    })
    .min(1, { message: "연락처를 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일 형식을 입력해주세요." }),
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  content: z.string().min(1, { message: "문의 내용을 입력해주세요." }),
  is_agree: z.boolean(),
});

type InquiryServiceFormValues = z.infer<typeof inquiryServiceFormSchema>;

export default function InquiryPage() {
  const { data: inquiryData, isPending, isError } = useInquiryFormType();

  const { mutateAsync } = useSendInquiryFormToServer();

  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [isAccordionOpened, setIsAccordionOpened] = useState(false);

  const inquirySelectFormTypeData = useMemo(
    () => inquiryData as InquiryFormType,
    [inquiryData]
  );

  const defaultValues = {
    form_type: 1,
    name: "",
    position: "",
    phone: "",
    email: "",
    title: "",
    content: "",
    is_agree: false,
  };

  const toggleAccordionState = useCallback(() => {
    setIsAccordionOpened((prev) => !prev);
  }, []);
  const toggleCheckbox = useCallback(
    () => setIsCheckboxClicked((prev) => !prev),
    []
  );

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

  const showToast = useCallback(
    (type: "success" | "error", message: string) => {
      if (type === "success") toast.success(message);
      if (type === "error") toast.error(message);
    },
    []
  );

  const onSubmit: SubmitHandler<InquiryServiceFormValues> = async (
    data: Omit<InquiryFormDataTypeToServer, "is_agree">
  ) => {
    if (!isCheckboxClicked) {
      showToast("error", "개인정보 수집/이용에 동의해주세요.");
      return;
    }

    const dataToSend: InquiryFormDataTypeToServer = {
      ...data,
      is_agree: isCheckboxClicked,
    };

    try {
      await mutateAsync(dataToSend);
      showToast("success", "문의가 성공적으로 접수되었습니다.");
      reset();
    } catch (error) {
      console.error("폼 제출 실패:", error);
      showToast("error", "문의 접수에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-20">
      <h1 className="text-3xl font-pretendard font-bold">문의하기</h1>
      <form
        id="inquiryForm"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("폼 제출 이벤트 발생");
          //   handleSubmit(onSubmit)(e);
        }}
        className="w-full p-10"
      >
        <div className="flex flex-col space-y-4 w-full">
          <label htmlFor="inquiryType" className="font-pretendard font-bold">
            문의 분류
            <span className="text-2xl font-pretendard text-red-500 font-bold">
              {" "}
              .
            </span>
          </label>
          <Controller
            control={control}
            name="form_type"
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(parseInt(value, 10));
                }}
                value={field.value ? String(field.value) : "1"}
              >
                <SelectTrigger>
                  <SelectValue placeholder="문의 유형을 선택해 주세요." />
                </SelectTrigger>
                <SelectContent>
                  {/* {inquirySelectFormTypeData.map((item, index) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))} */}
                </SelectContent>
              </Select>
            )}
          />
          {errors.form_type && (
            <p className="font-pretendard">{errors.form_type.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-pretendard font-bold">
              성명
              <span className="text-2xl font-pretendard text-red-500 font-bold">
                {" "}
                .
              </span>
            </label>
            <input
              id="name"
              {...register("name")}
              placeholder="성함을 입력해주세요."
              className="p-3 border font-pretendard rounded-md shadow-md focus:ring-1 focus:outline-none"
            />
            {errors.name && (
              <p className="font-pretendard">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="organization"
            className="mb-2 font-pretendard font-bold"
          >
            소속(조직명)
            <span className="text-2xl font-pretendard text-red-500 font-bold">
              {" "}
              .
            </span>
          </label>
          <input
            id="organization"
            {...register("position")}
            placeholder="소속명을 입력해주세요."
            className="p-3 border font-pretendard rounded-md shadow-md focus:ring-1 focus:outline-none"
          />
          {errors.position && (
            <p className="font-pretendard">{errors.position.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-pretendard font-bold">
              연락처
              <span className="text-2xl font-pretendard text-red-500 font-bold">
                {" "}
                .
              </span>
            </label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="연락처를 입력해주세요."
              className="p-3 border font-pretendard rounded-md shadow-md focus:ring-1 focus:outline-none"
            />
            {errors.phone && (
              <p className="font-pretendard">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-pretendard font-bold">
              이메일
              <span className="text-2xl font-pretendard text-red-500 font-bold">
                {" "}
                .
              </span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="이메일을 입력해주세요."
              className="p-3 border font-pretendard rounded-md shadow-md focus:ring-1 focus:outline-none"
            />
            {errors.email && (
              <p className="font-pretendard">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="title" className="mb-2 font-pretendard font-bold">
            문의 제목
            <span className="text-2xl font-pretendard text-red-500 font-bold">
              {" "}
              .
            </span>
          </label>
          <input
            id="title"
            {...register("title")}
            placeholder="제목을 입력해 주세요."
            className="p-3 border font-pretendard rounded-md shadow-md focus:ring-1 focus:outline-none"
          />
          {errors.title && (
            <p className="font-pretendard">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="content" className="mb-2 font-pretendard font-bold">
            문의 내용
            <span className="text-2xl font-pretendard text-red-500 font-bold">
              {" "}
              .
            </span>
          </label>
          <textarea
            id="content"
            {...register("content")}
            placeholder="문의 내용을 입력해 주세요."
            className="p-3 border font-pretendard rounded-md shadow-md focus:ring-1 focus:outline-none"
          />
          {errors.content && (
            <p className="font-pretendard">{errors.content.message}</p>
          )}
        </div>
      </form>
      <div className="border rounded-md p-4 w-[900px]">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              {/* {isCheckboxClicked ? (
                <div onClick={toggleCheckbox}>
                  <CheckboxClickedIcon />
                </div>
              ) : (
                <div onClick={toggleCheckbox}>
                  <CheckboxClickIcon />
                </div>
              )} */}
            </label>
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
              <span>제휴 관련 문의 응대, 기타서비스 문의 응대, 사후관리</span>
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
                개인정보 수집 및 이용을 거부하실 수 있으며, 거부 시에는 접수가
                어렵습니다.
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-10 mt-16">
        <button
          type="submit"
          className="bg-[#AAAAAA] w-36 h-14 rounded-full text-white font-pretendard font-bold"
          onClick={() => reset()}
        >
          취소하기
        </button>
        <button
          type="submit"
          form="inquiryForm"
          className="bg-primary w-36 h-14 rounded-full text-white font-pretendard font-bold focus:ring-2"
        >
          문의접수
        </button>
      </div>
    </div>
  );
}
