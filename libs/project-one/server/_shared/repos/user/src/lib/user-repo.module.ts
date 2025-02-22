import { Module } from '@nestjs/common';
import { OneRepoModule } from '@mn/project-one/server/shared/repos/one';
import { UserRepo } from './user.repo';

@Module({
  imports: [
    OneRepoModule
  ],
  providers: [
    UserRepo
  ],
  exports: [
    UserRepo
  ],
})
export class UserRepoModule {}
