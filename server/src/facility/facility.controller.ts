import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FacilityService } from "./facility.service";
import { FacilityControllerBase } from "./base/facility.controller.base";

@swagger.ApiTags("facilities")
@common.Controller("facilities")
export class FacilityController extends FacilityControllerBase {
  constructor(
    protected readonly service: FacilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
