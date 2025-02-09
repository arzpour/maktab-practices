interface IBlog {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  hide: boolean;
  id: string;
  text: string;
  thumbnail: string;
  title: string;
  updated: string;
}

interface IPocketBaseBlogList {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: IBlog[];
}
