import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  create(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.baseUrl, product);
  }

  read(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl);
  }
}
