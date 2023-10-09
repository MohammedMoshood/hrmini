import { Type } from 'class-transformer';
import {
  Equals,
  IsEmail,
  IsNumber,
  IsNumberString,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { Match } from './match.decorator';

export class AuthSignupDto {
  @IsString()
  companyName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak.',
  })
  password: string;

  @Match('password')
  passwordConfirm: string;

  @IsNumberString()
  @Length(11, 11, {
    message: 'Phone number must have a length of $constraint1',
  })
  phone: string;

  @IsString()
  address: string;
}
