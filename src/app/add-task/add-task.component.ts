import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Tache from '../models/tache.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

// Input a faire
  @Input()
  task!: any

// Output a faire
  @Output() onTaskFormEnfant: EventEmitter<Tache> = new EventEmitter()

  up(){
    this.onTaskFormEnfant.emit(this.task)
  }


}
