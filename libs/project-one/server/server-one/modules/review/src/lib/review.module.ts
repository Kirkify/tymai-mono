import { Module } from '@nestjs/common';
import { ReviewRepoModule } from '@mn/project-one/server/server-one/repos/review';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { BitBucketModule } from '@mn/project-one/server/server-one/modules/bit-bucket';

@Module({
  controllers: [
    ReviewController
  ],
  providers: [
    ReviewService
  ],
  imports: [
    BitBucketModule,
    ReviewRepoModule,
  ],
})
export class ReviewModule {}
