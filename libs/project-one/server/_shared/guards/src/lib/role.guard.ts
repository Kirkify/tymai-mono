import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtParsedTokenInterface } from '@mn/project-one/server/shared/models';

export const RoleGuardKeyName = 'role';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext) {
    const requiredRole = this.reflector.getAllAndOverride<string>(RoleGuardKeyName, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest();
    const user: JwtParsedTokenInterface = request.user;

    return user.roleType === requiredRole;
  }
}
