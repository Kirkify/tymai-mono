import { applyDecorators, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from "@nestjs/swagger";
import { ApiException } from '@nanogiants/nestjs-swagger-api-exception-decorator';
import { JwtAuthGuard } from '@mn/project-one/server/shared/guards';

export function Auth() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiException(() => UnauthorizedException, {
      description: 'Unauthorized, invalid session.'
    }),
    UseGuards(JwtAuthGuard),
  );
}
