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

@NgModule({
  declarations: [
    AppComponent,
    CustomLogicComponent,
    HighlightDirective,
    CustomDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
