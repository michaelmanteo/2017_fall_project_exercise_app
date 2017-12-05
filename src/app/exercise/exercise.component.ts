import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, list } from '../models/exercise';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ExerciseService } from '../models/exercise.service';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  apiRoot = "//localhost:3001";
  athlete: User;

  constructor(private http: Http, private router: Router, private exerciseService: ExerciseService) { }

  ngOnInit() {
    if(this.exerciseService.athlete == null){
        this.router.navigate(['/login']);
    }
    this.athlete = this.exerciseService.athlete;

    // this.http.get(this.apiRoot + "/exercise/todo").subscribe(data => {
    //   this.athlete.todoList = data.json();
    // });
  }

  update() {

    this.http.get(this.apiRoot + "/exercise/player/done").subscribe(data => {
      this.athlete.doneList = data.json();
    });
  }

  finishExercise(e: MouseEvent, list: list, i: number) {
    e.preventDefault();

    this.http.post(this.apiRoot + "/exercise/player/done", list).subscribe( res => {
      this.athlete.todoList.splice(i, 1);
      this.athlete.doneList.push( res.json() );
      this.update();

    });

  }

}
