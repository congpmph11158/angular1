import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API)
  }
  getId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product)
  }

}
