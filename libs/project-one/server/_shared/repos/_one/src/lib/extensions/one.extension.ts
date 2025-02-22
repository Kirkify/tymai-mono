import { PrismaClient } from "@prisma/project-one/shared/one";
import { tenantExtension } from './tenant/tenant.extension';

export function getExtendedClient(arg?: ConstructorParameters<typeof PrismaClient>[0]) {
  return new PrismaClient(arg)
    .$extends(tenantExtension())
    ;
}
