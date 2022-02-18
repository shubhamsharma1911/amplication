import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type ContentCreateInput = {
  contentType: "Video" | "Audio" | "Ebook" | "Game";
  description?: string | null;
  hasPrerequiste?: string | null;
  parent?: string | null;
  provider: ProviderWhereUniqueInput;
  related?: string | null;
  status: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  title: string;
};
