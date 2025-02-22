import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TestRepoModule } from '@mn/project-one/server/server-two/repos/test';
import { EmailModule } from '@mn/project-one/server/shared/modules/email';
import { TestCreatedProcessor, TestCreatedQueueName } from './processors/test-created.processor';
import { QueueModule } from '@mn/project-one/server/shared/modules/queue';

@Module({
  imports: [
    TestRepoModule,
    EmailModule,

    QueueModule.registerQueue(TestCreatedQueueName),
  ],
  controllers: [
    TestController
  ],
  providers: [
    TestService,
    TestCreatedProcessor
  ],
})
export class TestModule {}
