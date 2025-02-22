import { Test } from '@nestjs/testing';
import { mock } from "jest-mock-extended";
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    jest.resetAllMocks();

    const module = await Test.createTestingModule({
      providers: [
        AdminService,
      ],
    })
      .useMocker(mock)
      .compile();

    service = module.get(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
