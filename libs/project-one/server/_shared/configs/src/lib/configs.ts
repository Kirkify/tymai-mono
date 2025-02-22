import { awsBedrockConfig } from './models/aws-bedrock.config';
import { bullBoardConfig } from './models/bull-board.config';
import { emailConfig } from './models/email.config';
import { redisConfig } from './models/redis.config';
import { jwtConfig } from './models/jwt.config';

export const config = [
  awsBedrockConfig,
  bullBoardConfig,
  emailConfig,
  jwtConfig,
  redisConfig,
]
