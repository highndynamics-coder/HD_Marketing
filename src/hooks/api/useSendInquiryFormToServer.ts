import { useMutation } from "@tanstack/react-query";
import AxiosInstance from "@/shared/lib/utils/api/axiosInstance";

interface InquiryFormDataTypeToServer {
  content: string;
  name: string;
  phone: string;
}

interface InquiryFormDataSuccessFromServer extends InquiryFormDataTypeToServer {
  id: number;
}

const postInquiryFormDataToServer = async (
  data: InquiryFormDataTypeToServer
) => {
  const response = await AxiosInstance.post(`/internal/form/`, data);
  return response.data;
};

export const useSendInquiryFormToServer = () => {
  return useMutation<
    InquiryFormDataSuccessFromServer,
    any,
    InquiryFormDataTypeToServer
  >({
    mutationFn: postInquiryFormDataToServer,
    onSuccess: (responseData: InquiryFormDataSuccessFromServer) => {
      console.log("폼 제출 성공:", responseData);
    },
    onError: (error: any) => {
      console.error("폼 제출 실패:", error);
      if (error.response) {
        console.error("서버 오류 메시지:", error.response.data);
      }
    },
  });
};
