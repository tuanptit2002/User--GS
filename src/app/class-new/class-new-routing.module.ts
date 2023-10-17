import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassNewComponent } from './class-new.component';

const routes: Routes = [
  {
    path:'',
    component:ClassNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassNewRoutingModule { }
