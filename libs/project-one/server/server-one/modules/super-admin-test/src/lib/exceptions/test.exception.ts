import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '@mn/project-one/server/shared/models';
import { BaseExceptionDto } from '@mn/project-one/server/shared/exceptions';

export class TestException extends BaseExceptionDto {
  constructor() {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'This is an example message for an exception.',
      errorCode: ErrorCodes.Test
    });
  }
}
