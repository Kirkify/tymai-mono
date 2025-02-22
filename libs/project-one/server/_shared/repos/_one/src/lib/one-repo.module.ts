import { Module } from '@nestjs/common';
import { OneRepo } from './one.repo';

@Module({
  providers: [
    OneRepo
  ],
  exports: [
    OneRepo
  ],
})
export class OneRepoModule {}
