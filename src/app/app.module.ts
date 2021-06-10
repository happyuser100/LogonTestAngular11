import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchProductsPageComponent } from './components/search-products-page/search-products-page.component';
import { StringListComponent } from './components/string-list/string-list.component';

@NgModule({
  declarations: [ // components, directives and pipes
    AppComponent,
    SearchPageComponent,
    StringListComponent,
    ProductsListComponent,
    SearchProductsPageComponent
  ],
  imports: [ // reference to modules
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Product: id, name, price, expirationDate
