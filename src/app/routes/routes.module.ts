import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MessageCenterDashboardComponent } from './messagecenter/dashboard/dashboard.component';
import { AppVersionDashboardComponent } from './appversion/dashboard/dashboard.component';
import { CrmCallDashboardComponent } from './crmcall/dashboard/dashboard.component';

@NgModule({
  declarations: [
    MessageCenterDashboardComponent,
    AppVersionDashboardComponent,
    CrmCallDashboardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RoutesModule { }
