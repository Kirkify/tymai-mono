import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { JwtParsedTokenInterface } from '@mn/project-one/server/shared/models';
import { jwtConfig } from '@mn/project-one/server/shared/configs';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(jwtConfig.KEY) private config: ConfigType<typeof jwtConfig>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.secret,
    });
  }

  async validate(payload: JwtParsedTokenInterface) {
    return await new Promise<JwtParsedTokenInterface>((resolve) => {
      resolve(payload);
    });
  }
}
