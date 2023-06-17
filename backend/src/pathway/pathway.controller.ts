import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PathwayService } from './pathway.service';
import { CreatePathwayDto } from './dto/create-pathway.dto';
import { UpdatePathwayDto } from './dto/update-pathway.dto';

@Controller('pathway')
export class PathwayController {
  constructor(private readonly pathwayService: PathwayService) {}

  @Post()
  create(@Body() createPathwayDto: CreatePathwayDto) {
    return this.pathwayService.create(createPathwayDto);
  }

  @Get()
  findAll() {
    return this.pathwayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pathwayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePathwayDto: UpdatePathwayDto) {
    return this.pathwayService.update(+id, updatePathwayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pathwayService.remove(+id);
  }
}
