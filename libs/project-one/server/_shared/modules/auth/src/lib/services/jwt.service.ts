import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { AuthResponseDto } from '../dtos/auth-response.dto';
import { UserType } from '@mn/project-one/server/shared/repos/one';
import { JwtParsedTokenInterface } from '@mn/project-one/server/shared/models';

@Injectable()
export class JwtService {

  constructor(private readonly nestJwtService: NestJwtService) {}

  async createAuthResponse(user: UserType): Promise<AuthResponseDto> {
    const payload: JwtParsedTokenInterface = {
      tenantId: user.tenantId,
      email: user.email,
      username: user.username,
      publicId: user.publicId,
      sub: user.id,
      roleType: user.role.type,
      permissions: user.role.permissions.map(permission => permission.permissionName)
    };

    const token = await this.nestJwtService.signAsync(payload);

    return {
      token,
    }
  }

  verify(token: string) {
    return !!this.nestJwtService.verify(token);
  }
}
