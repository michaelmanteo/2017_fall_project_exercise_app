import { Injectable } from '@angular/core';
import { User } from './exercise';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class ExerciseService {

  athlete: User;
  apiRoot: string;

  constructor(private http: Http, private router: Router) { 
    this.apiRoot = "//localhost:3001";
    
  }

  login(name: string, password: string){

    this.http.post(this.apiRoot + "/exercise/room/users", { name, password }).subscribe(
      data => {
        console.log(data.json());
      
        this.athlete = data.json();

        this.http.get(this.apiRoot + "/exercise/room/player/todo").subscribe(data => {
          this.athlete.todoList = data.json();
        })

        this.router.navigate(['exercise']);

      },
      err=>{
        console.log(err);
      },

      ()=> {}
    );
  }

}
