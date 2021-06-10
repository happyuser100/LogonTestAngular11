import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  keyWord = '';
  searchResult: string[] = [];
  isBusy = false;
  selectedItemInPage = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.isBusy = true;
    this.searchResult = [];
    setTimeout(() => {
      for (let index = 1; index <= 10; index++) {
        this.searchResult.push(`${this.keyWord} NO. ${index}`);
      }
      this.selectedItemInPage = this.searchResult[2]; // item index  = 3
      this.isBusy = false;
    }, 3500);
  }

  onSelectItemRequested(item: string) {
    if (item.includes('10')) {
      alert('לא ניתן לבחור פריט זה');
      return;
    }
    this.selectedItemInPage = item;
  }
}
