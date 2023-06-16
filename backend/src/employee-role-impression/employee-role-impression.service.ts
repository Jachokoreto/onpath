import { Injectable } from '@nestjs/common';
import { CreateEmployeeRoleImpressionDto } from './dto/create-employee-role-impression.dto';
import { UpdateEmployeeRoleImpressionDto } from './dto/update-employee-role-impression.dto';

@Injectable()
export class EmployeeRoleImpressionService {
  create(createEmployeeRoleImpressionDto: CreateEmployeeRoleImpressionDto) {
    return 'This action adds a new employeeRoleImpression';
  }

  findAll() {
    return `This action returns all employeeRoleImpression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeRoleImpression`;
  }

  update(id: number, updateEmployeeRoleImpressionDto: UpdateEmployeeRoleImpressionDto) {
    return `This action updates a #${id} employeeRoleImpression`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeRoleImpression`;
  }
}
