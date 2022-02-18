import { Module } from "@nestjs/common";
import { RuleModuleBase } from "./base/rule.module.base";
import { RuleService } from "./rule.service";
import { RuleController } from "./rule.controller";
import { RuleResolver } from "./rule.resolver";

@Module({
  imports: [RuleModuleBase],
  controllers: [RuleController],
  providers: [RuleService, RuleResolver],
  exports: [RuleService],
})
export class RuleModule {}
