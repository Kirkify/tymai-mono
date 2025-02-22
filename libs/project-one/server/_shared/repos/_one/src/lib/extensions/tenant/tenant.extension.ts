import { Prisma } from "@prisma/project-one/shared/one";

export function tenantExtension() {
  return Prisma.defineExtension(prisma => {
      return prisma.$extends({
        name: 'tenantExtension',
        model: {
          tenant: {
            async test(id: string, vector: number[]) {
              return 'test';
            },
          },
        },
      })
    }
  );
}
