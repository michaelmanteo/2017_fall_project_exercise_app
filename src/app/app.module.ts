import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http'
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule,
    RouterModule.forRoot([
      { path: "exercise", component: ExerciseComponent },
      { path: "home", component: IndexComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
