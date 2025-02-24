import { Module } from '@nestjs/common';
import { ReviewRepo } from './review.repo';
import { OneRepoModule } from '@mn/project-one/server/shared/repos/one';

@Module({
  imports: [
    OneRepoModule
  ],
  providers: [
    ReviewRepo
  ],
  exports: [
    ReviewRepo
  ],
})
export class ReviewRepoModule {}
