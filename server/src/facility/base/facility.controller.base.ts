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
import { FacilityService } from "../facility.service";
import { FacilityCreateInput } from "./FacilityCreateInput";
import { FacilityWhereInput } from "./FacilityWhereInput";
import { FacilityWhereUniqueInput } from "./FacilityWhereUniqueInput";
import { FacilityFindManyArgs } from "./FacilityFindManyArgs";
import { FacilityUpdateInput } from "./FacilityUpdateInput";
import { Facility } from "./Facility";
import { RuleWhereInput } from "../../rule/base/RuleWhereInput";
import { Rule } from "../../rule/base/Rule";
import { UserWhereInput } from "../../user/base/UserWhereInput";
import { User } from "../../user/base/User";
@swagger.ApiBearerAuth()
export class FacilityControllerBase {
  constructor(
    protected readonly service: FacilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Facility })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FacilityCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Facility> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Facility",
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
        `providing the properties: ${properties} on ${"Facility"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        customerId: {
          connect: data.customerId,
        },

        devices: data.devices
          ? {
              connect: data.devices,
            }
          : undefined,
      },
      select: {
        addressLine_1: true,
        addressLine_2: true,
        addressLine_3: true,
        city: true,
        country: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        devices: {
          select: {
            id: true,
          },
        },

        email: true,
        facilityType: true,
        id: true,
        name: true,
        primaryContact: true,
        secondaryContact: true,
        state: true,
        status: true,
        updatedAt: true,
        zipCode: true,
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
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Facility] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => FacilityFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Facility[]> {
    const args = plainToClass(FacilityFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Facility",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        addressLine_1: true,
        addressLine_2: true,
        addressLine_3: true,
        city: true,
        country: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        devices: {
          select: {
            id: true,
          },
        },

        email: true,
        facilityType: true,
        id: true,
        name: true,
        primaryContact: true,
        secondaryContact: true,
        state: true,
        status: true,
        updatedAt: true,
        zipCode: true,
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
    resource: "Facility",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Facility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FacilityWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Facility | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Facility",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        addressLine_1: true,
        addressLine_2: true,
        addressLine_3: true,
        city: true,
        country: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        devices: {
          select: {
            id: true,
          },
        },

        email: true,
        facilityType: true,
        id: true,
        name: true,
        primaryContact: true,
        secondaryContact: true,
        state: true,
        status: true,
        updatedAt: true,
        zipCode: true,
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
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Facility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body()
    data: FacilityUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Facility | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
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
        `providing the properties: ${properties} on ${"Facility"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          customerId: {
            connect: data.customerId,
          },

          devices: data.devices
            ? {
                connect: data.devices,
              }
            : undefined,
        },
        select: {
          addressLine_1: true,
          addressLine_2: true,
          addressLine_3: true,
          city: true,
          country: true,
          createdAt: true,

          customerId: {
            select: {
              id: true,
            },
          },

          devices: {
            select: {
              id: true,
            },
          },

          email: true,
          facilityType: true,
          id: true,
          name: true,
          primaryContact: true,
          secondaryContact: true,
          state: true,
          status: true,
          updatedAt: true,
          zipCode: true,
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
    resource: "Facility",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Facility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FacilityWhereUniqueInput
  ): Promise<Facility | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          addressLine_1: true,
          addressLine_2: true,
          addressLine_3: true,
          city: true,
          country: true,
          createdAt: true,

          customerId: {
            select: {
              id: true,
            },
          },

          devices: {
            select: {
              id: true,
            },
          },

          email: true,
          facilityType: true,
          id: true,
          name: true,
          primaryContact: true,
          secondaryContact: true,
          state: true,
          status: true,
          updatedAt: true,
          zipCode: true,
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
  @common.Get("/:id/ruleId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => RuleWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyRuleId(
    @common.Req() request: Request,
    @common.Param() params: FacilityWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rule[]> {
    const query: RuleWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Rule",
    });
    const results = await this.service.findRuleId(params.id, {
      where: query,
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
  @common.Post("/:id/ruleId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  async createRuleId(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: FacilityWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      ruleId: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Facility"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/ruleId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  async updateRuleId(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: FacilityWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      ruleId: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Facility"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/ruleId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  async deleteRuleId(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: FacilityWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      ruleId: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Facility"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/userId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => UserWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyUserId(
    @common.Req() request: Request,
    @common.Param() params: FacilityWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const query: UserWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findUserId(params.id, {
      where: query,
      select: {
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        devices: {
          select: {
            id: true,
          },
        },

        email: true,

        facilityId: {
          select: {
            id: true,
          },
        },

        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        roles: true,
        rollNumber: true,
        status: true,
        type: true,
        updatedAt: true,
        username: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/userId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  async createUserId(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: FacilityWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      userId: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Facility"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/userId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  async updateUserId(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: FacilityWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      userId: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Facility"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/userId")
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  async deleteUserId(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: FacilityWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      userId: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Facility",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Facility"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
