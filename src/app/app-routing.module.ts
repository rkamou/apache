import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './admin/home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'dashboard', component: HomePageComponent, outlet: 'main-contain'},
  // {path: 'oders', component: OrdersComponent, outlet: 'bartitle'},
  {path: 'login', component: LoginComponent, outlet: 'main-contain'},
  {path: '',  redirectTo: '/login', pathMatch: 'full', outlet: 'main-contain' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
