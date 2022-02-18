import { PrismaService } from "nestjs-prisma";
import { Prisma, Facility, Rule, User, Customer, Device } from "@prisma/client";

export class FacilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FacilityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FacilityFindManyArgs>
  ): Promise<number> {
    return this.prisma.facility.count(args);
  }

  async findMany<T extends Prisma.FacilityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FacilityFindManyArgs>
  ): Promise<Facility[]> {
    return this.prisma.facility.findMany(args);
  }
  async findOne<T extends Prisma.FacilityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FacilityFindUniqueArgs>
  ): Promise<Facility | null> {
    return this.prisma.facility.findUnique(args);
  }
  async create<T extends Prisma.FacilityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FacilityCreateArgs>
  ): Promise<Facility> {
    return this.prisma.facility.create<T>(args);
  }
  async update<T extends Prisma.FacilityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FacilityUpdateArgs>
  ): Promise<Facility> {
    return this.prisma.facility.update<T>(args);
  }
  async delete<T extends Prisma.FacilityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FacilityDeleteArgs>
  ): Promise<Facility> {
    return this.prisma.facility.delete(args);
  }

  async findRuleId(
    parentId: string,
    args: Prisma.RuleFindManyArgs
  ): Promise<Rule[]> {
    return this.prisma.facility
      .findUnique({
        where: { id: parentId },
      })
      .ruleId(args);
  }

  async findUserId(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.facility
      .findUnique({
        where: { id: parentId },
      })
      .userId(args);
  }

  async getCustomerId(parentId: string): Promise<Customer | null> {
    return this.prisma.facility
      .findUnique({
        where: { id: parentId },
      })
      .customerId();
  }

  async getDevices(parentId: string): Promise<Device | null> {
    return this.prisma.facility
      .findUnique({
        where: { id: parentId },
      })
      .devices();
  }
}
