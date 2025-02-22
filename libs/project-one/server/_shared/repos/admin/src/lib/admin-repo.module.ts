import { Module } from '@nestjs/common';
import { OneRepoModule } from '@mn/project-one/server/shared/repos/one';
import { AdminRepo } from './admin.repo';

@Module({
  imports: [
    OneRepoModule
  ],
  providers: [
    AdminRepo
  ],
  exports: [
    AdminRepo
  ],
})
export class AdminRepoModule {}
