import { Injectable } from '@angular/core';
import { User } from './exercise';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

declare var window: any;
declare var FB: any;

@Injectable()
export class ExerciseService {

  athlete: User;
  users: User[];
  apiRoot: string;

  constructor(private http: Http, private router: Router) {
    this.apiRoot = "//localhost:3001";

  }

  login(name: string, password: string) {
    this.http.post(this.apiRoot + "/exercise/player", { name, password }).subscribe(
      data => {
        this.athlete = data.json();
        this.router.navigate(['exercise']);
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }
}
