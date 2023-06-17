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
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';

enum RoleSearchType {
  PATHWAY = 'PATHWAY',
}

class RoleGetQueryParameters {
  @IsNotEmpty()
  @IsEnum(RoleSearchType)
  search_type: RoleSearchType;

  @ValidateIf((searchType) => searchType.search_type === RoleSearchType.PATHWAY)
  @Transform((params) =>
    params.obj.search_type === RoleSearchType.PATHWAY
      ? params.value
      : undefined,
  )
  @IsNumberString()
  search_number: number;
}

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
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
      case RoleSearchType.PATHWAY:
        return await this.roleService.findByPathway(queryOptions.search_number);
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
