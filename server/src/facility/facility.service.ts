import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FacilityServiceBase } from "./base/facility.service.base";

@Injectable()
export class FacilityService extends FacilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
