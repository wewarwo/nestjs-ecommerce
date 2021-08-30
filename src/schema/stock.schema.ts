import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
  @Prop()
  sku: string;

  @Prop()
  price: string;

  @Prop()
  quantity: number;
}

export const StockSchema = SchemaFactory.createForClass(Stock);