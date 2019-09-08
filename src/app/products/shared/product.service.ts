import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'https://codingthailand.com/api/get_courses.php';
  detailUrl = 'https://codingthailand.com/api/get_course_detail.php';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getDetail(id: number): Observable<any[]> {
    const myparams = {
      course_id: id.toString()
    };

    return this.http.get<any[]>(this.detailUrl, {params: myparams});
  }

}
