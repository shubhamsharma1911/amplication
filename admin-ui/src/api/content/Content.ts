import { File } from "../file/File";
import { Provider } from "../provider/Provider";

export type Content = {
  contentType?: "Video" | "Audio" | "Ebook" | "Game";
  createdAt: Date;
  description: string | null;
  fileId?: Array<File>;
  hasPrerequiste: string | null;
  id: string;
  parent: string | null;
  provider?: Provider;
  related: string | null;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  title: string;
  updatedAt: Date;
};
