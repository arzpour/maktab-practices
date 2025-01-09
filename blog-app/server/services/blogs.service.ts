import { pb } from "../database/connection";

type blogsListType = (_: IPocketBasePagination) => Promise<IPocketBaseBlogList>;
export const blogsList: blogsListType = async ({ page, perPage }) => {
  return await pb.collection("blogs").getList(page, perPage, {
    sort: "-created",
    filter: "hide=False",
  });
};

type blogByIdType = (_: string) => Promise<IBlog | undefined>;
export const blogById: blogByIdType = async (id) => {
  try {
    return await pb.collection("blogs").getFirstListItem(`id="${id}"`);
  } catch {
    return undefined;
  }
};

type creatBlogType = (_: FormData) => Promise<boolean>;
export const creatBlog: creatBlogType = async (data) => {
  try {
    await pb.collection("blogs").create(data);
    return true;
  } catch {
    return false;
  }
};

// hide patch
type patchBlogType = (_1: string, _2: boolean) => Promise<boolean>;
export const patchBlog: patchBlogType = async (id, hide) => {
  try {
    await pb.collection("blogs").update(id, { hide });
    return true;
  } catch {
    return false;
  }
};

type deleteBlogType = (_1: string) => Promise<boolean>;
export const deleteBlog: deleteBlogType = async (id) => {
  try {
    await pb.collection("blogs").delete(id);
    return true;
  } catch {
    return false;
  }
};

type updateBlogType = (_1: string, _2: FormData) => Promise<boolean>;
export const updateBlog: updateBlogType = async (id, data) => {
  try {
    await pb.collection("blogs").update(id, data);
    return true;
  } catch {
    return false;
  }
};
