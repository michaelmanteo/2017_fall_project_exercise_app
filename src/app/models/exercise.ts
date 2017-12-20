export class list {
    text: string;
    name: string
}

export class User {
    name: string;
    id: number;
    todoList: list[] = [];
    doneList: list[] = [];
}

export class Room {
    users: User[];
    workouts: list[];
}