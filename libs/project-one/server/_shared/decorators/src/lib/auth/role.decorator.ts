import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { DECORATORS } from '@nestjs/swagger/dist/constants';
import { RoleGuard, RoleGuardKeyName } from '@mn/project-one/server/shared/guards';
import { RoleTypeType } from '@mn/project-one/server/shared/repos/one';

export function Role(roleType: RoleTypeType) {
  return applyDecorators(
    SetMetadata(RoleGuardKeyName, roleType),
    addRolesToSwaggerDocumentation(roleType),
    UseGuards(RoleGuard),
  );
}

function addRolesToSwaggerDocumentation(roleType: RoleTypeType) {
  return (target: object, key: string | symbol, descriptor?: TypedPropertyDescriptor<any>): any => {
    if (descriptor) {
      const apiOperation = Reflect.getMetadata(DECORATORS.API_OPERATION, descriptor.value) || {};

      const description = `**Required Role Type:** *${ roleType }*<br/>${apiOperation.description || ""}`;
      Reflect.defineMetadata(
        DECORATORS.API_OPERATION,
        {
          ...apiOperation,
          description,
        },
        descriptor.value,
      );
    }

    return descriptor;
  };
}
