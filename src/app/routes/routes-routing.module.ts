import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { MessageCenterDashboardComponent } from './messagecenter/dashboard/dashboard.component';
import { AppVersionDashboardComponent } from './appversion/dashboard/dashboard.component';
import { CrmCallDashboardComponent } from './crmcall/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'messageCenter/dashboard',
        pathMatch: 'full'
      }, {
        path: 'messageCenter',
        children: [
          { path: 'dashboard', component: MessageCenterDashboardComponent }
        ]
      }, {
        path: 'appVersion',
        children: [
          { path: 'dashboard', component: AppVersionDashboardComponent }
        ]
      }, {
        path: 'crmCall',
        children: [
          { path: 'dashboard', component: CrmCallDashboardComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
