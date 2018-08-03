import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzModule } from '../../modules/xyz/xyz.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/xyz/xyz.module#XyzModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XyzRoutingModule { }
