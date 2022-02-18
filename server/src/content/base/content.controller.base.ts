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
import { ContentService } from "../content.service";
import { ContentCreateInput } from "./ContentCreateInput";
import { ContentWhereInput } from "./ContentWhereInput";
import { ContentWhereUniqueInput } from "./ContentWhereUniqueInput";
import { ContentFindManyArgs } from "./ContentFindManyArgs";
import { ContentUpdateInput } from "./ContentUpdateInput";
import { Content } from "./Content";
import { FileWhereInput } from "../../file/base/FileWhereInput";
import { File } from "../../file/base/File";
@swagger.ApiBearerAuth()
export class ContentControllerBase {
  constructor(
    protected readonly service: ContentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Content })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ContentCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Content> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Content",
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
        `providing the properties: ${properties} on ${"Content"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        provider: {
          connect: data.provider,
        },
      },
      select: {
        contentType: true,
        createdAt: true,
        description: true,
        hasPrerequiste: true,
        id: true,
        parent: true,

        provider: {
          select: {
            id: true,
          },
        },

        related: true,
        status: true,
        title: true,
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
    resource: "Content",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Content] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ContentFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Content[]> {
    const args = plainToClass(ContentFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Content",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        contentType: true,
        createdAt: true,
        description: true,
        hasPrerequiste: true,
        id: true,
        parent: true,

        provider: {
          select: {
            id: true,
          },
        },

        related: true,
        status: true,
        title: true,
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
    resource: "Content",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Content })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ContentWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Content | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Content",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        contentType: true,
        createdAt: true,
        description: true,
        hasPrerequiste: true,
        id: true,
        parent: true,

        provider: {
          select: {
            id: true,
          },
        },

        related: true,
        status: true,
        title: true,
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
    resource: "Content",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Content })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body()
    data: ContentUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Content | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Content",
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
        `providing the properties: ${properties} on ${"Content"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          provider: {
            connect: data.provider,
          },
        },
        select: {
          contentType: true,
          createdAt: true,
          description: true,
          hasPrerequiste: true,
          id: true,
          parent: true,

          provider: {
            select: {
              id: true,
            },
          },

          related: true,
          status: true,
          title: true,
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
    resource: "Content",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Content })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ContentWhereUniqueInput
  ): Promise<Content | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          contentType: true,
          createdAt: true,
          description: true,
          hasPrerequiste: true,
          id: true,
          parent: true,

          provider: {
            select: {
              id: true,
            },
          },

          related: true,
          status: true,
          title: true,
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
  @common.Get("/:id/fileId")
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => FileWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyFileId(
    @common.Req() request: Request,
    @common.Param() params: ContentWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<File[]> {
    const query: FileWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "File",
    });
    const results = await this.service.findFileId(params.id, {
      where: query,
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
  @common.Post("/:id/fileId")
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "update",
    possession: "any",
  })
  async createFileId(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: ContentWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      fileId: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Content",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Content"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/fileId")
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "update",
    possession: "any",
  })
  async updateFileId(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: ContentWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      fileId: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Content",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Content"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/fileId")
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "update",
    possession: "any",
  })
  async deleteFileId(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: ContentWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      fileId: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Content",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Content"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
