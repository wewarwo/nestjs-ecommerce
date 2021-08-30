import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductForm, ProductService, AddChildForm } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct(): Promise<any> {
    return this.productService.getAll();
  }

  @Post()
  createProduct(@Body() createProductForm: CreateProductForm): Promise<any> {
    return this.productService.create(createProductForm);
  }

  @Post(':sku')
  addChildd(@Param() params, @Body() body): Promise<any> {
    const addChildForm: AddChildForm = {parentSku: params.sku, childSku: body.sku}
    return this.productService.addChild(addChildForm);
  }

  @Get(':sku')
  getBySku(@Param() params): Promise<any> {
    return this.productService.getBySku(params.sku);
  }

  @Delete(':sku')
  deleteBySku(@Param() params): Promise<any> {
    return this.productService.deleteBySku(params.sku);
  }

  @Put(':sku')
  updateBySku(@Param() params, @Body() createProductForm: CreateProductForm): Promise<any> {
    return this.productService.updateBySku(params.sku, createProductForm);
  }
}
