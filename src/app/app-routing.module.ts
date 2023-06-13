import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignTiketAssistantComponent } from './components/assign-tiket-assistant/assign-tiket-assistant.component';
import { AssistantsDetailComponent } from './components/assistants-detail/assistants-detail.component';
import { AssistantsListComponent } from './components/assistants-list/assistants-list.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { TiketDetailComponent } from './components/tiket-detail/tiket-detail.component';
import { TiketsListComponent } from './components/tikets-list/tikets-list.component';
import { routesParams, routesPaths } from './constants/app-routes.constants';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { TiketChatComponent } from './components/tiket-chat/tiket-chat.component';
import { ReportsResumeComponent } from './components/reports-resume/reports-resume.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:routesPaths.tikets
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
    path:routesPaths.tiket_detail + '/:' + routesParams.detail_id,
    component:TiketDetailComponent
  },
  {
    path:routesPaths.assign_tiket_assistant + '/:' + routesParams.detail_id,
    component:AssignTiketAssistantComponent
  },
  {
    path:routesPaths.assistants,
    component:AssistantsListComponent,
  },
  {        
    path:routesPaths.assistants + '/' + routesPaths.assistants_detail + '/:' + routesParams.detail_id,
    component:AssistantsDetailComponent        
  },  
  {
    path:routesPaths.business,
    component:BusinessListComponent,
  },
  {        
    path:routesPaths.business + '/' + routesPaths.business_detail + '/:' +
     routesParams.detail_id, component:BusinessDetailComponent        
  },  
  {
    path:routesPaths.contacts,
    component:ContactsListComponent,
  },
  {        
    path:routesPaths.contacts + '/' + routesPaths.contacts_detail + '/:' +
     routesParams.detail_id, component:ContactsDetailComponent        
  },   
  {        
    path:routesPaths.tiket_chat + '/:' +
     routesParams.detail_id, component:TiketChatComponent        
  }, 
  {        
    path:routesPaths.reports_resume, component: ReportsResumeComponent        
  },     
  { path: '**', component: ErrorComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
