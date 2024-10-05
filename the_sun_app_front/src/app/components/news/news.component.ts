import { Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];

  private articleService = inject(ArticleService);

  ngOnInit() {
    this.articleService.getArticles().subscribe({
      next: (response) => {
        this.articles = response.results;
      },
      error: (error) => {
        console.error('Error fetching articles:', error);
      }
    });
  }
}
