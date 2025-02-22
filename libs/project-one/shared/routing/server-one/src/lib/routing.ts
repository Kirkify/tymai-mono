import { authRouteCreator, routeCreator } from '@mn/project-one/shared/routing/shared';
import { RoutingInterface } from './models/_routing.interface';

export const Routing: RoutingInterface = {
  globalPrefix: routeCreator('api'),
  apiDocs: routeCreator('api-docs', () => Routing.globalPrefix.absolutePath()),

  auth: authRouteCreator(() => Routing.globalPrefix.absolutePath()),
  health: routeCreator('health', () => Routing.globalPrefix.absolutePath()),

  superAdmin: routeCreator('super-admin', () => Routing.globalPrefix.absolutePath()),

  random: routeCreator('random-test', () => Routing.globalPrefix.absolutePath()),
}
