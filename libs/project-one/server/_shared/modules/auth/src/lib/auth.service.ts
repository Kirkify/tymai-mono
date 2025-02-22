import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequestDto } from './dtos/login-request.dto';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { JwtService } from './services/jwt.service';
import { isEmail } from 'class-validator';
import {
  UserRepo,
  UserWithPasswordType,
} from '@mn/project-one/server/shared/repos/user';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userRepo: UserRepo) {}

  async login(dto: LoginRequestDto): Promise<AuthResponseDto> {
    const { tenantName, emailOrUsername, password } = dto;

    let user: UserWithPasswordType | null;

    if (isEmail(emailOrUsername)) {
      user = await this.userRepo.findUserWithPasswordFromTenantNameAndEmail(
        tenantName,
        emailOrUsername
      );
    } else {
      user = await this.userRepo.findUserWithPasswordFromTenantNameAndUsername(
        tenantName,
        emailOrUsername
      );
    }

    if (!user) {
      console.log(
        `EmailOrUsername: ${emailOrUsername} not found in the DB for Tenant name: ${tenantName}`
      );
      throw new UnauthorizedException();
    }

    if (!(await verify(user.password, password))) {
      console.log(
        `Incorrect password for EmailOrUsername: ${emailOrUsername} entered for Tenant name: ${tenantName}`
      );
      throw new UnauthorizedException();
    }

    return await this.jwtService.createAuthResponse(user);
  }
}
