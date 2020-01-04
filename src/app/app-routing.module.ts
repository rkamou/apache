import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import {HomePageComponent} from './admin/home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AdminModule} from './admin/admin.module';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: 'admin', canActivate: [AuthGuardService],
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  // {path: 'oders', component: OrdersComponent, outlet: 'bartitle'},
  {path: '',  redirectTo: '/login', pathMatch: 'prefix'},
  {path: 'login', component: LoginComponent},
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
