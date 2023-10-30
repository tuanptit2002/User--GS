import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassNewRoutingModule } from './class-new-routing.module';
import {
  CityControllerService,
  ClassControllerService,
  DistrictControllerService, LevelSchoolControllerService,
  MajoredControllerService,
  SubjectControllerService,
  TechClassControllerService
} from '../swagger';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClassNewRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ClassControllerService, 
    SubjectControllerService, 
    DistrictControllerService, 
    CityControllerService,
    LevelSchoolControllerService,
  TechClassControllerService,
    MajoredControllerService
]
})
export class ClassNewModule { }
