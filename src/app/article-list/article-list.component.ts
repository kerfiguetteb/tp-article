import { Component } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  articles: any[] = [
    { title: 'Angular Basics', content: 'Introduction to Angular...' },
    { title: 'Components and Templates', content: 'Understanding components...' },
    { title: 'Directives in Angular', content: 'How to use directives...' }
  ];

  count:number = 1;

  increment(event: number){
    this.count = event + 1
  }
}
