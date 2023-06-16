import { Module } from '@nestjs/common';
import { PathwayService } from './pathway.service';
import { PathwayController } from './pathway.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pathway } from './entities/pathway.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pathway])],
  controllers: [PathwayController],
  providers: [PathwayService],
})
export class PathwayModule {}
