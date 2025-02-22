import { Module } from '@nestjs/common';
import { SuperAdminTestController } from './super-admin-test.controller';
import { SuperAdminTestService } from './super-admin-test.service';

@Module({
  controllers: [
    SuperAdminTestController
  ],
  providers: [
    SuperAdminTestService,
  ],
})
export class SuperAdminTestModule {}
