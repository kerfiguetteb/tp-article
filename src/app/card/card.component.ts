import { Component, EventEmitter, Input, Output } from '@angular/core';
import Tache from '../models/tache.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  @Input() item!:Tache
  

  @Output() onItem:EventEmitter<Tache> = new EventEmitter()

  deleteTask(value: Tache){
    this.onItem.emit(value)
  }
  
}
