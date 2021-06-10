import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-search-products-page',
  templateUrl: './search-products-page.component.html',
  styleUrls: ['./search-products-page.component.scss']
})
export class SearchProductsPageComponent implements OnInit {
  keyWord = '';
  searchResult: Product[] = [];
  isBusy = false;
  selectedProduct?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.isBusy = true;
    this.selectedProduct = null;
    this.searchResult = [];
    setTimeout(() => {
      for (let index = 1; index < 20; index++) {
        this.searchResult.push({ id: index, name: 'PRODUCT NO.' + index, price: index * 1.4 });
      }
      this.isBusy = false;
    }, 3500);
  }

  onSelectItemRequested(item: Product) {
    if (item.name.includes('10')) {
      alert('לא ניתן לבחור פריט זה');
      return;
    }
    this.selectedProduct = item;
  }
}
