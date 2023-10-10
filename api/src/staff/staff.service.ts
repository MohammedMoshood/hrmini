import { Staff } from './entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './../auth/entities/user.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { GetStaffFilterDto } from './dto/get-staff-filter.dto';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async create(createStaffDto: CreateStaffDto, user: User): Promise<Staff> {
    const staff = this.staffRepository.create({
      ...createStaffDto,
      user,
    });

    try {
      await this.staffRepository.save(staff);
    } catch (error) {
      throw new InternalServerErrorException();
    }
    delete staff.user;

    return staff;
  }

  async findAll(filterDto: GetStaffFilterDto, user: User): Promise<Staff[]> {
    const { department, jobTitle, isActive, gender, status } = filterDto;
    const query = this.staffRepository
      .createQueryBuilder('staff')
      .where('staff.userId = :userId', { userId: user.id })
      .andWhere(status ? 'staff.status = :status' : '1=1', { status })
      .andWhere(isActive ? 'staff.isActive = :isActive' : '1=1', { isActive })
      .andWhere(gender ? 'staff.gender = :gender' : '1=1', { gender });

    this.addFilter(query, 'department', department);
    this.addFilter(query, 'jobTitle', jobTitle);

    try {
      return await query.getMany();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number, user: User): Promise<Staff> {
    const staff = await this.staffRepository.findOne({
      where: { id, userId: user.id },
    });
    if (!staff) {
      throw new NotFoundException(`Staff with id: ${id} not found`);
    }

    return staff;
  }

  async update(
    id: number,
    updateStaffDto: UpdateStaffDto,
    user: User,
  ): Promise<Staff> {
    const staff = await this.findOne(id, user);
    const updatedStaff = {
      ...staff,
      ...updateStaffDto,
    };
    const newStaff = await this.staffRepository.save(updatedStaff);
    return newStaff;
  }

  async remove(id: number, user: User): Promise<void> {
    const response = await this.staffRepository.softDelete({
      id,
      userId: user.id,
    });
    if (response.affected === 0) {
      throw new NotFoundException(`Staff with id: ${id} not found`);
    }
  }

  private addFilter(
    query: SelectQueryBuilder<Staff>,
    column: string,
    value: string | undefined,
  ): void {
    if (value) {
      query.andWhere(`(LOWER(staff.${column}) LIKE LOWER(:${column}))`, {
        [column]: `%${value}%`,
      });
    }
  }
}
