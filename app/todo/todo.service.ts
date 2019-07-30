import { Injectable } from '@angular/core';
import { Init } from './initial-items';

@Injectable()
export class TodoService extends Init{
    constructor() {
        super();
        console.log("initialising list");
        this.load();
    }
    getTodoList() {
        console.log("inside servicec get method");
        let todolist = JSON.parse(localStorage.getItem('todolist'));
        return todolist;
    }

    getItemListCount() {
        let todolist = JSON.parse(localStorage.getItem('todolist'));
        return todolist.length;
    }

    addItem(newItem: any) {
        let todolist = JSON.parse(localStorage.getItem('todolist'));
        for(let i=0;i<todolist.length;i++) {
            if(todolist[i].name==newItem.name) {
                window.alert("Task Already Added!");
                return;
            }
        }
        todolist.push(newItem);
        localStorage.setItem('todolist',JSON.stringify(todolist));
    }

    deleteItem(id: any) {
        console.log("inside delete in service");
        let todolist = JSON.parse(localStorage.getItem('todolist'));
        var itemDelete;
        for(let i=0;i<todolist.length;i++) {
            if(todolist[i].id==id) {
                itemDelete=todolist[i].name;
                todolist.splice(i,1);
            }
        } 
        window.alert("Deleting Task " + itemDelete);
        localStorage.setItem('todolist',JSON.stringify(todolist));
        console.log("Task Deleted Successfully");
    }

    taskCompleted(id: any) {
        console.log("inside task complete in service");
        let todolist = JSON.parse(localStorage.getItem('todolist'));
        for(let i=0;i<todolist.length;i++) {
            if(todolist[i].id==id) {
                console.log(todolist[i].id);
                if(todolist[i].complete=="WIP")
                    todolist[i].complete="Complete";
                else
                    todolist[i].complete="WIP";
            }
        } 
        localStorage.setItem('todolist',JSON.stringify(todolist));
    }
}