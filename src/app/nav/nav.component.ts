import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor(private exercise: ExerciseService) { }

  ngOnInit() {
  }

  logout(){ 
    this.exercise.logout();
  }

}
