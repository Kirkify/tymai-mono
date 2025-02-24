import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { config as sharedConfig, redisConfig } from '@mn/project-one/server/shared/configs';
import { config } from '@mn/project-one/server/server-one/configs';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { BasicAuthMiddleware } from '@mn/project-one/server/shared/middlewares';
import { AuthModule } from '@mn/project-one/server/server-one/modules/auth';
import { SuperAdminTestModule } from '@mn/project-one/server/server-one/modules/super-admin-test';
import { ReviewModule } from '@mn/project-one/server/server-one/modules/review';

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
      useFactory: ({
                     host,
                     port,
                     password,
                   }: ConfigType<typeof redisConfig>) => ({
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
    SuperAdminTestModule,
    ReviewModule,
  ]
})
export class RootModule {}
