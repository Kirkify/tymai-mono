import { Prisma } from '@prisma/project-one/shared/one'
import { userSelect } from '@mn/project-one/server/shared/repos/one';

// A type that only contains a subset of the scalar fields
export const testSelect = {
  id: true,
  name: true,
  description: true,
  updatedAt: true,
  user: {
    select: userSelect
  }
} satisfies Prisma.TestSelect;

// Infer the resulting payload type
export type TestType = Prisma.TestGetPayload<{ select: typeof testSelect }>;
