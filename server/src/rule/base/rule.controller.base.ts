import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { RuleService } from "../rule.service";
import { RuleCreateInput } from "./RuleCreateInput";
import { RuleWhereInput } from "./RuleWhereInput";
import { RuleWhereUniqueInput } from "./RuleWhereUniqueInput";
import { RuleFindManyArgs } from "./RuleFindManyArgs";
import { RuleUpdateInput } from "./RuleUpdateInput";
import { Rule } from "./Rule";
@swagger.ApiBearerAuth()
export class RuleControllerBase {
  constructor(
    protected readonly service: RuleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Rule })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: RuleCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rule> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Rule",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Rule"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        facilityId: {
          connect: data.facilityId,
        },
      },
      select: {
        createdAt: true,

        facilityId: {
          select: {
            id: true,
          },
        },

        filter: true,
        id: true,
        rule: true,
        ruleType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Rule] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => RuleFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rule[]> {
    const args = plainToClass(RuleFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Rule",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        facilityId: {
          select: {
            id: true,
          },
        },

        filter: true,
        id: true,
        rule: true,
        ruleType: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Rule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: RuleWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rule | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Rule",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        facilityId: {
          select: {
            id: true,
          },
        },

        filter: true,
        id: true,
        rule: true,
        ruleType: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Rule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: RuleWhereUniqueInput,
    @common.Body()
    data: RuleUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rule | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Rule",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Rule"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          facilityId: {
            connect: data.facilityId,
          },
        },
        select: {
          createdAt: true,

          facilityId: {
            select: {
              id: true,
            },
          },

          filter: true,
          id: true,
          rule: true,
          ruleType: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Rule",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Rule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: RuleWhereUniqueInput
  ): Promise<Rule | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          facilityId: {
            select: {
              id: true,
            },
          },

          filter: true,
          id: true,
          rule: true,
          ruleType: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
