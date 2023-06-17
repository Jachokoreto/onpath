import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateRoleRelationDto } from './dto/update-role-relation.dto';
import { RoleRelation } from './entities/role-relation.entity';
import { Role } from 'src/role/entities/role.entity';

@Injectable()
export class RoleRelationService {
  constructor(
    @InjectRepository(RoleRelation)
    private roleRelationRepository: Repository<RoleRelation>,
  ) {}

  async create(parent: Role, child: Role): Promise<RoleRelation> {
    const data: RoleRelation = this.roleRelationRepository.create({
      parentRole: parent,
      childRole: child,
    });

    const result: RoleRelation = await this.roleRelationRepository.save(data);

    return result;
  }

  findAll() {
    return `This action returns all roleRelation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleRelation`;
  }

  update(id: number, updateRoleRelationDto: UpdateRoleRelationDto) {
    return `This action updates a #${id} roleRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleRelation`;
  }
}
