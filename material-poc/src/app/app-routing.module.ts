import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



const routes: Routes = [
   {
     component:LoginComponent,
     path: 'login'
   },
   {
     component: AppComponent,
     path: ''
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
