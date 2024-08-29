import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {

  @Input()
  article:any


  hidden:boolean = false

  toogle(){
    this.hidden = !this.hidden
  }


}
