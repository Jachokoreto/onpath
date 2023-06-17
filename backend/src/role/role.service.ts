import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pathway } from 'src/pathway/entities/pathway.entity';
import { PathwayService } from 'src/pathway/pathway.service';
import { Repository } from 'typeorm';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { RolePostBodyParameters } from './role.controller';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    private readonly pathwayService: PathwayService,
  ) {}

  async create(queryParameters: RolePostBodyParameters): Promise<Role> {
    const pathway: Pathway = await this.pathwayService.findOneByID(
      queryParameters.pathwayID,
    );
    const parentRole: Role = await this.findOneByID(queryParameters.parentID);
    //Idealy check for error here if pathway and role doesnt exist

    const data: Role = this.roleRepository.create({
      name: queryParameters.name,
      description: queryParameters.description,
      pathway: pathway,
      parentRole: parentRole,
    });
    const result: Role = await this.roleRepository.save(data);

    return result;
  }

  findAll() {
    return `This action returns all role`;
  }

  async findOneByID(id: number) {
    const data: Role = await this.roleRepository.findOne({
      where: {
        id: id,
      },
    });

    return data;
  }

  async findByPathway(pathwayId: number): Promise<Role[]> {
    const data: Role[] = await this.roleRepository.find({
      relations: {
        pathway: true,
      },
      where: {
        pathway: {
          id: pathwayId,
        },
      },
    });

    return data;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
