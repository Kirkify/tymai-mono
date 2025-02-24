import { Module } from '@nestjs/common';
import { BitBucketService } from './bit-bucket.service';

@Module({
  providers: [
    BitBucketService
  ],
  exports: [
    BitBucketService
  ],
})
export class BitBucketModule {}
