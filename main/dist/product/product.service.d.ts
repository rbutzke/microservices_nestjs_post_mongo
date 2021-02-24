import { Model } from 'mongoose';
import { ProductDocument } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    getAll(): Promise<ProductDocument[]>;
}
