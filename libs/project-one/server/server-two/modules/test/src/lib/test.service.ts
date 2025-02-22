import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestRequestDto } from './dtos/create-test-request.dto';
import { TestRepo } from '@mn/project-one/server/server-two/repos/test';
import { TestEntity } from './entities/test.entity';
import { DeleteTestRequestDto } from './dtos/delete-test-request.dto';
import { InjectTestCreatedQueue, TestCreatedQueueType } from './processors/test-created.processor';
import { generateId } from '@mn/project-one/server/shared/models';

@Injectable()
export class TestService {

  constructor(
    private repo: TestRepo,
    @InjectTestCreatedQueue() private testCreatedQueue: TestCreatedQueueType
  ) {
  }

  async create(userId: string, { name }: CreateTestRequestDto): Promise<TestEntity> {
    const test = await this.repo.create(userId, name);
    await this.testCreatedQueue.add(generateId(), test);
    return test;
  }

  async delete(userId: string, { id }: DeleteTestRequestDto) {
    const test = await this.repo.findFirst(userId, id);

    if (!test) {
      throw new NotFoundException();
    }

    return await this.repo.delete(id);
  }
}
