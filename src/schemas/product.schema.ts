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

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  child: Product[];
}

export const CatSchema = SchemaFactory.createForClass(Product);