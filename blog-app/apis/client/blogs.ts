import { urls } from "@/utils/urls";
import { generateAxiosInstance } from "./instance";

type getBlogsListType = () => Promise<IPocketBaseBlogList>;
export const getBlogsList: getBlogsListType = async () => {
  const instance = generateAxiosInstance();
  console.log(instance);

  const response = await instance.get(urls.blog.list);
  return response.data;
};
