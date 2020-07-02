import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    TopBarComponent,
    ItemListComponent,
    ItemDetailsComponent,
    CartComponent,
    SearchResultsComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    CarouselModule,
    RouterModule.forRoot([
      { path: 'home', component: CategoryListComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'category/:categoryName', component: ItemListComponent },
      { path: 'category/:categoryName/:productSKU', component: ItemDetailsComponent},
      { path: 'my-cart', component: CartComponent},
      { path: 'search', component: SearchResultsComponent},
      { path: 'about', component: AboutComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
