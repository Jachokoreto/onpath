import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeeRoleImpressionService } from './employee-role-impression.service';
import { CreateEmployeeRoleImpressionDto } from './dto/create-employee-role-impression.dto';
import { UpdateEmployeeRoleImpressionDto } from './dto/update-employee-role-impression.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';

enum ImpressionSearchType {
  ROLE = 'ROLE',
  EMPLOYEE = 'EMPLOYEE',
}

class ImpressionGetQueryParameters {
  @IsNotEmpty()
  @IsEnum(ImpressionSearchType)
  search_type: ImpressionSearchType;

  @ValidateIf(
    (searchType) =>
      searchType.search_type === ImpressionSearchType.ROLE ||
      searchType.search_type === ImpressionSearchType.EMPLOYEE,
  )
  @Transform((params) =>
    params.obj.search_type === ImpressionSearchType.ROLE ||
    params.obj.search_type === ImpressionSearchType.EMPLOYEE
      ? params.value
      : undefined,
  )
  @IsNumberString()
  search_number: number;
}

class ImpressionPostBodyParameters {
  @IsNotEmpty()
  @IsNumber()
  employeeID: number;

  @IsNotEmpty()
  @IsNumber()
  roleID: number;
}

@Controller('employee-role-impression')
export class EmployeeRoleImpressionController {
  constructor(
    private readonly employeeRoleImpressionService: EmployeeRoleImpressionService,
  ) {}

  @Post()
  async create(
    @Body(
      new ValidationPipe({
        forbidNonWhitelisted: true,
      }),
    )
    bodyParameters: ImpressionPostBodyParameters,
  ) {
		return await this.employeeRoleImpressionService.create(
			bodyParameters.employeeID, bodyParameters.roleID
		)
  }

  @Get()
  async find(
    @Query(
      new ValidationPipe({
        forbidNonWhitelisted: true,
      }),
    )
    queryParameters: ImpressionGetQueryParameters,
  ) {
    switch (queryParameters.search_type) {
      case ImpressionSearchType.ROLE:
        return await this.employeeRoleImpressionService.findByRole(
          queryParameters.search_number,
        );
      case ImpressionSearchType.EMPLOYEE:
        return await this.employeeRoleImpressionService.findByEmployee(
          queryParameters.search_number,
        );
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeRoleImpressionDto: UpdateEmployeeRoleImpressionDto,
  ) {
    return this.employeeRoleImpressionService.update(
      +id,
      updateEmployeeRoleImpressionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeRoleImpressionService.remove(+id);
  }
}
