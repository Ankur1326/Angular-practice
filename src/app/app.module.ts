import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
    HighlightDirective,
    CountryCodePipe,
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
