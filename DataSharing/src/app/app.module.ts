import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EcparentComponent } from './ecparent/ecparent.component';
import { EcchildComponent } from './ecparent/ecchild/ecchild.component';
import { BasiccheckComponent } from './basiccheck/basiccheck.component';
import { AdvancecheckComponent } from './advancecheck/advancecheck.component';
import { FinalcheckComponent } from './finalcheck/finalcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    LoginComponent,
    EcparentComponent,
    EcchildComponent,
    BasiccheckComponent,
    AdvancecheckComponent,
    FinalcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
