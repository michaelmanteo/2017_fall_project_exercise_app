import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, list } from '../models/exercise';
import { Http } from '@angular/http';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  apiRoot = "//localhost:3001";
  athlete = new User();

  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get(this.apiRoot + "/exercise/todo").subscribe(data => {
      this.athlete.todoList = data.json();
    });
  }

  update() {

    this.http.get(this.apiRoot + "/exercise/done").subscribe(data => {
      this.athlete.doneList = data.json();
    });
  }

  finishExercise(e: MouseEvent, list: list, i: number) {
    e.preventDefault();
    
    this.http.post(this.apiRoot + "/exercise/done", list).subscribe( res => {
      this.athlete.todoList.splice(i, 1);
      this.athlete.doneList.push( res.json() );
      this.update();

    });

  }

}
