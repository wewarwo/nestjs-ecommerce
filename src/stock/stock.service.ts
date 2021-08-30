import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schema/product.schema';
import { Stock } from 'src/schema/stock.schema';

export interface CreateStockForm {
  sku: string
  price: string
  quantity: number
}

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
    @InjectModel(Stock.name) private StockModel: Model<Stock>,
  ) { }

  async create(createStockForm: CreateStockForm): Promise<any> {
    return this.ProductModel.findOne({ sku: createStockForm.sku }).exec().then(product => {
      if (!product) {
        return new Promise(() => "404 product sku not found")
      } else {
        return this.StockModel.findOneAndUpdate({ sku: createStockForm.sku }, createStockForm, { upsert: true })
      }
    })
  }

  async getAll(): Promise<Stock[]> {
    return this.StockModel.find().exec();
  }

  async deleteBySku(sku: string): Promise<any> {
    return this.StockModel.deleteMany({ sku }).exec();
  }
}

