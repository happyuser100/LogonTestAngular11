import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() list: Product[] = [];
  @Output() selectItemRequested = new EventEmitter<Product>();
  @Input() selectedItem?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(item: Product) {
    this.selectItemRequested.emit(item); // rasie event
  }
}
