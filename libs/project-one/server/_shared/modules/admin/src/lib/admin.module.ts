import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminRepoModule } from '@mn/project-one/server/shared/repos/admin';

@Module({
  providers: [
    AdminService,
  ],
  imports: [
    AdminRepoModule
  ],
})
export class AdminModule {}
