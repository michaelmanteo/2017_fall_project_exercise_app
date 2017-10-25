import * as $ from 'jquery';

export class Done {
    exerciseList: string[] = [];
}

export class ToDo {
    exercise: string;
    exerciseList: string[] = [];
    
    finishExercise(){
        $("#todo-list").find("li.list-group-item>button").click( function(e){
            var workout = this.parentElement.innerText;
            $("#done-list").append( x => `<li class="list-group-item">${workout}</li>`);
        });
    }
}

var list = new ToDo();
list.finishExercise();

