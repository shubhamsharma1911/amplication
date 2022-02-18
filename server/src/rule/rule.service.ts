import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RuleServiceBase } from "./base/rule.service.base";

@Injectable()
export class RuleService extends RuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
