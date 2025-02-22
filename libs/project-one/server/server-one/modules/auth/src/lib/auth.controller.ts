import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService, LoginRequestDto } from '@mn/project-one/server/shared/modules/auth';
import { Routing } from '@mn/project-one/shared/routing/server-one';

const route = Routing.auth;

@ApiTags(route.capitalizedPath)
@Controller(route.absolutePath())
export class AuthController {
  constructor(private service: AuthService) {}

  @ApiOperation({ description: `Log into the application.` })
  @Post(route.children.login.path)
  login(@Body() dto: LoginRequestDto) {
    return this.service.login(dto);
  }
}
