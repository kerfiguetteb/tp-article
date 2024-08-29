import { Component, Input } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import Article from '../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

@Input() articles!:Article[]


}
