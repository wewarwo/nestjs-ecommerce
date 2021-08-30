import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  sku: string;

  @Prop({
    type: String,
    required: true,
    enum: ['STANDALONE', 'CHILD', 'PARENT'],
  })
  type: string;

  @Prop()
  name: string;

  @Prop()
  child: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);