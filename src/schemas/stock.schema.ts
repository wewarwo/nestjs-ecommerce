import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
  @Prop()
  sku: string;

  @Prop()
  quantity: number;
}

export const CatSchema = SchemaFactory.createForClass(Stock);