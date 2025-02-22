import { Module } from '@nestjs/common';
import { OneRepoModule } from '@mn/project-one/server/shared/repos/one';
import { TestRepo } from './test.repo';

@Module({
  imports: [
    OneRepoModule
  ],
  providers: [
    TestRepo
  ],
  exports: [
    TestRepo
  ],
})
export class TestRepoModule {}
