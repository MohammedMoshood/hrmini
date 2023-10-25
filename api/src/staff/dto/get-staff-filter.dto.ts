import { Status } from '../enum/status.enum';
import { Gender } from '../enum/gender.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetStaffFilterDto {
  @IsOptional()
  @IsNotEmpty()
  departmentId: string;

  @IsOptional()
  @IsNotEmpty()
  positionId: string;

  @IsOptional()
  @IsNotEmpty()
  isActive: boolean;

  @IsOptional()
  @IsIn([Gender.MALE, Gender.FEMALE, Gender.OTHERS])
  gender: Gender;

  @IsOptional()
  @IsIn([Status.FULLTIME, Status.PARTTIME, Status.CONTRACT])
  status: Status;
}
