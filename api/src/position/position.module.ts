import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { PositionService } from './position.service';
import { Position } from './entities/postion.entity';
import { PositionController } from './position.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Position]), AuthModule],
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}
