import { RoleType, RoleTypeEnum, RoleTypeType } from '@mn/project-one/server/shared/repos/one';
import { PermissionEntity } from './permission.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RoleEntity implements RoleType {
  /**
   * The I.D of the role
   * @example 'clx87e1pk0000gs1lti4tlhd1'
   */
  id!: string;

  /**
   * The name of the role
   * @example 'Role 1'
   */
  name!: string;

  @ApiProperty({
    description: 'The type of role',
    enum: RoleTypeEnum,
    enumName: 'RoleTypeEnum'
  })
  type!: RoleTypeType;

  /**
   * The permissions associated to the role
   */
  permissions!: PermissionEntity[];
}
