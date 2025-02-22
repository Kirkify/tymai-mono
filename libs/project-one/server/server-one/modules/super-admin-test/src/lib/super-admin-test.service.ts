import { Injectable } from '@nestjs/common';
import { SimpleResponseDto } from '@mn/project-one/server/shared/dtos';
import { TestExceptionRequestDto } from './dtos/test-exception-request.dto';
import { TestException } from './exceptions/test.exception';

@Injectable()
export class SuperAdminTestService {

  test(userId: string): SimpleResponseDto {
    console.log(`Admin User Id = ${userId}`);

    return {
      success: true,
    };
  }

  testException({ guess }: TestExceptionRequestDto): SimpleResponseDto {
    if (guess !== '1234') {
      throw new TestException();
    }

    return {
      success: true,
    };
  }
}
