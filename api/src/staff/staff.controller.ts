import { AuthGuard } from '@nestjs/passport';
import { StaffService } from './staff.service';
import { User } from './../auth/entities/user.entity';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Controller,
  ValidationPipe,
} from '@nestjs/common';

@Controller('staff')
@UseGuards(AuthGuard())
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  create(
    @Body(ValidationPipe) createStaffDto: CreateStaffDto,
    @GetUser() user: User,
  ) {
    return this.staffService.create(createStaffDto, user);
  }

  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(+id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(+id);
  }
}
