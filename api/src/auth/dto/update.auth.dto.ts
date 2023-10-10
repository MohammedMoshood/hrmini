import { AuthSignupDto } from './auth.signup.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAuthDto extends PartialType(AuthSignupDto) {}
