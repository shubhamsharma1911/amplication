import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FacilityResolverBase } from "./base/facility.resolver.base";
import { Facility } from "./base/Facility";
import { FacilityService } from "./facility.service";

@graphql.Resolver(() => Facility)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FacilityResolver extends FacilityResolverBase {
  constructor(
    protected readonly service: FacilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
