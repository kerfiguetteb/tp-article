import { Component } from '@angular/core';
import { TodoListComponent } from "../../todo-list/todo-list.component";

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent {

}
