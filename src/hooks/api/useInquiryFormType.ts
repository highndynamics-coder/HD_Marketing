import { useQuery } from "@tanstack/react-query";
import AxiosInstance from "@/shared/lib/utils/api/axiosInstance";

interface FormType {
  id: number;
  name: string;
}

export type InquiryFormType = FormType[];

const fetchInquiryFormType = async (): Promise<InquiryFormType> => {
  const { data } = await AxiosInstance.get(`/internal/formtype/`);
  return data;
};

export const useInquiryFormType = () => {
  return useQuery<InquiryFormType | any>({
    queryKey: ["inquiryFormType"],
    queryFn: () => fetchInquiryFormType(),
    staleTime: 1000 * 60 * 5,
  });
};
