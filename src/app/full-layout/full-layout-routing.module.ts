import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout.component';

const routes: Routes = [
  {
    path:'',
    component:FullLayoutComponent,
    children:[
      {
        path:'home-page',
        loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path:'parents',
        loadChildren: () => import('../parents/parents.module').then(m => m.ParentsModule)
      },
      {
        path:'tutor',
        loadChildren: () => import('../tutor/tutor.module').then(m => m.TutorModule)
      },
      {
        path:'class-new',
        loadChildren: () => import('../class-new/class-new.module').then(m => m.ClassNewModule)
      },
      {
        path:'recruitment',
        loadChildren: () => import('../recruitment/recruitment.module').then(m => m.RecruitmentModule)
      },
      {
        path:'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
      },
      {
        path:'lean-online',
        loadChildren: () => import('../lean-online/lean-online.module').then(m => m.LeanOnlineModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
