import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
    selector: 'my-todo',
    templateUrl: './todo.component.html'
})

export class ToDoComponent implements OnInit {
    title: string = 'TO DO LIST APP';
    todolist: any[];
    constructor (private _todoService: TodoService){ }

    ngOnInit(){
        console.log("inside component init");
        this.todolist=this._todoService.getTodoList();
    }

    addTodoItem(value: string) {
        console.log("item added: " + value);
        if(value != null && value != '') {
        let todolistCount = this._todoService.getItemListCount();
        let newItem = {
            id: todolistCount + 1,
            name: value.toUpperCase(),
            complete: "WIP"
        };
        this._todoService.addItem(newItem);
        window.location.reload();
        }
    }

    deleteTodoItem(itemId: any) {
        console.log("inside delete item in component");
        this._todoService.deleteItem(itemId);
        this.todolist=this._todoService.getTodoList();
    }

    markCompleted(itemId: any) {
        console.log("inside mark completed in component");
        this._todoService.taskCompleted(itemId);
        this.todolist=this._todoService.getTodoList();
    }
}