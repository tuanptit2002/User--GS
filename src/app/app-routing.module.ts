import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/full-layout/full-layout.module').then(m => m.FullLayoutModule)
    ,

  },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
