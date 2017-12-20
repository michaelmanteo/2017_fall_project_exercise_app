import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http'
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginComponent } from './login/login.component';
import { ExerciseService } from './models/exercise.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    LoginComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule,
    RouterModule.forRoot([
      { path: "exercise", component: ExerciseComponent },
      { path: "login", component: LoginComponent},
      { path: "home", component: IndexComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
  ])
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
