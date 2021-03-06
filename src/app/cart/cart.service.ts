import { Injectable } from '@angular/core';
import { Line } from '../projects/model/line.model';
import { Product } from '../projects/services/product.service';
import { LineToLineMappedSource } from 'webpack-sources';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productLines: Line[] = [];
  total: number = 0;
  
  constructor() { }

  clear() {
    this.productLines = []
    this.total = 0; 
  }

  getProductLines(): Line[] {
    return this.productLines;
  }

  deleteLine(id: number) {
    this.productLines = this.productLines.filter((line: Line) => line.id !== id) 
  }


  addProductLine(product: Product) {
    const line = new Line(
      product.name,
      1,
      product.price,
      this.calculateSubTotal(1, product.price),
      product.id
    );
    
    this.productLines.push(line);
    this.total = this.calculateTotal();
  }

  getTotal(): number {
    return this.total;
  }

  public calculateSubTotal(quantity, price): number {
    return price * quantity;
  }

  public calculateTotal(): number {
    return this.productLines.map(line => line.subtotal).reduce((sum, current) => sum + current, 0);
  }
}
