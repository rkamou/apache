import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutingAdminModule} from './routing-admin.module';
import {HomePageComponent} from './home-page/home-page.component';
import {ItemsAndCategoriesComponent} from './items-and-categories/items-and-categories.component';
import {OrdersComponent} from './orders/orders.component';



@NgModule({
  declarations: [HomePageComponent, ItemsAndCategoriesComponent, OrdersComponent],
  imports: [
    CommonModule,
    RoutingAdminModule
  ]
})
export class AdminModule { }
