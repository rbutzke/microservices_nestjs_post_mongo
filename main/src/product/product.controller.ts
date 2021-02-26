import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService){}

     @Get()
     async all(){
         return this.productService.all()
     }
     
     @EventPattern('teste')
     async teste(data: string){
        console.log(data);
     }

}
