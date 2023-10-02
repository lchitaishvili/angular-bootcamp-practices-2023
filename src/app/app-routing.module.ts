import { NgModule } from '@angular/core';
import { CustomLogicComponent } from './custom-logic/custom-logic.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomDetailsComponent } from './custom-details/custom-details.component';
import { canActivateUserDetails } from './guards';
import { dashboardGuard } from './dashboard.guard';
const routes: Routes = [
  // { path: '', redirectTo: 'custom', pathMatch: 'full' },
  { path: 'custom', component: CustomLogicComponent },
  { 
    path: 'custom/:id',
    component: CustomDetailsComponent,
    canActivate: [canActivateUserDetails],
    // resolve: {
    //   userData: UserResolver
    // }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    canMatch: [dashboardGuard],
    loadChildren: () => import('./dashboard-v2/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
