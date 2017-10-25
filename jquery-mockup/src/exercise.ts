import * as $ from 'jquery';

export class list {
    text: string
}

export class User {
    name: string = "Michael Manteo"
    todoList: list[] = [];
    doneList: list[] = [];

    init() {
        return $.when(
            $.getJSON("/exercise/todo").done(data => {
                this.todoList = data;
            }),
            $.getJSON("/exercise/done").done(data => {
                this.doneList = data;
            })
        );
    }

    drawToDo() {
        $("#todo-list").html(
            this.todoList.map(x => `<li class="list-group-item"><button type="button">+</button> ${x.text}</li>`).join("")
        );
    }

    drawDone() {
        $("#done-list").html(
            this.doneList.map(x => `<li class="list-group-item"> ${x.text} </li>`).join("")
        );
    }
}

var athlete = new User();
athlete.init().done(() => {
    athlete.drawToDo();
    athlete.drawDone();

    $("#todo-list > li > button").click(function () {
        var workout = this.parentElement.innerText;
        console.log(workout);
        $("#done-list").append(x => `<li class="list-group-item">${workout}</li>`);
        $(this.parentNode).remove();
    });
});

/*
$("#addExercise").click( function(e) {
    var newWorkout = $(this).parent().children('#text-input').val()
    alert(newWorkout);
    //$("todo-list").append( x => `<li class="list-group-item"><button type="button">+</button>${newWorkout}</li>`)
}); */


