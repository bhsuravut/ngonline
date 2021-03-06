import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Product } from './shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  test: 'helle';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (products) => {
        // console.log(products);
        this.products = products;
      }
    );
  }

}
