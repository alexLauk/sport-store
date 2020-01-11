import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/model/product.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public productList: Product[] = [] ;
  public categories: Set<string> | string[] = [];
  public currentCutegory: string = '';


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
      const allCats = this.productList.map((product) => product.category);
      this.categories = new Set(allCats);
    });
  }

  public getProductList(): Product[] {
    return this.productList.filter((product) => product.category === this.currentCutegory);
  }

}
