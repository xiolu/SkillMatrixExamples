import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ModuleOneComponent } from './module-one.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ModuleOneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModuleOneRoutingModule
  ]
})
export class ModuleOneModule { }
