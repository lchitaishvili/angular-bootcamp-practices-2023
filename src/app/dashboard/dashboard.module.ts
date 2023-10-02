import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent }
    ])
  ]
})
export class DashboardModule { }
