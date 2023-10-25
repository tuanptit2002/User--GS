import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassNewRoutingModule } from './class-new-routing.module';
import { ClassControllerService } from '../swagger';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClassNewRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ClassControllerService]
})
export class ClassNewModule { }
