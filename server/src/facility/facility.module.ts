import { Module } from "@nestjs/common";
import { FacilityModuleBase } from "./base/facility.module.base";
import { FacilityService } from "./facility.service";
import { FacilityController } from "./facility.controller";
import { FacilityResolver } from "./facility.resolver";

@Module({
  imports: [FacilityModuleBase],
  controllers: [FacilityController],
  providers: [FacilityService, FacilityResolver],
  exports: [FacilityService],
})
export class FacilityModule {}
