import { Prisma } from '@prisma/project-one/shared/one'
import { roleSelect } from './role.type';

// A type that only contains a subset of the scalar fields
export const userSelect = {
  tenantId: true,
  id: true,
  publicId: true,
  email: true,
  username: true,
  role: {
    select: roleSelect
  }
} satisfies Prisma.UserSelect;

// Infer the resulting payload type
export type UserType = Prisma.UserGetPayload<{ select: typeof userSelect }>;
