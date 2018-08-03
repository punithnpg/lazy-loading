import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XyzRoutingModule } from './xyz-routing.module';
import { AbcComponent } from './abc/abc.component';

@NgModule({
  imports: [
    CommonModule,
    XyzRoutingModule
  ],
  declarations: [AbcComponent]
})
export class XyzModule { }
