import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angularMaterial.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppService } from './services/app.service';
import { InterceptorService } from './services/interceptor.service';
import { TokenService } from './services/token.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssistantsListComponent } from './components/assistants-list/assistants-list.component';
import { AssistantsDetailComponent } from './components/assistants-detail/assistants-detail.component';
import { TiketsListComponent } from './components/tikets-list/tikets-list.component';
import { AssistantService } from './services/assitant.service';
import { ErrorComponent } from './components/error/error.component';
import { TiketService } from './services/tiket.service';
import { TiketDetailComponent } from './components/tiket-detail/tiket-detail.component';
import { AssignTiketAssistantComponent } from './components/assign-tiket-assistant/assign-tiket-assistant.component';
import { BusinessService } from './services/business.service';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { ContactService } from './services/contact.service';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { MessageService } from './services/message.service';
import { TiketChatComponent } from './components/tiket-chat/tiket-chat.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ReportsResumeComponent } from './components/reports-resume/reports-resume.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AssistantsListComponent,
    AssistantsDetailComponent,
    TiketsListComponent,
    ErrorComponent,
    TiketDetailComponent,
    AssignTiketAssistantComponent,
    BusinessListComponent,
    BusinessDetailComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ChatComponent,
    ChatMessageComponent,
    TiketChatComponent,
    SendMessageComponent,
    ReportsResumeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    TokenService,
    AppService,
    AssistantService,
    TiketService,
    BusinessService,
    ContactService,
    MessageService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
