import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

interface createProductDto {
    sku: string
    name: string
    quanity: number
}

@Injectable()
export class ProductService {
  constructor(
      @InjectModel(Product.name) private ProductModel: Model<Product>,
      @InjectConnection() private connection: Connection
      ) {}

  async create(createCatDto: createProductDto): Promise<Product> {
    const createdCat = new this.ProductModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }
}

