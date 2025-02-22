import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperAdminTestService } from './super-admin-test.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Routing } from '@mn/project-one/shared/routing/server-one';
import { AuthAndRole, UserId } from '@mn/project-one/server/shared/decorators';
import { RoleTypeEnum } from '@mn/project-one/server/shared/repos/one';
import { TestExceptionRequestDto } from './dtos/test-exception-request.dto';
import { TemplatedApiException } from '@mn/project-one/server/shared/exceptions';
import { TestException } from './exceptions/test.exception';

const route = Routing.superAdmin;

@AuthAndRole(RoleTypeEnum.SuperAdmin)
@ApiTags(route.capitalizedPath)
@Controller(route.absolutePath())
export class SuperAdminTestController {
  constructor(
    private service: SuperAdminTestService
  ) {}

  @ApiOperation({ description: `Testing a super admin API.` })
  @Get()
  test(@UserId() userId: string) {
    return this.service.test(userId);
  }

  @ApiOperation({ description: `Testing a super admin API.` })
  @TemplatedApiException(() => [
    TestException
  ])
  @Post()
  testException(@Body() dto: TestExceptionRequestDto) {
    return this.service.testException(dto);
  }
}
