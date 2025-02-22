import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from "@prisma/project-one/shared/one"
import { getExtendedClient } from './extensions/one.extension';


@Injectable()
export class OneRepo extends PrismaClient implements OnModuleInit {
  // This is an example of how we can use an extendedClient
  private _extendedClient = getExtendedClient();
  get extendedClient() {
    return this._extendedClient;
  }

  constructor() {
    super({
      log: ['query']
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
