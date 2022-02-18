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
import { FileService } from "../file.service";
import { FileCreateInput } from "./FileCreateInput";
import { FileWhereInput } from "./FileWhereInput";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";
import { FileFindManyArgs } from "./FileFindManyArgs";
import { FileUpdateInput } from "./FileUpdateInput";
import { File } from "./File";
@swagger.ApiBearerAuth()
export class FileControllerBase {
  constructor(
    protected readonly service: FileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: File })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FileCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<File> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "File",
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
        `providing the properties: ${properties} on ${"File"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        contentId: {
          connect: data.contentId,
        },
      },
      select: {
        available: true,
        checksum: true,

        contentId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fileExt: true,
        fileSize: true,
        id: true,
        language: true,
        name: true,
        thumbnail: true,
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
    resource: "File",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [File] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => FileFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<File[]> {
    const args = plainToClass(FileFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "File",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        available: true,
        checksum: true,

        contentId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fileExt: true,
        fileSize: true,
        id: true,
        language: true,
        name: true,
        thumbnail: true,
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
    resource: "File",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: File })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FileWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<File | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "File",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        available: true,
        checksum: true,

        contentId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fileExt: true,
        fileSize: true,
        id: true,
        language: true,
        name: true,
        thumbnail: true,
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
    resource: "File",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: File })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FileWhereUniqueInput,
    @common.Body()
    data: FileUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<File | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "File",
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
        `providing the properties: ${properties} on ${"File"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          contentId: {
            connect: data.contentId,
          },
        },
        select: {
          available: true,
          checksum: true,

          contentId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          fileExt: true,
          fileSize: true,
          id: true,
          language: true,
          name: true,
          thumbnail: true,
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
    resource: "File",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: File })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FileWhereUniqueInput
  ): Promise<File | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          available: true,
          checksum: true,

          contentId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          fileExt: true,
          fileSize: true,
          id: true,
          language: true,
          name: true,
          thumbnail: true,
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
