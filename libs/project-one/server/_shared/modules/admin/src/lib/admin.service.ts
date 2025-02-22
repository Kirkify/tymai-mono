import { Injectable } from '@nestjs/common';
import { AdminRepo } from '@mn/project-one/server/shared/repos/admin';
import { CreateTenantInterface } from './models/create-tenant.interface';
import { CreateUserInterface } from './models/create-user.interface';
import { generateId, hashPassword } from '@mn/project-one/server/shared/models';

@Injectable()
export class AdminService {
  constructor(private repo: AdminRepo) {}

  async createTenant({ name, email }: CreateTenantInterface) {
    return await this.repo.createTenant(name, email);
  }

  async createSuperAdminRole(tenantId: string) {
    return await this.repo.createSuperAdminRole(tenantId);
  }

  async createUser(data: CreateUserInterface) {
    const publicId = generateId();
    const password = await hashPassword(data.password);

    return await this.repo.createUser({
      ...data,
      password,
      publicId
    })
  }
}
