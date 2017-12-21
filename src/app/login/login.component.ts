import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  password: string;
  name: string;

  constructor(private exercise: ExerciseService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.exercise.login(this.name, this.password);
  }

  loginFB(){
    this.exercise.loginFB();
  }
}
