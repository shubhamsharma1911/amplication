import { registerEnumType } from "@nestjs/graphql";

export enum EnumContentContentType {
  Video = "Video",
  Audio = "Audio",
  Ebook = "Ebook",
  Game = "Game",
}

registerEnumType(EnumContentContentType, {
  name: "EnumContentContentType",
});
