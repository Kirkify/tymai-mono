import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { mock } from "jest-mock-extended";
import { JwtService } from './services/jwt.service';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { UnauthorizedException } from '@nestjs/common';
import { hashPassword } from '@mn/project-one/server/shared/models';
import { UserRepo, UserWithPasswordType } from '@mn/project-one/server/shared/repos/user';
import { UserEntity } from '@mn/project-one/server/shared/entities';

const mockPassword = '1';
const mockEmailAddress = 'a@b.com';

const mockGetUserWithRoleAndPermissionsEntity = (): UserEntity => ({
  email: '',
  id: '',
  publicId: '',
  role: {
    id: '',
    name: '',
    type: 'DefaultRole',
    permissions: []
  },
  tenantId: '',
  username: '',
});

const mockGetUserWithPasswordEntity = async (password: string) : Promise<UserWithPasswordType> => ({
  ...mockGetUserWithRoleAndPermissionsEntity(),
  password: await hashPassword(password),
});

describe('AuthService', () => {
  let service: AuthService;
  let userRepo: UserRepo;
  let jwtService : JwtService;

  beforeEach(async () => {
    jest.resetAllMocks();

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
      ],
    })
      .useMocker(mock)
      .compile();

    service = module.get(AuthService);
    userRepo = module.get(UserRepo);
    jwtService = module.get(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('Login',() => {

    const findUserWithPasswordResponse = mockGetUserWithPasswordEntity(mockPassword);
    const mockCreateAuthResponse: AuthResponseDto = {
      token: '1'
    }

    it('should login the user successfully using an email address', async () => {
      const spy1 = jest.spyOn(userRepo, 'findUserWithPasswordFromTenantNameAndEmail').mockResolvedValueOnce(findUserWithPasswordResponse);
      const spy2 = jest.spyOn(jwtService, 'createAuthResponse').mockResolvedValueOnce(mockCreateAuthResponse)

      const user = await service.login({
        tenantName: '',
        emailOrUsername: 'user1@tenant1.com',
        password: mockPassword
      })

      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
      expect(user).toBe(mockCreateAuthResponse);
    });

    it('should login the user successfully using a username', async () => {
      const spy1 = jest.spyOn(userRepo, 'findUserWithPasswordFromTenantNameAndUsername').mockResolvedValueOnce(findUserWithPasswordResponse);
      const spy2 = jest.spyOn(jwtService, 'createAuthResponse').mockResolvedValueOnce(mockCreateAuthResponse)

      const user = await service.login({
        tenantName: '',
        emailOrUsername: 'user1',
        password: '1'
      })

      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
      expect(user).toBe(mockCreateAuthResponse);
    });
  });

  it('should return UnauthorizedException, if email or username is not found.', async () => {
    expect.assertions(1);
    jest.spyOn(userRepo, 'findUserWithPasswordFromTenantNameAndEmail').mockResolvedValueOnce(null);

    await expect(service.login({ tenantName: '', emailOrUsername: mockEmailAddress, password: '' })).rejects.toThrow(
      UnauthorizedException
    );
  });

  it('should return UnauthorizedException, if password is incorrect.', async () => {
    expect.assertions(1);
    jest.spyOn(userRepo, 'findUserWithPasswordFromTenantNameAndUsername').mockResolvedValueOnce(mockGetUserWithPasswordEntity(mockPassword));

    const incorrectPassword = mockPassword + '@';

    await expect(service.login({ tenantName: '', emailOrUsername: mockEmailAddress, password: incorrectPassword })).rejects.toThrow(
      UnauthorizedException
    );
  });
});
