import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  async findAll(): Promise<Employee[]> {
    const data: Employee[] = await this.employeeRepository.find({
      relations: {
        role: true,
      },
    });

    return data;
  }

  /*
   * Consider using ILike for fuzzy searching
   * */

  async findOneByName(name: string): Promise<Employee> {
    const data: Employee = await this.employeeRepository.findOne({
      where: {
        name: name,
      },
    });

    return data;
  }

  async findOneByID(id: number): Promise<Employee> {
    const data: Employee = await this.employeeRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        role: true,
        employeeSkills: true,
        employeeSkillImpressions: true,
        employeeRoleImpressions: true,
      },
    });

    return data;
  }

  async findAllWithRole(roleId: number): Promise<Employee[]> {
    const data: Employee[] = await this.employeeRepository.find({
      relations: {
        role: true,
      },
      where: {
        role: {
          id: roleId,
        },
      },
    });

    return data;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
