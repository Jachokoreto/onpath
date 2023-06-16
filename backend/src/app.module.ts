import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [DatabaseModule, CompanyModule],
})
export class AppModule {}
