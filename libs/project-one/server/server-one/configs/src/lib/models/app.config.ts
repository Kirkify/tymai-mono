import { registerAs } from "@nestjs/config";

export const appConfig = registerAs('app', () => ({
  port: process.env['PROJECT_ONE_SERVER_ONE_PORT'] || 3333
}));
