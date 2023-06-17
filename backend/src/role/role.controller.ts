import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { UpdateRoleDto } from './dto/update-role.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { EmployeeService } from 'src/employee/employee.service';

enum RoleSearchType {
  ONE = 'ONE',
  PATHWAY = 'PATHWAY',
  EMPLOYEE = 'EMPLOYEE',
}

class RoleGetQueryParameters {
  @IsNotEmpty()
  @IsEnum(RoleSearchType)
  search_type: RoleSearchType;

  @ValidateIf(
    (searchType) =>
      searchType.search_type === RoleSearchType.ONE ||
      searchType.search_type === RoleSearchType.PATHWAY ||
      searchType.search_type === RoleSearchType.EMPLOYEE,
  )
  @Transform((params) =>
    params.obj.search_type === RoleSearchType.ONE ||
    params.obj.search_type === RoleSearchType.PATHWAY ||
    params.obj.search_type === RoleSearchType.EMPLOYEE
      ? params.value
      : undefined,
  )
  @IsNumberString()
  search_number: number;
}

export class RolePostBodyParameters {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  pathwayID: number;

  @IsNumber({}, { each: true })
  parentRoles?: number[];

  @IsNumber({}, { each: true })
  childRoles?: number[];
}

@Controller('role')
export class RoleController {
  constructor(
    private readonly roleService: RoleService,
    private readonly employeeService: EmployeeService,
  ) {}

  @Post()
  async create(
    @Body(
      new ValidationPipe({
        forbidNonWhitelisted: true,
      }),
    )
    queryOptions: RolePostBodyParameters,
  ) {
    return await this.roleService.createOne(queryOptions);
  }

  @Get()
  async find(
    @Query(
      new ValidationPipe({
        forbidNonWhitelisted: true,
      }),
    )
    queryOptions: RoleGetQueryParameters,
  ) {
    switch (queryOptions.search_type) {
      case RoleSearchType.ONE:
        return await this.roleService.findOneByID(queryOptions.search_number);
      case RoleSearchType.PATHWAY:
        return await this.roleService.findByPathway(queryOptions.search_number);
      case RoleSearchType.EMPLOYEE:
        return await this.employeeService.findAllWithRole(
          queryOptions.search_number,
        );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
