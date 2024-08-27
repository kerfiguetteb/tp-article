import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleListComponent } from "./article-list/article-list.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { HeaderComponent } from "./commons/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleListComponent, TodoListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpInput';
}
