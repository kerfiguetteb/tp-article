import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  taches : any[] = [
    { nom: "foo", termine: false, visible:true},
    { nom: "bar", termine: false, visible:true},
    { nom: "baz", termine: false, visible:true}, 
]

nomTaskForm: string = ""

ajouterTask(){
  this.taches.push({nom:this.nomTaskForm, termine:false, visible:true})
  this.nomTaskForm = '';
}

deleteTask(value: any){
  value.visible = false
}
}
