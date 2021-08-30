import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStockForm, StockService } from './stock.service';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

  @Get()
  getAllProduct(): Promise<any> {
    return this.stockService.getAll();
  }

  @Post()
  createStock(@Body() createStockForm: CreateStockForm): Promise<any> {
    return this.stockService.create(createStockForm);
  }

  @Delete(':sku')
  deleteBySku(@Param() params): Promise<any> {
    return this.stockService.deleteBySku(params.sku);
  }
}
