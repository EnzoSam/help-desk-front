import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { routesParams, routesPaths } from './constants/app-routes.constants';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:routesPaths.home
  },
  {
    path:routesPaths.home,
    component:HomeComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
