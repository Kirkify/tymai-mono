import { Prisma } from '@prisma/project-one/shared/one'
import { userSelect } from '@mn/project-one/server/shared/repos/one';

export const userWithPasswordSelect = {
  ...userSelect,
  password: true
} satisfies Prisma.UserSelect;

export type UserWithPasswordType = Prisma.UserGetPayload<{ select: typeof userWithPasswordSelect }>;
