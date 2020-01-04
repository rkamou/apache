import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {OrdersComponent} from './orders/orders.component';
import {ItemsAndCategoriesComponent} from './items-and-categories/items-and-categories.component';
import {AuthGuardService} from '../services/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuardService],
    component: HomePageComponent,
    children: [
      { path: '',
        children: [
          { path: 'oders', component: OrdersComponent },
          { path: 'items', component: ItemsAndCategoriesComponent },
          { path: '', component: ItemsAndCategoriesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingAdminModule { }
