import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log("카카오 웹훅:", JSON.stringify(body, null, 2));

  const userMessage = body?.userRequest?.utterance ?? "메시지 없음";

  return NextResponse.json({
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `받은 메시지: ${userMessage}`,
          },
        },
      ],
    },
  });
}
