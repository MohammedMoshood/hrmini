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
} from '@nestjs/common';

@Controller('position')
@UseGuards(AuthGuard())
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() positionDto: PositionDto): Promise<Position> {
    return this.positionService.create(positionDto);
  }

  @Get()
  findAll(): Promise<Position[]> {
    return this.positionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Position> {
    return this.positionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() positionDto: PositionDto,
  ): Promise<Position> {
    return this.positionService.update(+id, positionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.positionService.remove(id);
  }
}
