import { Test } from '@nestjs/testing';
import { TestController } from './test.controller';
import { TestService } from './test.service';

describe('ProjectOneServerTenantController', () => {
  let controller: TestController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TestService],
      controllers: [TestController],
    }).compile();

    controller = module.get(TestController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
