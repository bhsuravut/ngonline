import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  title: string;
  productDetail: any[];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
    this.getDetail();
  }

  getDetail() {
    this.productService.getDetail(this.id).subscribe(
      (productDetail) => {
        // console.log(productDetail);
        this.productDetail = productDetail;
      }
    );
  }

}
