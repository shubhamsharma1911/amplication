import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "title";

export const ContentTitle = (record: TContent): string => {
  return record.title || record.id;
};
