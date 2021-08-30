import { Module } from '@nestjs/common';
import { SchemaModule } from 'src/schema/schema.module';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

@Module({
  imports: [SchemaModule],
  controllers: [StockController],
  providers: [StockService],
  exports: [StockService]
})
export class StockModule { }
