import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
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
