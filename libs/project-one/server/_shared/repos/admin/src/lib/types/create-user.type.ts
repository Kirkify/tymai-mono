import { Prisma } from '@prisma/project-one/shared/one';

export type CreateUserType = Pick<Prisma.UserUncheckedCreateInput,
  'publicId' |
  'email' |
  'username' |
  'password' |
  'tenantId' |
  'roleId'
>;
