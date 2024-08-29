import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AddTaskComponent } from "../add-task/add-task.component";
import Tache from '../models/tache.model';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CardComponent, AddTaskComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  constructor(private tacheService: TacheService) { }


  taches!: Tache[]

  formTask: any = {
    nom: "",
    termine: false,
    visible: true
  }

  ajouterTask(event: Tache) {
    this.tacheService.createTache(event).subscribe((data) => {
      this.taches.push(data)

    })
  }

  deleteTask(value: Tache) {
    this.tacheService.deleteTache(value.id).subscribe(() => {
      value.visible = false
    })

  }


  ngOnInit(): void {
    this.tacheService.getTaches().subscribe((data) => {
      this.taches = data
      console.log(this.taches);

    })
    console.log(this.taches);

  }

}
