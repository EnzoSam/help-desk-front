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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AssistantsListComponent,
    AssistantsDetailComponent,
    TiketsListComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    TokenService,
    AppService,
    AssistantService,
    TiketService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
