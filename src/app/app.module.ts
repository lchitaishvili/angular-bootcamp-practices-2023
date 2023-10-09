import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLogicComponent } from './custom-logic/custom-logic.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { RouterModule } from '@angular/router';
import { CustomDetailsComponent } from './custom-details/custom-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomLogicComponent,
    HighlightDirective,
    CustomDetailsComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
