import { AuthGuard } from '@nestjs/passport';
import { PositionDto } from './dto/position.dto';
import { PositionService } from './position.service';
import { Position } from './entities/postion.entity';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Controller,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';

@Controller('position')
@UseGuards(AuthGuard())
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body(ValidationPipe) positionDto: PositionDto): Promise<Position> {
    return this.positionService.create(positionDto);
  }

  @Get()
  findAll(): Promise<Position[]> {
    return this.positionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Position> {
    return this.positionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body(ValidationPipe) positionDto: PositionDto,
  ): Promise<Position> {
    return this.positionService.update(+id, positionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.positionService.remove(id);
  }
}
