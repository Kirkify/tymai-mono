import { Prisma } from '@prisma/project-one/shared/one'
import { permissionNameSelect } from './permission-name.type';

export const roleSelect = {
  id: true,
  name: true,
  type: true,
  permissions: {
    select: permissionNameSelect
  },
} satisfies Prisma.RoleSelect;

export type RoleType = Prisma.RoleGetPayload<{ select: typeof roleSelect }>;
