import { PrismaService } from "nestjs-prisma";
import { Prisma, Tag } from "@prisma/client";

export class TagServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagFindManyArgs>
  ): Promise<number> {
    return this.prisma.tag.count(args);
  }

  async findMany<T extends Prisma.TagFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagFindManyArgs>
  ): Promise<Tag[]> {
    return this.prisma.tag.findMany(args);
  }
  async findOne<T extends Prisma.TagFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagFindUniqueArgs>
  ): Promise<Tag | null> {
    return this.prisma.tag.findUnique(args);
  }
  async create<T extends Prisma.TagCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Tag> {
    return this.prisma.tag.create<T>(args);
  }
  async update<T extends Prisma.TagUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUpdateArgs>
  ): Promise<Tag> {
    return this.prisma.tag.update<T>(args);
  }
  async delete<T extends Prisma.TagDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagDeleteArgs>
  ): Promise<Tag> {
    return this.prisma.tag.delete(args);
  }
}
