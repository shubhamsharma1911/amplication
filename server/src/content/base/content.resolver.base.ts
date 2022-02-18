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
import { CreateContentArgs } from "./CreateContentArgs";
import { UpdateContentArgs } from "./UpdateContentArgs";
import { DeleteContentArgs } from "./DeleteContentArgs";
import { ContentFindManyArgs } from "./ContentFindManyArgs";
import { ContentFindUniqueArgs } from "./ContentFindUniqueArgs";
import { Content } from "./Content";
import { FileFindManyArgs } from "../../file/base/FileFindManyArgs";
import { File } from "../../file/base/File";
import { Provider } from "../../provider/base/Provider";
import { ContentService } from "../content.service";

@graphql.Resolver(() => Content)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContentResolverBase {
  constructor(
    protected readonly service: ContentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "read",
    possession: "any",
  })
  async _contentsMeta(
    @graphql.Args() args: ContentFindManyArgs
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

  @graphql.Query(() => [Content])
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "read",
    possession: "any",
  })
  async contents(
    @graphql.Args() args: ContentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Content[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Content",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Content, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "read",
    possession: "own",
  })
  async content(
    @graphql.Args() args: ContentFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Content | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Content",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Content)
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "create",
    possession: "any",
  })
  async createContent(
    @graphql.Args() args: CreateContentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Content> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Content",
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
        `providing the properties: ${properties} on ${"Content"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        provider: {
          connect: args.data.provider,
        },
      },
    });
  }

  @graphql.Mutation(() => Content)
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "update",
    possession: "any",
  })
  async updateContent(
    @graphql.Args() args: UpdateContentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Content | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Content",
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
        `providing the properties: ${properties} on ${"Content"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          provider: {
            connect: args.data.provider,
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

  @graphql.Mutation(() => Content)
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "delete",
    possession: "any",
  })
  async deleteContent(
    @graphql.Args() args: DeleteContentArgs
  ): Promise<Content | null> {
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

  @graphql.ResolveField(() => [File])
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "read",
    possession: "any",
  })
  async fileId(
    @graphql.Parent() parent: Content,
    @graphql.Args() args: FileFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<File[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "File",
    });
    const results = await this.service.findFileId(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Provider, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Content",
    action: "read",
    possession: "any",
  })
  async provider(
    @graphql.Parent() parent: Content,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Provider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Provider",
    });
    const result = await this.service.getProvider(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
