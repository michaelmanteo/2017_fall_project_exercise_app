export class list {
    text: string;
    calories: number;
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