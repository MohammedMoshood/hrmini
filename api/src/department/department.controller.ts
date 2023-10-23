import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';
import { DepartmentDto } from './dto/department.dto';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(@Body() departmentDto: DepartmentDto): Promise<Department> {
    return this.departmentService.create(departmentDto);
  }

  @Get()
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Department> {
    return this.departmentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() departmentDto: DepartmentDto,
  ): Promise<Department> {
    return this.departmentService.update(+id, departmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.departmentService.remove(id);
  }
}
