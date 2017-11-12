import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, list } from '../models/exercise'
import * as $ from 'jquery';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  apiRoot = "//localhost:3001" ;
  athlete = new User();
  
  constructor() { }

  ngOnInit() {
    setInterval(() => this.update(), 1000)

    $.getJSON(this.apiRoot + "/exercise/todo").done(data => {
      this.athlete.todoList = data;
    })

  }

  update() {
   /*$.getJSON(this.apiRoot + "/exercise/todo").done(data => {
      this.athlete.todoList = data;
    }); */

    $.getJSON(this.apiRoot + "/exercise/done").done(data => {
      this.athlete.doneList = data;
    });
  }

  finishExercise(e: MouseEvent, list: list, i: number){
    e.preventDefault();
    $.post(this.apiRoot + "/exercise/done" , list);
    this.athlete.todoList.splice(i, 1);
  }

}
