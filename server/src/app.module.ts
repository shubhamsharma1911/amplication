import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CustomerModule } from "./customer/customer.module";
import { FacilityModule } from "./facility/facility.module";
import { DeviceModule } from "./device/device.module";
import { ProviderModule } from "./provider/provider.module";
import { ContentModule } from "./content/content.module";
import { FileModule } from "./file/file.module";
import { RuleModule } from "./rule/rule.module";
import { TagModule } from "./tag/tag.module";
import { HealthModule } from "./health/health.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    CustomerModule,
    FacilityModule,
    DeviceModule,
    ProviderModule,
    ContentModule,
    FileModule,
    RuleModule,
    TagModule,
    HealthModule,
    ACLModule,
    AuthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
