import { Test } from '@nestjs/testing';
import { EmailService } from './email.service';
import { mock } from 'jest-mock-extended';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EmailService],
    })
      .useMocker(mock)
      .compile();

    service = module.get(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
