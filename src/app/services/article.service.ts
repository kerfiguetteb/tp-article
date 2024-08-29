import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Article from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private urlApi = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getArticle(id :number):Observable<Article>
  {
    return this.http.get<Article>(`${this.urlApi}/articles/${id}`)
  }

  creatArticle(article: Article):Observable<Article>
  {
    return this.http.post<Article>(`${this.urlApi}/articles`, article)
  }

}
