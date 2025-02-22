import { Injectable } from '@nestjs/common';
import { OneRepo } from '@mn/project-one/server/shared/repos/one';
import { testSelect } from './types/test.type';

@Injectable()
export class TestRepo {
  constructor(
    private oneRepo: OneRepo
  ) {
  }

  async findFirst(userId: string, id: string) {
    return await this.oneRepo.test.findFirst({
      where: {
        id,
        userId
      },
      select: testSelect,
    });
  }

  async create(userId: string, name: string) {
    return await this.oneRepo.test.create(
      {
        data: {
          userId,
          name
        },
        select: testSelect
      });
  }

  async delete(id: string) {
    return await this.oneRepo.test.delete(
      {
        where: {
          id
        },
        select: {
          id: true
        }
      });
  }
}
