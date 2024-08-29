import { Component, inject, OnInit } from '@angular/core';
import Article from '../../models/article.model';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-article',
  standalone: true,
  imports: [],
  templateUrl: './show-article.component.html',
  styleUrl: './show-article.component.css'
})
export class ShowArticleComponent implements OnInit {

  article!:Article

  constructor(private articleService: ArticleService, private route :ActivatedRoute, private router: Router ){}
  // ou 
  // articleService = inject(ArticleService);
  // route = inject(ActivatedRoute);
  // router = inject(Router);

  private subscribeArticle(id: number): void 
  {
    this.articleService.getArticle(id).subscribe(
      {
        next:data=>{
          this.article = data
        },
        error: error => { 
          if (error) {            
            this.router.navigateByUrl("/not-found")
          }
        }
    }
    )
  }
  private setSubscribe(id: string | null){
    if (id) {
      this.subscribeArticle(+id)
      
    }else if (!id){
      this.router.navigate(['home'])
    }
  }

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') 
    this.setSubscribe(id)
  }

}
