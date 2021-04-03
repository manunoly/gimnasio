import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SokkerLoginPageRoutingModule } from './sokker-login-routing.module';

import { SokkerLoginPage } from './sokker-login.page';
import { SharedModule } from './../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SokkerLoginPageRoutingModule,
    SharedModule
  ],
  declarations: [SokkerLoginPage]
})
export class SokkerLoginPageModule {}
