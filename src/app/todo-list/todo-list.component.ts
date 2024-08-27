import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CardComponent, AddTaskComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {



  taches : any[] = [
    { nom: "foo", termine: false, visible:true},
    { nom: "bar", termine: false, visible:true},
    { nom: "baz", termine: false, visible:true}, 
]

}
