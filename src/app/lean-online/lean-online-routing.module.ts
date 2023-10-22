import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeanOnlineComponent} from "./lean-online.component";

const routes: Routes = [
  {
    path:"",
    component:LeanOnlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeanOnlineRoutingModule { }
