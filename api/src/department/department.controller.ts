import { AuthGuard } from '@nestjs/passport';
import { DepartmentDto } from './dto/department.dto';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';
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

@Controller('department')
@UseGuards(AuthGuard())
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(
    @Body(ValidationPipe) departmentDto: DepartmentDto,
  ): Promise<Department> {
    return this.departmentService.create(departmentDto);
  }

  @Get()
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Department> {
    return this.departmentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body(ValidationPipe) departmentDto: DepartmentDto,
  ): Promise<Department> {
    return this.departmentService.update(+id, departmentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.departmentService.remove(id);
  }
}
