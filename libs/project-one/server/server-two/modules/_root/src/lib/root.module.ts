import { Module } from '@nestjs/common';
import { TestModule } from '@mn/project-one/server/server-two/modules/test';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { config as sharedConfig, redisConfig } from '@mn/project-one/server/shared/configs';
import { config } from '@mn/project-one/server/server-two/configs';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { BasicAuthMiddleware } from '@mn/project-one/server/shared/middlewares';
import { AuthModule } from '@mn/project-one/server/server-two/modules/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        ...sharedConfig,
        ...config
      ],
    }),
    BullModule.forRootAsync({
      inject: [redisConfig.KEY],
      useFactory: ({ host, port, password, }: ConfigType<typeof redisConfig>) => ({
        connection: {
          host,
          port,
          password,
        },
        defaultJobOptions: {
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 1000,
          },
        },
      }),
    }),
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter,
      middleware: BasicAuthMiddleware,
    }),
    AuthModule,
    TestModule
  ]
})
export class RootModule {}
