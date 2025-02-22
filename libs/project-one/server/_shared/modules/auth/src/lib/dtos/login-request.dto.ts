import { IsString, MinLength } from 'class-validator';

export class LoginRequestDto {
  /**
   * The name of the tenant.
   * @example 'admin'
   */
  @IsString()
  tenantName!: string;
  /**
   * The email or username of the user who forgot their password.
   * @example 'admin@example.com or admin'
   */
  @IsString()
  emailOrUsername!: string;
  /**
   * The password for the user.
   * @example 'admin'
   */
  @MinLength(1)
  password!: string;
}
