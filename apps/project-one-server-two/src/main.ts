import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigType } from '@nestjs/config';
import { RootModule } from '@mn/project-one/server/server-two/modules/root';
import { HttpExceptionFilter } from '@mn/project-one/server/shared/exceptions';
import { appConfig } from '@mn/project-one/server/server-two/configs';
import { Routing } from '@mn/project-one/shared/routing/server-two';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const openApiConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('March Networks')
    .setDescription('Project One Server Two API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, openApiConfig, {});
  const apiDocsPath = Routing.apiDocs.absolutePath();
  SwaggerModule.setup(apiDocsPath, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const { port }: ConfigType<typeof appConfig> = app.get(appConfig.KEY);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );

  Logger.log(
    `ApiDocs is running on: http://localhost:${port}${apiDocsPath}`
  );
}

bootstrap();
