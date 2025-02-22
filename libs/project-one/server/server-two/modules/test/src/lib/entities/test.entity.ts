import { TestType } from '@mn/project-one/server/server-two/repos/test';
import { UserEntity } from '@mn/project-one/server/shared/entities';

export class TestEntity implements TestType {
  /**
   * The I.D of the test
   * @example 'clx87e1pk0000gs1lti4tlhd1'
   */
  id!: string;
  /**
   * The name of the test
   * @example 'Test 1'
   */
  name!: string;
  /**
   * The description of the test
   * @example 'Test description'
   */
  description!: string;
  /**
   * The last time the test was updated.
   * @example '2024-09-19T14:54:11.287Z'
   */
  updatedAt!: Date;
  /**
   * The User attached to this Test
   */
  user!: UserEntity;
}
