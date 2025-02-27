/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { seeder } from './seeder';
import { AdminModule } from '@mn/project-one/server/shared/modules/admin';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  await seeder(app);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = 3009;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
