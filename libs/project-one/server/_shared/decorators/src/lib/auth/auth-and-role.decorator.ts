import { applyDecorators, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Auth } from './auth.decorator';
import { Role } from './role.decorator';
import { RoleTypeType } from '@mn/project-one/server/shared/repos/one';
import { ApiException } from '@nanogiants/nestjs-swagger-api-exception-decorator';

export function AuthAndRole(roleType: RoleTypeType) {
  return applyDecorators(
    Auth(),
    ApiException(() => ForbiddenException, {
      description: 'Forbidden resource.'
    }),
    Role(roleType)
  );
}
