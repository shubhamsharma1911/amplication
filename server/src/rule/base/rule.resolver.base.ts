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
import { CreateRuleArgs } from "./CreateRuleArgs";
import { UpdateRuleArgs } from "./UpdateRuleArgs";
import { DeleteRuleArgs } from "./DeleteRuleArgs";
import { RuleFindManyArgs } from "./RuleFindManyArgs";
import { RuleFindUniqueArgs } from "./RuleFindUniqueArgs";
import { Rule } from "./Rule";
import { Facility } from "../../facility/base/Facility";
import { RuleService } from "../rule.service";

@graphql.Resolver(() => Rule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RuleResolverBase {
  constructor(
    protected readonly service: RuleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "read",
    possession: "any",
  })
  async _rulesMeta(
    @graphql.Args() args: RuleFindManyArgs
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

  @graphql.Query(() => [Rule])
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "read",
    possession: "any",
  })
  async rules(
    @graphql.Args() args: RuleFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Rule[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Rule",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Rule, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "read",
    possession: "own",
  })
  async rule(
    @graphql.Args() args: RuleFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Rule | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Rule",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Rule)
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "create",
    possession: "any",
  })
  async createRule(
    @graphql.Args() args: CreateRuleArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Rule> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Rule",
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
        `providing the properties: ${properties} on ${"Rule"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        facilityId: {
          connect: args.data.facilityId,
        },
      },
    });
  }

  @graphql.Mutation(() => Rule)
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "update",
    possession: "any",
  })
  async updateRule(
    @graphql.Args() args: UpdateRuleArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Rule | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Rule",
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
        `providing the properties: ${properties} on ${"Rule"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          facilityId: {
            connect: args.data.facilityId,
          },
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

  @graphql.Mutation(() => Rule)
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "delete",
    possession: "any",
  })
  async deleteRule(@graphql.Args() args: DeleteRuleArgs): Promise<Rule | null> {
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

  @graphql.ResolveField(() => Facility, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "read",
    possession: "any",
  })
  async facilityId(
    @graphql.Parent() parent: Rule,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Facility | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Facility",
    });
    const result = await this.service.getFacilityId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
