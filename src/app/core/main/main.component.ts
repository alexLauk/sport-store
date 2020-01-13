import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductService, Product } from 'src/app/projects/services/product.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>();
  public categories: Set<string> | string[] = [];
  public categoryList = [];
  public products = [];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      const allCats = this.products.map((product) => product.category);
      allCats.unshift('All');
      this.categories = new Set(allCats);
    });
  }

  public filterCategories(event, currentCategory) {

    console.log(event);
    if (event.checked) {
      this.categoryList.push(currentCategory);
      console.log(this.categoryList);
    } else {
      this.categoryList.splice(this.categoryList.indexOf(currentCategory), 1);
      console.log(this.categoryList);
    }

    if (currentCategory !== 'All') {
       this.products.filter(product => this.categoryList.indexOf(product.category) !== -1);
    }

    return this.onAdd.emit(this.products);
  }


}
