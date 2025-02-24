import { Injectable } from '@nestjs/common';
import { OneRepo } from '@mn/project-one/server/shared/repos/one';
import { testSelect } from './types/test.type';

@Injectable()
export class ReviewRepo {
  constructor(
    private oneRepo: OneRepo
  ) {
  }

  async upsert(userId: string, prId: string, issues: string[]) {
    return await this.oneRepo.review.upsert({
      where: { prId },
      create: { prId, userId, issues },
      update: { issues, updatedAt: new Date() },
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
}
