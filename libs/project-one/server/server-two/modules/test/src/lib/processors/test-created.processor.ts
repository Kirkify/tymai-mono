import {
  InjectQueue,
  OnWorkerEvent,
  Processor,
  WorkerHost,
} from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job, Queue } from 'bullmq';
import { TestEntity } from '../entities/test.entity';
import { EmailService } from '@mn/project-one/server/shared/modules/email';
import { TestCreatedEmail } from '../emails/user-created.email';


export const TestCreatedQueueName = 'TestCreatedQueue';

export const InjectTestCreatedQueue = (): ParameterDecorator =>
  InjectQueue(TestCreatedQueueName);

export type TestCreatedQueueType = Queue<
  TestEntity,
  boolean,
  string
>;
export type TestCreatedJobType = Job<
  TestEntity,
  boolean,
  string
>;

@Processor(TestCreatedQueueName, {
  concurrency: 3,
})
export class TestCreatedProcessor extends WorkerHost {
  private readonly logger = new Logger(TestCreatedProcessor.name);

  constructor(
    private emailService: EmailService,
  ) {
    super();
  }

  async process(job: TestCreatedJobType) {
    const { name, user } = job.data;

    await this.emailService.send({
      email: user.email,
      subject: `A Test Has Been Created`,
      text: 'View your test now.',
      html: TestCreatedEmail({ username: user.username })
    })
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    this.logger.log(`Active ${job.id}`);
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log(`Completed ${job.id}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job) {
    this.logger.log(`Failed ${job.id}`);
  }
}
