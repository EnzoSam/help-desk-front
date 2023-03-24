import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistantsDetailComponent } from './components/assistants-detail/assistants-detail.component';
import { AssistantsListComponent } from './components/assistants-list/assistants-list.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { TiketsListComponent } from './components/tikets-list/tikets-list.component';
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
  },
  {
    path:routesPaths.tikets,
    component:TiketsListComponent
  },
  {
    path:routesPaths.assistants,
    component:AssistantsListComponent,
  },
  {        
    path:routesPaths.assistants + '/' + routesPaths.assistants_detail + '/:' + routesParams.detail_id,
    component:AssistantsDetailComponent        
  },  
  { path: '**', component: ErrorComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
