import { Test } from '@nestjs/testing';
import { TestService } from './test.service';

describe('TenantService', () => {
  let service: TestService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TestService],
    }).compile();

    service = module.get(TestService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
