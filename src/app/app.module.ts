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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent
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
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
