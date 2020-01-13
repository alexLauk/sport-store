import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Product {
  constructor(
    public name: string,
    public category: string,
    public description: string,
    public price: number,
    public id: number,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  /* public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  } */

  /* public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/products/${id}`);
  } */

  /* public addProduct(body: Product): Observable<void> {
    return this.http.post<void>(`http://localhost:3000/products`, body);
  } */

  /* public editProduct(body: Product): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/product/${body.id}`, body);
  } */

}
