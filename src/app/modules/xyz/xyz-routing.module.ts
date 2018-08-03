import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcComponent } from './abc/abc.component';

const routes: Routes = [
  {
    path: '',
    component: AbcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XyzRoutingModule { }
