import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { ParentsComponent } from './parents/parents.component';
import { TutorComponent } from './tutor/tutor.component';
import { ClassNewComponent } from './class-new/class-new.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LeanOnlineComponent } from './lean-online/lean-online.component';

import { CommentComponent } from './comment/comment.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FullLayoutComponent,
    ParentsComponent,
    TutorComponent,
    ClassNewComponent,
    RecruitmentComponent,
    ContactComponent,
    LeanOnlineComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
