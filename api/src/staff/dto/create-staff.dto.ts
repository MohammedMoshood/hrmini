import { Gender } from './../enum/gender.enum';
import { Status } from './../enum/status.enum';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumberString,
  Length,
} from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  @Length(11, 11, {
    message: 'Phone number must have a length of $constraint1',
  })
  phone: string;

  @IsNotEmpty()
  address: string;

  @IsNumberString()
  age: string;

  @IsNotEmpty()
  department: string;

  @IsIn([Gender.MALE, Gender.FEMALE, Gender.OTHERS])
  gender: Gender;

  @IsIn([Status.FULLTIME, Status.PARTTIME, Status.CONTRACT])
  status: Status;
}
