import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { HomeComponent } from '../home/home.component';
import {GuardUserService as AuthGuard} from '../services/guard-user.service';

const routes: Routes =[{
  path:'login',
  component: LoginComponent
},
{path:'home',
component: HomeComponent,
canActivate:[AuthGuard]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
