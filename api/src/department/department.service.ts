import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { DepartmentDto } from './dto/department.dto';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(departmentDto: DepartmentDto): Promise<Department> {
    const { name } = departmentDto;

    const department = new Department();
    department.name = name;

    try {
      await this.departmentRepository.save(department);
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return department;
  }

  async findAll(): Promise<Department[]> {
    try {
      return await this.departmentRepository.find();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: { id },
    });

    if (!department) {
      throw new NotFoundException(`Department with id: ${id} not found`);
    }

    return department;
  }

  async update(id: number, departmentDto: DepartmentDto): Promise<Department> {
    const { name } = departmentDto;
    const department = await this.findOne(id);
    department.name = name;
    await department.save();

    return department;
  }

  async remove(id: number): Promise<void> {
    await this.departmentRepository.softDelete({
      id: id,
    });
  }
}
