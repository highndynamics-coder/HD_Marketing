import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface InquiryFormData {
  title: string;
  content: string;
  form_type: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  is_agree: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: InquiryFormData = await request.json();

    // 필수 필드 검증
    if (!body.title || !body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    if (!body.is_agree) {
      return NextResponse.json(
        { error: "개인정보 수집에 동의해주세요." },
        { status: 400 }
      );
    }

    // Supabase에 데이터 삽입
    const { data, error } = await supabase
      .from("inquiry_forms")
      .insert([
        {
          content: body.content,
          name: body.name,
          phone: body.phone,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase 오류:", error);
      return NextResponse.json(
        { error: "문의 등록에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("서버 오류:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
