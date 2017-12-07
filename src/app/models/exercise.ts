export class list {
    text: string;
}

export class User {
    name: string;
    todoList: list[] = [];
    doneList: list[] = [];
}