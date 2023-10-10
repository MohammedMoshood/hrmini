import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { AuthModule } from './../auth/auth.module';
import { StaffController } from './staff.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Staff]), AuthModule],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
