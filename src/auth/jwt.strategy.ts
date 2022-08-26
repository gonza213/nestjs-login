import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToekn(),
      ignoreExpiration: false,
      secretOrKey: '91!g45Y'
    });
  }

  async validate(payload: any){ //payload = decoded jwt
    return {userId: payload.uid, username: payload.username}
  }
}
