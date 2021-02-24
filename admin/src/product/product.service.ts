import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ){
    }

    async getAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    async getById(id: number): Promise<Product> {
        return this.productRepository.findOne({id});
    }

    async create(data): Promise<Product>{
        return this.productRepository.save(data)
    }

    async update(id: number,data): Promise<any>{
        return this.productRepository.update(id, data);
    }

    async delete(id: number): Promise<any>{
        return this.productRepository.delete(id);
    }
}
