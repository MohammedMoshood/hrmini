import { User } from './../auth/entities/user.entity';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async create(createStaffDto: CreateStaffDto, user: User): Promise<Staff> {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      age,
      gender,
      department,
      status,
    } = createStaffDto;

    const staff = new Staff();
    staff.user = user;
    staff.firstName = firstName;
    staff.lastName = lastName;
    staff.email = email;
    staff.phone = phone;
    staff.address = address;
    staff.age = age;
    staff.gender = gender;
    staff.department = department;
    staff.status = status;
    staff.createdAt = new Date();
    staff.updatedAt = new Date();

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

  findOne(id: number) {
    return `This action returns a #${id} staff`;
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return `This action updates a #${id} staff ${updateStaffDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
