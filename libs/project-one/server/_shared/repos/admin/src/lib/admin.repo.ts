import { Injectable } from '@nestjs/common';
import { OneRepo, RoleTypeEnum } from '@mn/project-one/server/shared/repos/one';
import { CreateUserType } from './types/create-user.type';

@Injectable()
export class AdminRepo {
  constructor(private oneRepo: OneRepo) {}

  async createTenant(name: string, email: string) {
    return await this.oneRepo.tenant.create({
      data: {
        name,
        email,
      },
      select: {
        id: true,
      },
    });
  }

  async createSuperAdminRole(tenantId: string) {
    return await this.oneRepo.role.create({
      data: {
        name: 'Super Admin',
        type: RoleTypeEnum.SuperAdmin,
        tenantId
      },
      select: {
        id: true
      }
    });
  }

  async createUser(data: CreateUserType) {
    return await this.oneRepo.user.create({
      data,
      select: {
        id: true
      }
    })
  }
}
