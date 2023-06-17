import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pathway } from 'src/pathway/entities/pathway.entity';
import { PathwayService } from 'src/pathway/pathway.service';
import { RoleRelation } from 'src/role-relation/entities/role-relation.entity';
import { RoleRelationService } from 'src/role-relation/role-relation.service';
import { Repository, In } from 'typeorm';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { RolePostBodyParameters } from './role.controller';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    private readonly pathwayService: PathwayService,

    @Inject(RoleRelationService)
    private readonly roleRelationService: RoleRelationService,
  ) {}

  async createOne(queryParameters: RolePostBodyParameters) {
    const pathway: Pathway = await this.pathwayService.findOneByID(
      queryParameters.pathwayID,
    );
    const parentRoles: Role[] = await this.findByIDs(
      queryParameters.parentRoles,
    );
    //Idealy check for error here if pathway and role doesnt exist

    const data: Role = this.roleRepository.create({
      name: queryParameters.name,
      description: queryParameters.description,
      pathway: pathway,
    });

    //If first node in tree
    const childRole: Role = await this.roleRepository.save(data);
    if (!parentRoles || queryParameters.parentRoles.length === 0)
      return childRole;

    await Promise.all(
      parentRoles.map(async (parentRole) => {
        await this.roleRelationService.create(parentRole, childRole);
      }),
    );

    return childRole;
  }

  findAll() {
    return `This action returns all role`;
  }

  async findByIDs(IDs: number[]) {
    const data: Role[] = await this.roleRepository.find({
      where: {
        id: In(IDs),
      },
    });

    return data;
  }

  async findOneByID(id: number) {
    const data: Role = await this.roleRepository.findOne({
      relations: ['parentRoles.parentRole', 'childRoles.childRole'],
      where: {
        id: id,
      },
    });

    return data;
  }

  async findByPathway(pathwayId: number): Promise<Role[]> {
    const data: Role[] = await this.roleRepository.find({
      relations: ['parentRoles.parentRole', 'childRoles.childRole'],
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
