import { Body, Controller, Delete, Get, NotFoundException, Post, Put } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Routing } from '@mn/project-one/shared/routing/server-two';
import { CreateTestRequestDto } from './dtos/create-test-request.dto';
import { DeleteTestRequestDto } from './dtos/delete-test-request.dto';
import { Auth, UserId } from '@mn/project-one/server/shared/decorators';
import { TemplatedApiException } from '@mn/project-one/server/shared/exceptions';

const route = Routing.test;

@ApiTags(route.capitalizedPath)
@Auth()
@Controller(route.absolutePath())
export class TestController {
  constructor(
    private service: TestService
  ) {}


  @ApiOperation({ description: `Create a new test.` })
  @Post()
  create(@UserId() userId: string, @Body() dto: CreateTestRequestDto) {
    return this.service.create(userId, dto);
  }

  @ApiOperation({ description: `Delete an existing test.` })
  @TemplatedApiException(() => [
    NotFoundException
  ])
  @Delete()
  delete(@UserId() userId: string, @Body() dto: DeleteTestRequestDto) {
    return this.service.delete(userId, dto);
  }
}
