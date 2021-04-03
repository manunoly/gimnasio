import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SokkerLoginPage } from './sokker-login.page';

const routes: Routes = [
  {
    path: '',
    component: SokkerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SokkerLoginPageRoutingModule {}
