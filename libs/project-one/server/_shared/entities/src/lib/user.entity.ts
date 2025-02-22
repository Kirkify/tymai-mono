import { RoleEntity } from './role.entity';
import { UserType } from '@mn/project-one/server/shared/repos/one';

export class UserEntity implements UserType {
  /**
   * The I.D of the tenant
   * @example 'clx87e1pk0000gs1lti4tlhd1'
   */
  tenantId!: string;
  /**
   * The user's I.D
   * @example 'clx87e1s60003gs1l8kluxcct'
   */
  id!: string;
  /**
   * The user's public I.D
   * @example 'ONohhLghll'
   */
  publicId!: string;
  /**
   * The user's email address
   * @example 'example@example.com'
   */
  email!: string;
  /**
   * The user's email address
   * @example 'user1'
   */
  username!: string;
  /**
   * The Role attached to this User
   */
  role!: RoleEntity;
}
