import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeRoleImpressionDto } from './dto/create-employee-role-impression.dto';
import { UpdateEmployeeRoleImpressionDto } from './dto/update-employee-role-impression.dto';
import { EmployeeRoleImpression } from './entities/employee-role-impression.entity';

@Injectable()
export class EmployeeRoleImpressionService {
  constructor(
    @InjectRepository(EmployeeRoleImpression)
    private EmployeeRoleImpressionRepository: Repository<EmployeeRoleImpression>,
  ) {}

  create(createEmployeeRoleImpressionDto: CreateEmployeeRoleImpressionDto) {
    return 'This action adds a new employeeRoleImpression';
  }

  async findByEmployee(employeeID: number): Promise<EmployeeRoleImpression[]> {
    const data: EmployeeRoleImpression[] =
      await this.EmployeeRoleImpressionRepository.find({
        relations: {
          employee: true,
        },
        where: {
          employee: {
            id: employeeID,
          },
        },
      });

    return data;
  }

  async findByRole(roleID: number): Promise<EmployeeRoleImpression[]> {
    const data: EmployeeRoleImpression[] =
      await this.EmployeeRoleImpressionRepository.find({
        relations: {
          employee: true,
        },
        where: {
          role: {
            id: roleID,
          },
        },
      });

    return data;
  }

  findAll() {
    return `This action returns all employeeRoleImpression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeRoleImpression`;
  }

  update(
    id: number,
    updateEmployeeRoleImpressionDto: UpdateEmployeeRoleImpressionDto,
  ) {
    return `This action updates a #${id} employeeRoleImpression`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeRoleImpression`;
  }
}
