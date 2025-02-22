import { BaseRouteInterface } from '../base-route.interface';

export interface AuthRouteInterface extends BaseRouteInterface {
  children: {
    login: BaseRouteInterface;
  }
}
