import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/postion.entity';
import { PositionDto } from './dto/position.dto';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private positionRepository: Repository<Position>,
  ) {}

  async create(positionDto: PositionDto): Promise<Position> {
    const { name, department } = positionDto;

    const position = new Position();
    position.name = name;
    position.department = department;

    try {
      await this.positionRepository.save(position);
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return position;
  }

  async findAll(): Promise<Position[]> {
    try {
      return await this.positionRepository.find();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<Position> {
    const position = await this.positionRepository.findOne({
      where: { id },
    });

    if (!position) {
      throw new NotFoundException(`Position with id: ${id} not found`);
    }

    return position;
  }

  async update(id: number, positionDto: PositionDto): Promise<Position> {
    const { name } = positionDto;
    const position = await this.findOne(id);
    position.name = name;
    await position.save();

    return position;
  }

  async remove(id: number): Promise<void> {
    await this.positionRepository.softDelete({
      id: id,
    });
  }
}
