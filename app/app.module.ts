import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ToDoComponent } from './todo/todo.component';
import { TodoFilterPipe } from './todo/todo-filter.pipe';
import { TodoService } from './todo/todo.service';




@NgModule({
  declarations: [ AppComponent, ToDoComponent, TodoFilterPipe ],
  imports: [ BrowserModule, FormsModule ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
