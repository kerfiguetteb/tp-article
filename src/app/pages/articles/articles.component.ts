import { Component } from '@angular/core';
import { ArticleListComponent } from '../../article-list/article-list.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleListComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

}
