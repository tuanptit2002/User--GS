import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassNewRoutingModule } from './class-new-routing.module';
import { ClassControllerService } from '../swagger';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClassNewRoutingModule
  ],
  providers:[ClassControllerService]
})
export class ClassNewModule { }
