import { User } from './../auth/entities/user.entity';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
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

  findAll() {
    return `This action returns all staff`;
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
}
