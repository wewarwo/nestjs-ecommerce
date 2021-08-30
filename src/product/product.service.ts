import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schema/product.schema';

export interface CreateProductForm {
  sku: string
  name: string
  type: string
}

export interface AddChildForm {
  parentSku: string
  childSku: string
}

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
  ) { }

  async create(createProductForm: CreateProductForm): Promise<Product> {
    return this.ProductModel.findOne({ sku: createProductForm.sku }).exec().then(parentProduct => {
      if (!parentProduct) {
        const createdProduct = new this.ProductModel(createProductForm);
        return createdProduct.save()
      } else {
        return parentProduct
      }
    })
  }

  async addChild(addChildForm: AddChildForm): Promise<Product> {
    return this.ProductModel.findOne({ sku: addChildForm.parentSku }).exec().then(parentProduct => {
      if (!parentProduct.child.includes(addChildForm.childSku))
        parentProduct.child.push(addChildForm.childSku)
      return parentProduct.save();
    })
  }

  async getAll(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }

  async getBySku(sku: string): Promise<Product> {
    return this.ProductModel.findOne({ sku }).exec();
  }

  async deleteBySku(sku: string): Promise<any> {
    return this.ProductModel.deleteOne({ sku }).exec();
  }

  async updateBySku(sku: string, newProductData: CreateProductForm): Promise<any> {
    return this.ProductModel.findOneAndUpdate({ sku }, newProductData)
  }
}

