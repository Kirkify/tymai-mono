import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthModule as SharedAuthModule } from '@mn/project-one/server/shared/modules/auth';

@Module({
  controllers: [
    AuthController
  ],
  imports: [
    SharedAuthModule
  ],
  exports: [],
})
export class AuthModule {}
