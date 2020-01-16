import { Component, OnInit, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { ProductService, Product } from 'src/app/projects/services/product.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { MdbCheckboxChange } from 'angular-bootstrap-md';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  //@Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>();
  public categories: Set<string> | string[] = [];
  public categoryList = [];
  public products = [];
  @ViewChildren(MdbCheckboxChange) checkBoxes: QueryList<MdbCheckboxChange>;


  constructor(
    private productService: ProductService,
    private carteService: CartService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      const allCats = this.products.map((product) => product.category);
      // allCats.unshift('All');
      this.categories = new Set(allCats);
    });
  }
  
selectAllCategories(event) {
  if (event.checked) {
    this.categories.forEach((c) => {
      this.categoryList.push(c);
    });
    this.checkBoxes.forEach(cb => {
      cb.element.onCheckboxClick(event);
    })
  } else {
    this.categories.forEach((c) => {
      this.categoryList = [];
    });
    this.checkBoxes.forEach(cb => {
      cb.element.checked = false;
    })
  }
  
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
  }

  list() {
    if (this.categoryList.length && !this.categoryList.includes('All')) {
      return this.products.filter(product => this.categoryList.indexOf(product.category) !== -1);
    }

    //return this.onAdd.emit(this.products);
    console.log(this.products);
    return this.products
  }

  addToCart(product: Product) {
    this.carteService.addProductLine(product);
    this.router.navigate(['/cart']);
  }



}
