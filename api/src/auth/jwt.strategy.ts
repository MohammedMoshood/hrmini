import * as config from 'config';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
const dbConfig = config.get('jwt');
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: dbConfig.secret,
    });
  }

  async validate(payload): Promise<User> {
    const { email } = payload;
    const user = await this.usersRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
