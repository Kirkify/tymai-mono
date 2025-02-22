import { AuthRouteInterface } from './auth-route.interface';
import { routeCreator } from '../route-creator';

export const authRouteCreator = (absolutePrefix: () => string): AuthRouteInterface => {
  const basePath = routeCreator('auth', () => absolutePrefix());

  return {
    ...basePath,
    children: {
      login: routeCreator('login', () => basePath.absolutePath()),
    }
  }
};
