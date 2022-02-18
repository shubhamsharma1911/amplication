import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateFacilityArgs } from "./CreateFacilityArgs";
import { UpdateFacilityArgs } from "./UpdateFacilityArgs";
import { DeleteFacilityArgs } from "./DeleteFacilityArgs";
import { FacilityFindManyArgs } from "./FacilityFindManyArgs";
import { FacilityFindUniqueArgs } from "./FacilityFindUniqueArgs";
import { Facility } from "./Facility";
import { RuleFindManyArgs } from "../../rule/base/RuleFindManyArgs";
import { Rule } from "../../rule/base/Rule";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { Customer } from "../../customer/base/Customer";
import { Device } from "../../device/base/Device";
import { FacilityService } from "../facility.service";

@graphql.Resolver(() => Facility)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FacilityResolverBase {
  constructor(
    protected readonly service: FacilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  async _facilitiesMeta(
    @graphql.Args() args: FacilityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Facility])
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  async facilities(
    @graphql.Args() args: FacilityFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Facility[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Facility",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Facility, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "own",
  })
  async facility(
    @graphql.Args() args: FacilityFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Facility | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Facility",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Facility)
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "create",
    possession: "any",
  })
  async createFacility(
    @graphql.Args() args: CreateFacilityArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Facility> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Facility"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        customerId: {
          connect: args.data.customerId,
        },

        devices: args.data.devices
          ? {
              connect: args.data.devices,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Facility)
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  async updateFacility(
    @graphql.Args() args: UpdateFacilityArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Facility | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Facility"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          customerId: {
            connect: args.data.customerId,
          },

          devices: args.data.devices
            ? {
                connect: args.data.devices,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Facility)
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "delete",
    possession: "any",
  })
  async deleteFacility(
    @graphql.Args() args: DeleteFacilityArgs
  ): Promise<Facility | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Rule])
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  async ruleId(
    @graphql.Parent() parent: Facility,
    @graphql.Args() args: RuleFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Rule[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Rule",
    });
    const results = await this.service.findRuleId(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  async userId(
    @graphql.Parent() parent: Facility,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findUserId(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Customer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  async customerId(
    @graphql.Parent() parent: Facility,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Customer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Customer",
    });
    const result = await this.service.getCustomerId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Device, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  async devices(
    @graphql.Parent() parent: Facility,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Device | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Device",
    });
    const result = await this.service.getDevices(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
