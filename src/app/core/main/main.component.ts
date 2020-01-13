import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/projects/services/product.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
