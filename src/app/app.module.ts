import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';

import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    TopBarComponent,
    ItemListComponent,
    ItemDetailsComponent,
    FooterComponent,
    CartComponent,
    SearchResultsComponent,
    CheckoutComponent,
    InventoryComponent,
    LoginComponent,
    OrdersListComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: 'home', component: CategoryListComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'category/:categoryName', component: ItemListComponent },
      { path: 'category/:categoryName/:itemId', component: ItemDetailsComponent},
      { path: 'my-cart', component: CartComponent},
      { path: 'search', component: SearchResultsComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'login', component: LoginComponent},
      { path: 'admin/inventory', component: InventoryComponent},
      { path: 'admin/orders', component: OrdersListComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
