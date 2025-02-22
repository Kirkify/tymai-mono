import { AuthRouteInterface, BaseRouteInterface } from '@mn/project-one/shared/routing/shared';

export interface RoutingInterface {
  globalPrefix: BaseRouteInterface;
  apiDocs: BaseRouteInterface;

  auth: AuthRouteInterface;
  health: BaseRouteInterface;

  superAdmin: BaseRouteInterface;
  random: BaseRouteInterface;
}
