import { INestApplication } from '@nestjs/common';
import { AdminService } from '@mn/project-one/server/shared/modules/admin';

export const seeder = async (app: INestApplication) => {
  const service = app.get(AdminService);

  console.log('seeding');

  try {

    const email = 'admin@marchnetworks.com';

    const adminTenant = await service.createTenant({
      name: 'admin',
      email
    });

    const adminRole = await service.createSuperAdminRole(adminTenant.id);

    const adminUser = await service.createUser({
      email,
      username: 'admin',
      password: 'admin',
      tenantId: adminTenant.id,
      roleId: adminRole.id,
    })


  } catch (e) {
    console.error(e);
  }

  setTimeout(() => {
    process.exit(0);
  }, 9000);
};
