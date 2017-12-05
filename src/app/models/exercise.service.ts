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
    this.athlete = new User(); 

    this.http.post(this.apiRoot + "/exercise/player", { name, password }).subscribe(
      data => {
        this.athlete.name = name;
        this.http.get(this.apiRoot + "/exercise/player/todo").subscribe(data => {
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
