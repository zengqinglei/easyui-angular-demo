import { NgModule } from '@angular/core';
import { LayoutDefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LayoutModule { }
