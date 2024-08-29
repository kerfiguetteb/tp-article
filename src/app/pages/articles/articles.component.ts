import { Component } from '@angular/core';
import { ArticleListComponent } from '../../article-list/article-list.component';
import Article from '../../models/article.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleListComponent, ReactiveFormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  articles: Article[] = [
    { id:1, title: 'Angular Basics', content: 'Introduction to Angular...' },
    { id:2, title: 'Components and Templates', content: 'Understanding components...' },
    { id:3, title: 'Directives in Angular', content: 'How to use directives...' }
  ];


  constructor(private fb: FormBuilder, private articleService :ArticleService){}

  articleForm: FormGroup = this.fb.group({
    title:['', [Validators.required, Validators.minLength(3)]],
    description:['', [Validators.required, Validators.minLength(3)]]
  }) 

  submitted :boolean = false

  message: boolean = false

  private addArticle(): void 
  {
    this.articleService.creatArticle(this.articleForm.value).subscribe(
      {
        error: err => {
          if (!err) {
            this.message = true
          }
        }
      }
    )
    this.articleForm.reset()
    this.submitted = false
  }

  public onSubmit(): void 
  {
    this.submitted = true
    if (this.articleForm.valid) {
      this.message = true
      this.addArticle()
    }
  }

  public get title() {
    return this.articleForm.controls["title"]
  }
  public get description() {
    return this.articleForm.controls["description"]
  }

}
