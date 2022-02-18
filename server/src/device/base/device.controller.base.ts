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
import { DeviceService } from "../device.service";
import { DeviceCreateInput } from "./DeviceCreateInput";
import { DeviceWhereInput } from "./DeviceWhereInput";
import { DeviceWhereUniqueInput } from "./DeviceWhereUniqueInput";
import { DeviceFindManyArgs } from "./DeviceFindManyArgs";
import { DeviceUpdateInput } from "./DeviceUpdateInput";
import { Device } from "./Device";
@swagger.ApiBearerAuth()
export class DeviceControllerBase {
  constructor(
    protected readonly service: DeviceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Device })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: DeviceCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Device> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Device",
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
        `providing the properties: ${properties} on ${"Device"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        facility: {
          connect: data.facility,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        deviceId: true,
        deviceType: true,

        facility: {
          select: {
            id: true,
          },
        },

        id: true,
        manufacturer: true,
        model: true,
        size: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
    resource: "Device",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Device] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => DeviceFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Device[]> {
    const args = plainToClass(DeviceFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Device",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        deviceId: true,
        deviceType: true,

        facility: {
          select: {
            id: true,
          },
        },

        id: true,
        manufacturer: true,
        model: true,
        size: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
    resource: "Device",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DeviceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Device | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Device",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        deviceId: true,
        deviceType: true,

        facility: {
          select: {
            id: true,
          },
        },

        id: true,
        manufacturer: true,
        model: true,
        size: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
    resource: "Device",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body()
    data: DeviceUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Device | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Device",
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
        `providing the properties: ${properties} on ${"Device"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          facility: {
            connect: data.facility,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          deviceId: true,
          deviceType: true,

          facility: {
            select: {
              id: true,
            },
          },

          id: true,
          manufacturer: true,
          model: true,
          size: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
    resource: "Device",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Device | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          deviceId: true,
          deviceType: true,

          facility: {
            select: {
              id: true,
            },
          },

          id: true,
          manufacturer: true,
          model: true,
          size: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
