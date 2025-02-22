import { Injectable } from '@nestjs/common';
import {
  userWithPasswordSelect,
  UserWithPasswordType,
} from './types/user-with-password.type';
import { Prisma } from '@prisma/project-one/shared/one';
import { OneRepo } from '@mn/project-one/server/shared/repos/one';

@Injectable()
export class UserRepo {
  constructor(private oneRepo: OneRepo) {}

  async findUserWithPasswordFromTenantNameAndEmail(
    tenantName: string,
    email: string
  ): Promise<UserWithPasswordType | null> {
    return await this.oneRepo.user.findFirst({
      where: this._getFindEmailWhereClause(tenantName, email),
      select: userWithPasswordSelect,
    });
  }

  async findUserWithPasswordFromTenantNameAndUsername(
    tenantName: string,
    username: string
  ): Promise<UserWithPasswordType | null> {
    return await this.oneRepo.user.findFirst({
      where: this._getFindUsernameWhereClause(tenantName, username),
      select: userWithPasswordSelect,
    });
  }

  private _getFindEmailWhereClause(tenantName: string, email: string) {
    return {
      AND: [
        {
          tenant: {
            name: {
              equals: tenantName,
              mode: 'insensitive',
            },
          },
        },
        {
          email: {
            equals: email,
            mode: 'insensitive',
          },
        },
        {
          deletedAt: null,
        },
      ],
    } as Prisma.UserWhereInput;
  }

  private _getFindUsernameWhereClause(tenantName: string, username: string) {
    return {
      AND: [
        {
          tenant: {
            name: {
              equals: tenantName,
              mode: 'insensitive',
            },
          },
        },
        {
          username: {
            equals: username,
            mode: 'insensitive',
          },
        },
        {
          deletedAt: null,
        },
      ],
    } as Prisma.UserWhereInput;
  }
}
