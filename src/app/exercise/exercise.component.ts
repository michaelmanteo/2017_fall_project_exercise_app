import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, list, Room } from '../models/exercise';
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

  newWorkout: string;
  calories: number;
  total: number = 0;
  athlete: User;
  room = new Room();

  constructor(private http: Http, private router: Router, private exerciseService: ExerciseService) { }

  ngOnInit() {
    if (this.exerciseService.athlete == null) {
      this.router.navigate(['/login']);
    }
    this.athlete = this.exerciseService.athlete;
    setInterval(() => this.update(), 1000)
  }

  update() {
    this.http.get(this.exerciseService.apiRoot + "/exercise/room").subscribe(data => {
      this.room = data.json();
    });
  }

  calculateBurnedCalories(calories: number){ this.total += calories;  }

  finishExercise(e: MouseEvent, list: list, i: number, user: User) {
    e.preventDefault();
    const data = { workout: list, user: user };
    this.athlete.todoList.splice(i, 1);
    this.athlete.doneList.push(list);

    this.http.post(this.apiRoot + "/exercise/finish", data ).subscribe();
    this.calculateBurnedCalories(list.calories);
  }

  deleteExercise(e: MouseEvent, list: list, i: number) {
    e.preventDefault();
    this.athlete.todoList.splice(i, 1);
  }

  addNewExercise(e: MouseEvent) {
    e.preventDefault();
    if (this.newWorkout) {
      const data: list = { text: this.newWorkout, name: this.athlete.name, calories: this.calories };
      this.athlete.todoList.push(data);
    }
  }
}
