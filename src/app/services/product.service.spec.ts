import { TestBed } from "@angular/core/testing";
import { ProductService } from "./product.service";

describe('product service', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductService]
        })
    });

    it('should be created', () => {
        const productService = TestBed.get(ProductService); 
        expect(productService).toBeTruthy();
    });
});