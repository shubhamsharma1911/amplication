import { PrismaService } from "nestjs-prisma";
import { Prisma, Rule, Facility } from "@prisma/client";

export class RuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RuleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleFindManyArgs>
  ): Promise<number> {
    return this.prisma.rule.count(args);
  }

  async findMany<T extends Prisma.RuleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleFindManyArgs>
  ): Promise<Rule[]> {
    return this.prisma.rule.findMany(args);
  }
  async findOne<T extends Prisma.RuleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleFindUniqueArgs>
  ): Promise<Rule | null> {
    return this.prisma.rule.findUnique(args);
  }
  async create<T extends Prisma.RuleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleCreateArgs>
  ): Promise<Rule> {
    return this.prisma.rule.create<T>(args);
  }
  async update<T extends Prisma.RuleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleUpdateArgs>
  ): Promise<Rule> {
    return this.prisma.rule.update<T>(args);
  }
  async delete<T extends Prisma.RuleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleDeleteArgs>
  ): Promise<Rule> {
    return this.prisma.rule.delete(args);
  }

  async getFacilityId(parentId: string): Promise<Facility | null> {
    return this.prisma.rule
      .findUnique({
        where: { id: parentId },
      })
      .facilityId();
  }
}
