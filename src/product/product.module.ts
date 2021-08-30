import { Module } from '@nestjs/common';
import { SchemaModule } from 'src/schema/schema.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [SchemaModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule { }
