import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePathwayDto } from './dto/create-pathway.dto';
import { UpdatePathwayDto } from './dto/update-pathway.dto';
import { Pathway } from './entities/pathway.entity';

@Injectable()
export class PathwayService {
  constructor(
    @InjectRepository(Pathway)
    private pathwayRepository: Repository<Pathway>,
  ) {}
  create(createPathwayDto: CreatePathwayDto) {
    return 'This action adds a new pathway';
  }

  findAll() {
    return `This action returns all pathway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pathway`;
  }

  update(id: number, updatePathwayDto: UpdatePathwayDto) {
    return `This action updates a #${id} pathway`;
  }

  remove(id: number) {
    return `This action removes a #${id} pathway`;
  }
}
