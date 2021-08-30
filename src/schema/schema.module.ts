import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';
import { Stock, StockSchema } from './stock.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }, { name: Stock.name, schema: StockSchema }])],
  exports: [MongooseModule]
})
export class SchemaModule { }
