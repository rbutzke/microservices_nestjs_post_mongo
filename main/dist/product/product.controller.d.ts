import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAll(): Promise<import("./product.model").ProductDocument[]>;
    teste(data: string): Promise<void>;
}
