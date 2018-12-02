import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from 'ng-easyui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EasyUIModule,
    RouterModule
  ],
  exports: [
      CommonModule,
      EasyUIModule,
      RouterModule
  ]
})
export class SharedModule { }
