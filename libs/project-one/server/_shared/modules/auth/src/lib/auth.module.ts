import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './services/jwt.strategy';
import { JwtService } from './services/jwt.service';
import { JwtVerifierService } from './services/jwt-verifier.service';
import { UserRepoModule } from '@mn/project-one/server/shared/repos/user';
import { jwtConfig } from '@mn/project-one/server/shared/configs';
import { ConfigType } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({}),
    JwtModule.registerAsync({
      inject: [jwtConfig.KEY],
      useFactory: ({ secret }: ConfigType<typeof jwtConfig>) => ({
        secret
      })
    }),
    UserRepoModule
  ],
  providers: [
    AuthService,
    JwtStrategy,
    JwtService,
    JwtVerifierService,
  ],
  exports: [
    AuthService,
    // We can export this service, so other services, which need to verify JWT can verify them
    // Example web-socket.gateway.ts
    JwtVerifierService
  ],
})
export class AuthModule {}
